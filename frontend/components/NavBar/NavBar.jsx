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
            <div className="main-nav-bar">
                <div className="main-nav-bar-content">
                    <div className="main-nav-bar-content-left">
                        <div className="logo-button"></div>
                        <div className="search-bar">
                            <input className="nav-search" type="text" placeholder="Search "/>
                            <button className="nav-search-button" >
                                <i className="nav-search-button-icon"></i>
                            </button>
                        </div>
                    </div>

                    <div className="main-nav-bar-content-mid">
                        <div className="main-nav-bar-user">
                            <div className="main-nav-bar-user-profile-pic"></div>
                            <div className="main-nav-bar-user-name">{this.props.user.email}</div>
                        </div>
                    </div>
                </div>
                {/* <button onClick={this.handleLogout}>Logout</button> */}
            </div>
        )
    }

}

export default withRouter(NavBar);