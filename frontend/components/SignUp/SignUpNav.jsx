import React from 'react';

class SignUpNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (    
            <div className="signup-nav-bar">
                <div className="signup-main-logo"></div>
                <div className="login-form">
                    <form>
                        <label>Email or phone
                            <input type="text" />
                        </label>
                        <label>Password
                                <input type="text" />
                        </label>
                        <input type="submit" value="Log In"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUpNav;