import React from 'react';
import {Link, withRouter} from 'react-router-dom'

class Friend extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        if(this.props.user === undefined) {
            return (<div></div>)
        }
        return (
            <div className="friend">
                <Link to={`/${this.props.user.id}/profile`}>
                <img src={this.props.user.photoUrl} className="friend-pic" />
                </Link>
            </div>
        )
    }

}

export default withRouter(Friend);