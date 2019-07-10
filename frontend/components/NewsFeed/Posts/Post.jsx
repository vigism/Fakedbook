import React from 'react'

class Post extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let header = <p>Not found</p>;
        if(this.props.users[this.props.post.author_id]!=undefined && this.props.users[this.props.post.profile_id] != undefined){
            if(this.props.post.author_id === this.props.post.profile_id) {
                header = <div className="post-header">
                <div className="post-user-profile-pic" ><img className="post-user-profile-pic-pic"
                 src={this.props.users[this.props.post.author_id].photoUrl}></img></div>
                {this.props.users[this.props.post.author_id].first_name}
                </div>
            } else {
                header = <div className="post-header">
                    <div className="post-user-profile-pic" ><img className="post-user-profile-pic-pic"
                 src={this.props.users[this.props.post.author_id].photoUrl}></img></div>
                <i>{this.props.users[this.props.post.author_id].first_name} </i>
                            <div className="arrow-right"></div>
                            <i>{this.props.users[this.props.post.profile_id].first_name}
                            </i></div>
            } 
         }
        return(
            <div className="post">
                <div className="post-header-container">
                    {header}
                    </div>
                <div className="post-content">
                <p>{this.props.post.content}</p>
                </div>
            </div>
        )
    }
}

export default Post;