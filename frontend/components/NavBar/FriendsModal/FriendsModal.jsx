import React from 'react';
import ReactDOM from 'react-dom';
import FriendsModalComponent from './FriendsModalComponent';


class FriendsModal extends React.Component {
    constructor(props) {
        super(props);
       
    }

  
   
    render() {
        let requests = []
        let keys = Object.keys(this.props.requests);
        if(Object.keys(this.props.users).length > 0) {
            for(let i = 0; i < keys.length; i++){
                if(this.props.users[this.props.requests[keys[i]].user_two_id] != undefined) {
                    requests.push(<FriendsModalComponent 
                        updateFriend = {this.props.updateFriend}
                        friendId = {this.props.requests[keys[i]].id}
                        currentUser = {this.props.currentUser}
                        deleteFriend = {this.props.deleteFriend}
                        sender={this.props.users[this.props.requests[keys[i]].user_two_id]}/>)
                    }
                }
        }
     const JSX = (
        <div  className="friends-modal-container" onClick={() => this.props.toggleDropDown()}>
            <div className="friends-modal">
            <ul className="friends-modal-list">
            {requests}
            </ul>
            </div>
        </div>
    )
      
    
    if(!this.props.friendsDropdown) {
    return (
        <i></i>
    )
    } else {
    return ReactDOM.createPortal(JSX, document.querySelector("#modal"))
    }
    }
}

export default FriendsModal;