import React from "react";
import { useGlobalContext } from "./context";


const Login = () => {
    const { handleSubmit } = useGlobalContext();
    return (
        <>
            <div className="auth-container-form">
                <form className="login-form">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="youremail@gmail.com" className="center-block"></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="********" className="center-block"></input>
                </form>
                <button onClick={handleSubmit} className="submit-btn">
                    Login
                </button>
            </div>
        </>
    )
}
export default Login;