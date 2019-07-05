import React from 'react';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let results =  Object.keys(this.props.res).map(el => <li>{this.props.res[el].first_name}</li>)
        
        if(Array.isArray(this.props.res) ) {
            return (
             <h1>No results found</h1>
            )
        } else{
        return(
            <ul>
                {results}
             </ul>
        )
        }
    }

}

export default SearchResults