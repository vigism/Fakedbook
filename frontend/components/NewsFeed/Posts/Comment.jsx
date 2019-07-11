import React from 'react';

class Comment extends React.Component {

    constructor(props) {
        super(props);
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
                    <div className="comment-content-user-name">
                    <i>{this.props.users[this.props.comment.author_id].first_name} </i>
                    <i>{this.props.users[this.props.comment.author_id].last_name} </i>
                    </div>
                    <i className="comment-text">{this.props.comment.content}</i>
                    
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