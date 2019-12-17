import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    console.log(friends)

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
            {friends.map(friend => (
                <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            ))}
        </div>
    )
}

export default FriendsList;