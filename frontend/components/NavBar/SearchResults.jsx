import React from 'react';
import SearchResult from './SearchResult';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let results =  Object.keys(this.props.res).map(el => <SearchResult friends={this.props.friends} updateFriend={this.props.updateFriendRequest} 
            deleteFriend={this.props.deleteFriendRequest} user={this.props.res[el]} newFriend={this.props.newFriend} current_user_id={this.props.current_user_id}/> )
        if(this.props.res[0] === "No users found") {
            results = <li className="search-res-list-el">No users found</li>
        }
        return(
            <div className="main-content-container">
            <ul className="search-res-list">
                {results}
             </ul>
             </div>
        )
        
    }

}

export default SearchResults