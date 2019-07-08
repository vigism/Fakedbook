import React from 'react';

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.handleFriend = this.handleFriend.bind(this);
        this.handleDeleteFriend = this.handleDeleteFriend.bind(this);
    }

    handleFriend() {
        let friend = {
            user_one_id: this.props.current_user_id,
            user_two_id: this.props.user.id,
            status: false
        }
        this.props.newFriend(friend)
    }

    handleDeleteFriend(id) {
        let friend = {
            id:id,
            user_one_id: this.props.current_user_id,
            user_two_id: this.props.user.id,
            status: false
        }
        friend.id = id;
        this.props.deleteFriend(friend);
        
    }

    handleUpdateFriend(id) {
        let friend = {
            id:id,
            user_one_id: this.props.current_user_id,
            user_two_id: this.props.user.id,
            status: true
        }
        friend.id = id;
        this.props.updateFriend(friend);
        
    }

    

    render() {
        let keys = Object.keys(this.props.friends);
        let button = <button onClick= {() => this.handleFriend()} className="add-friend-button"><i className="add-friend-icon"></i>Add Friend</button>;
        
        for(let i = 0; i< keys.length; i++) {
            let cur = this.props.friends[keys[i]];
            if ( cur.user_one_id === this.props.current_user_id && cur.user_two_id === this.props.user.id && cur.status === true) {
                button = <button onClick= {() => this.handleDeleteFriend(cur.id)} 
                className="remove-friend-button"><i className="remove-friend-icon"></i>Remove Friend</button>;
            } else if (cur.user_one_id === this.props.current_user_id && cur.user_two_id === this.props.user.id && cur.status === false) {
                button = <button onClick= {() => this.handleDeleteFriend(cur.id)}
                className="add-friend-button"><i className="add-friend-icon"></i>Cancel Request</button>;
            } else if (cur.user_one_id === this.props.user.id && cur.user_two_id === this.props.current_user_id && cur.status === true) {
                button = <button onClick= {() => this.handleDeleteFriend(cur.id)} 
                className="remove-friend-button"><i className="remove-friend-icon"></i>Remove Friend</button>;
            }  else if (cur.user_one_id === this.props.user.id && cur.user_two_id === this.props.current_user_id && cur.status === false) {
                button = [<button onClick= {() => this.handleDeleteFriend(cur.id)}
                className="add-friend-button"><i className="add-friend-icon"></i>Deny Request</button>,
                 <button onClick= {() => this.handleUpdateFriend(cur.id)}
                className="add-friend-button"><i className="add-friend-icon"></i>Accept Request</button>];
            } 
        }
        return (
            <li className="search-res-list-el">
            <div className="search-res-profile-pic"><img className="search-res-profile-pic" src={this.props.user.photoUrl}></img></div>
            {this.props.user.first_name} {this.props.user.last_name}
            {button}
            </li>
        )

    }

}

export default SearchResult;