import React from 'react';

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="search-res-list-el">{this.props.user.first_name}</li>
        )

    }

}

export default SearchResult;