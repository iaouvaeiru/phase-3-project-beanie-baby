import React from 'react'

export default function login() {
    return (
        <div>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username"></input>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password"></input>
                <input type="submit" value="Log in"/>
            </form>
        </div>
    )
}
