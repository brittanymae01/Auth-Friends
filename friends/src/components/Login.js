import React, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({ username: '', password: '' })
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true)

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    value={user.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
                {/* {isFetching && 'logging in...'} */}
            </form>
        </div>
    )
}

export default Login;