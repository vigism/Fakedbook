import React from 'react';
import {withRouter} from 'react-router-dom'
import SettingsDropDown from './SettingsDropDown';
import SearchBar from './SearchBar';
import NavBarFriends from './NavBarFriends';
import SettingsModal from './SettingsModal/SettingsModal';

class NavBar extends React.Component {

    constructor(props) {
        super(props);    
        this.handleLogout = this.handleLogout.bind(this);
        this.clickName = this.clickName.bind(this);
    }

    handleLogout(){
        this.props.logout();
        let path = '/';
        this.props.history.push(path);
    }

    clickName() {
        this.props.history.push(`/${this.props.user.id}/profile`);
    }

    render() {
        let photo;
        if(this.props.user.photoUrl) {
            photo = this.props.user.photoUrl;
        } else {
            return null;
        }
        return (
            <div className="main-nav-bar">
                <div className="main-nav-bar-content">
                    <div className="main-nav-bar-content-left">
                        <div className="logo-button" onClick = {() => {window.location.hash='/newsfeed'}}></div>
                        
                        <SearchBar fetchUsers={this.props.fetchUsers}/>
                       
                    </div>

                    <div className="main-nav-bar-content-mid">
                        <div className="main-nav-bar-user" onClick={() => this.clickName()}>
                            <div className="main-nav-bar-user-profile-pic" ><img className="main-nav-bar-user-profile-pic-pic" src={photo}></img></div>
                            <div className="main-nav-bar-user-name">{this.props.user.first_name}</div>
                        </div>
                        <div className="main-nav-bar-links">
                            <button className="home-button">Home</button>
                            <button className="friends-button" >Find Friends</button>
                            <button className="create-button">Create</button>
                        </div>

                        <div className="main-nav-bar-icons">
                            <NavBarFriends receiveUserById= {this.props.receiveUserById} toggleFriendsDropdown = {this.props.toggleFriendsDropdown} incomingRequests={this.props.incomingRequests} getAllFriends={this.props.getAllFriends}/>
                            <button className="nav-message-button" >
                                <i className="nav-message-button-icon"></i>
                            </button>
                            <button className="nav-notification-button" >
                                <i className="nav-notification-button-icon"></i>
                            </button>
                            <button className="nav-help-button" >
                                <i className="nav-help-button-icon"></i>
                            </button>
                           <SettingsDropDown toggleDropDown={this.props.toggleDropDown} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(NavBar);