import React from 'react';
import {Link} from 'react-router-dom'

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.removeComment = this.removeComment.bind(this);
    }

    removeComment() {
        
    }

    render() {
    let authorInfo =[<div></div>];
        if(this.props.users[this.props.comment.author_id] != undefined) {
            authorInfo = <div className ="post-comment">
                    <div className="comment-image-div">
                    <img className="comment-image" src={this.props.users[this.props.comment.author_id].photoUrl}>
                    </img>
                    </div>
                    <div className="comment-content-div">
                    <Link to={`/${this.props.comment.author_id}/profile`}>
                    <div className="comment-content-user-name">
                    <i>{this.props.users[this.props.comment.author_id].first_name} </i>
                    <i>{this.props.users[this.props.comment.author_id].last_name} </i>
                    </div>
                    </Link>
                    <input type="text" className="comment-text"
                     value={this.props.comment.content} readOnly="false"/>

                    <button className="remove-comment-button"
                            onClick={this.removeComment}>
                        Remove
                    </button>

                 
                    
                    
                    </div>
                    </div>
        } else {
            authorInfo = <div></div>
        }
        return(
            authorInfo
        )
    }

}

export default Comment;