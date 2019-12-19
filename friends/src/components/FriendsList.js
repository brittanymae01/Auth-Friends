import React, { useState, useEffect } from 'react';

import AddFriendsForm from './AddFriendsForm';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <AddFriendsForm setFriends={setFriends} />
            <div className='container'>
                {friends.map(friend => (
                    <div className='friends' key={friend.id}>
                        <h2>{friend.name}</h2>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FriendsList;