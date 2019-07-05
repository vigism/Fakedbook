import React from 'react';

class NavBarFriends extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllFriends();
    }
    render() {
        let notification;
        if (Object.keys(this.props.incomingRequests).length > 0){
            notification = <i className="nav-friends-button-icon-notification">{Object.keys(this.props.incomingRequests).length}</i>
        } else {
            notification = <i></i>
        }
        return(
            <button className="nav-friends-button" >
                
                <i className="nav-friends-button-icon"></i>
                
                {notification}
                
            </button>
        )
    }

}

export default NavBarFriends