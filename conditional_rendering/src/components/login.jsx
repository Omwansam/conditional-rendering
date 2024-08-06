import { useState } from "react"
import React from 'react'

function UserDetails({ isLoggedIn, userName }) {
    return (
<div>
        {isLoggedIn ? <h1>Welcome, {userName}!</h1> : <h1>Please Enter your Details.</h1>}
</div>
    );
}

const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleLogin = () => {
    setIsLoggedIn(true);
};

const handleLogout = () => {
    setIsLoggedIn(false);
};
return (
    <div>
    <UserDetails isLoggedIn={isLoggedIn} userName="Omwansa Mwebi" />
    {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
    ) : (
        <button onClick={handleLogin}>Login</button>
    )}
    </div>
)
}

export default Login;