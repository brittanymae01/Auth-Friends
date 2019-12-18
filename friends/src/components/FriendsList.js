import React, { useState, useEffect } from 'react';

import AddFriendsForm from './AddFriendsForm';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('./friends')
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
                        <h3>{friend.name}</h3>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FriendsList;