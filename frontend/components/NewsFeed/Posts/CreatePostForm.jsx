import React from 'react';

class CreatePostForm extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="create-post-form">
                <div className="create-post-form-header">
                    <p>Create Post</p>
                </div>
                <div className="create-post-form-input">
                    <div className="create-post-form-input-image-div">
                    <img className="create-post-form-input-image" src={this.props.user.photoUrl}>
                    </img>
                    </div>
                    <textarea className="create-post-form-input-area" placeholder={`What's on your mind, ${this.props.user.first_name}? `} />
                </div>
                <div className="create-post-form-footer">
                    <button className="create-post-form-button">Create Post</button>
                    </div>    
            </div>
        )
    }

}

export default CreatePostForm;