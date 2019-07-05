import React from 'react';
import SidePanel from './SidePanel/SidePanel'

class NewsFeed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="newsfeed-main">
                <SidePanel first_name={this.props.first_name} last_name={this.props.last_name} />
            </div>
        )
    }

}

export default NewsFeed;