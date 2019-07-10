import React from 'react';

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="post-create-comment">
                <div className="post-form-user-profile-pic" >
                <img className="post-form-user-profile-pic-pic"
                 src={this.props.currentUser.photoUrl}>
                     </img></div>
                <input className="create-comment-text-input" type="text" placeholder="Write a comment..." />
            </div>
        )
    }

}

export default CommentForm;