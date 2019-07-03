import React from 'react';
import SignUpNav from './SignUpNav';
import SignUpMain from './SignUpMain';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <SignUpNav login={this.props.login}/>
            <SignUpMain signup={this.props.signup}/>
            </div>
        )
    }
}

export default SignUp;