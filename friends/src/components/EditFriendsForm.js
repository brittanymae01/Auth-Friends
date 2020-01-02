import React, { useState } from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialItem = {
    name: '',
    age: '',
    email: ''
}

const EditFriendsForm = props => {
    const [updated, setUpdated] = useState(initialItem)

    const handleChanges = e => {
        setUpdated({
            ...updated, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put('/friends/1', updated)
            .then(res => {
                console.log(res)
                props.updateFriends(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    value={updated.name}
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    name='age'
                    value={updated.age}
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    name='email'
                    value={updated.email}
                    onChange={handleChanges}
                />
                <button>Edit</button>
            </form>
        </div>
    )
}

export default EditFriendsForm