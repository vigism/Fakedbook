import React from 'react';
import SidePanel from './SidePanel/SidePanel'

class NewsFeed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="newsfeed-main">
                <SidePanel user={this.props.user}/>
            </div>
        )
    }

}

export default NewsFeed;