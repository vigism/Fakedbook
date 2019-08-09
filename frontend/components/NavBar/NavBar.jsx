import React from 'react';
import {withRouter} from 'react-router-dom'
import SettingsDropDown from './SettingsDropDown';
import SearchBar from './SearchBar';
import NavBarFriends from './NavBarFriends';
import SettingsModalComponent from './SettingsModal/SettingsModalComponent';

class NavBar extends React.Component {

    constructor(props) {
        super(props);    
        this.state = {
            friendsDrop: false,
            settingsDrop: false,
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.clickName = this.clickName.bind(this);
        this.handleFriendsButtonClick = this.handleFriendsButtonClick.bind(this);
        this.handleSettingsButtonClick = this.handleSettingsButtonClick.bind(this);
    }

    componentDidMount() {
        this.props.getAllFriends();
    }

    handleFriendsButtonClick() {
        this.setState({
            friendsDrop: !this.state.friendsDrop
        });
    }

    handleSettingsButtonClick() {
        this.setState({
            settingsDrop: !this.state.settingsDrop,
        })
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
        let notification;
        if (Object.keys(this.props.incomingRequests).length > 0){
            notification = <i className="nav-friends-button-icon-notification">{Object.keys(this.props.incomingRequests).length}</i>
        } else {
            notification = <i></i>
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
                        </div>{this.state.editDrop && <div className="post-dropdown">
                    <ul>
                    <li className="post-dropdown-li"
                    onClick={this.deletePost}>Remove Post</li>
                    <li className="post-dropdown-li"
                    onClick={this.editPost}>Edit Post</li>
                    </ul>
                </div>}

                        <div className="main-nav-bar-icons">
                        <button className="nav-friends-button" onClick={this.handleFriendsButtonClick}  >
                            
                            <i className="nav-friends-button-icon"></i>
                            
                            {notification}
                            
                        </button>
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
                            <button id="nav-modal-button" className="nav-drop-down-button" onClick={this.handleSettingsButtonClick}>
                                <i className="nav-drop-down-button-icon"></i>
                            </button>
                            <div  className="settings-modal-container" onClick={() => this.props.toggleDropDown()}>
                            {this.state.settingsDrop && 
                                <div className="settings-modal">
                                    <ul className="settings-modal-list">
                                    <SettingsModalComponent action={this.props.logout}/>
                                    </ul>
                               
                            </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(NavBar);