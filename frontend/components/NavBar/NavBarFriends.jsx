import React from 'react';

class NavBarFriends extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getAllFriends();
        
    }

    handleClick() {
        this.props.toggleFriendsDropdown();
        let keys = Object.keys(this.props.incomingRequests);
        for(let i = 0;i < keys.length; i++){
            this.props.receiveUserById(this.props.incomingRequests[keys[i]].user_one_id)
        
        
        }
    }

    render() {
       
        let notification;
        if (Object.keys(this.props.incomingRequests).length > 0){
            notification = <i className="nav-friends-button-icon-notification">{Object.keys(this.props.incomingRequests).length}</i>
        } else {
            notification = <i></i>
        }
        return(
            <button className="nav-friends-button" onClick={() => this.handleClick()}  >
                
                <i className="nav-friends-button-icon"></i>
                
                {notification}
                
            </button>
        )
    }

}

export default NavBarFriends