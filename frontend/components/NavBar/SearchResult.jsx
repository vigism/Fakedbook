import React from 'react';

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="search-res-list-el">
            {this.props.user.first_name} {this.props.user.last_name}
            <button className="add-friend-button"><i className="add-friend-icon"></i>Add Friend</button>
            </li>
        )

    }

}

export default SearchResult;