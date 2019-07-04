import React from 'react';
import {withRouter} from 'react-router-dom'

class NavBar extends React.Component {

    constructor(props) {
        super(props);    
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.logout();
        let path = '/';
        this.props.history.push(path);
    }

    render() {
        return (
           <button onClick={this.handleLogout}>Logout</button>
        )
    }

}

export default withRouter(NavBar);