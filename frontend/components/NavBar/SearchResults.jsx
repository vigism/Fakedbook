import React from 'react';
import SearchResult from './SearchResult';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let results =  Object.keys(this.props.res).map(el => <SearchResult user={this.props.res[el]} /> )
        
        if(Array.isArray(this.props.res) ) {
            return (
             <h1>No results found</h1>
            )
        } else{
        return(
            <ul className="search-res-list">
                {results}
             </ul>
        )
        }
    }

}

export default SearchResults