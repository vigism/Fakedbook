import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
        }
        this.update = this.update.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
    }


    update(e) {
        this.setState({
            search: e.currentTarget.value
        })
    } 

    submitSearch() {
        this.props.fetchUsers(this.state);
        let path = '/searchResults';
        window.location.hash = path;
    }

    render() {
        return (
            <div className="search-bar">
            <input className="nav-search" type="text" placeholder="Search " onChange={(e)=>this.update(e)}/>
                    <button className="nav-search-button" onClick={() => this.submitSearch()}>
                        <i className="nav-search-button-icon"></i>
                    </button>
                    
            </div>   
        )
    }

}

export default SearchBar;