import React from 'react';

class NavBarFriends extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllFriends();
    }
    render() {
        return(
            <button className="nav-friends-button" >
                
                <i className="nav-friends-button-icon"></i>
                <i className="nav-friends-button-icon-notification">{Object.keys(this.props.incomingRequests).length}</i>
            </button>
        )
    }

}

export default NavBarFriends