import React from 'react';
import SearchResult from './SearchResult';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let results =  Object.keys(this.props.res).map(el => <SearchResult user={this.props.res[el]} /> )
        if(this.props.res[0] === "No users found") {
            results = <li className="search-res-list-el">No users found</li>
        }
        return(
            <ul className="search-res-list">
                {results}
             </ul>
        )
        
    }

}

export default SearchResults