import React from 'react';

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_one_id: this.props.current_user_id,
            user_two_id: this.props.user.id,
            status: false
        }
        this.handleFriend = this.handleFriend.bind(this);
    }

    handleFriend() {
        this.props.newFriend(this.state)
    }

    render() {
        return (
            <li className="search-res-list-el">
            <div className="search-res-profile-pic"></div>
            {this.props.user.first_name} {this.props.user.last_name}
            <button onClick= {() => this.handleFriend()} className="add-friend-button"><i className="add-friend-icon"></i>Add Friend</button>
            </li>
        )

    }

}

export default SearchResult;