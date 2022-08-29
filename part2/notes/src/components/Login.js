import React from 'react';

const Login = () => {
    return (
        <div className="login-body">
            <div className="">
                <form action="#" method="POST"
                      className="login-form"
                      name="login-form">
                    <div className="">
                        <label htmlFor="username-login" className="login-label">Username:</label>
                        <input type="text" placeholder="Enter your Username" id="login-username" name="username"
                               className="login-input" required=""/>
                    </div>
                    <div className="">
                        <label htmlFor="password-login" className="login-label">Password:</label>
                        <input type="text" placeholder="Enter your Password" id="login-username" name="password"
                               className="login-input" required=""/>
                    </div>
                    <div className="">
                        <input type="checkbox" id="login-checkbox" name="remember" value="On"/>
                        <label htmlFor="login-checkbox" className="">Remember me</label>
                    </div>
                    <div className="">
                        <a href="#" className="login-button">Login</a>
                        <input type="submit" value="submit" className="hidden"/>
                    </div>
                    <input type="hidden" value="" name="recaptchaResponse"/>
                </form>
            </div>

        </div>
    )
}

export default Login
