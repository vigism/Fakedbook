import React from 'react';

class SidePanel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="newsfeed-sidepanel">
                        <div className="newsfeed-sidepanel">
                            <div className="newsfeed-sidepanel-button  newsfeed-sidepanel-user">
                                <div className="newsfeed-sidepanel-profile-pic"></div>
                                <div className="newsfeed-sidepanel-text">{this.props.first_name} {this.props.last_name}</div>
                            </div>
                            
                            <div className="newsfeed-sidepanel-button">
                                <div className="newsfeed-icon"></div>
                                <div className="newsfeed-sidepanel-text">Newsfeed</div>
                            </div>
                            <div className="newsfeed-sidepanel-button">
                                <div className="messenger-icon"></div>
                                <div className="newsfeed-sidepanel-text">Messenger</div>
                            </div>
                            <div className="newsfeed-sidepanel-button">
                                <div className="watch-icon"></div>
                                <div className="newsfeed-sidepanel-text">Watch</div>
                            </div>
                            <div className="newsfeed-sidepanel-button">
                                <div className="marketplace-icon"></div>
                                <div className="newsfeed-sidepanel-text">Marketplace</div>
                            </div>
                        </div>
            </div>

        )
    }

}

export default SidePanel;