import React from 'react'
import CommentForm from './CommentForm';
import Comment from './Comment';
import {Link} from 'react-router-dom'

class Post extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPostComments(this.props.post.id);
    }
    
    componentDidUpdate(prevProps) {
        if(!(prevProps.post===this.props.post)) {
            this.props.fetchPostComments(this.props.post.id);
        }
    }


    render() {
        let comments = [];
        let keys = Object.keys(this.props.comments);
        for(let i = 0; i< keys.length; i++) {
            if(this.props.comments[keys[i]].post_id === this.props.post.id) {
                comments.push(this.props.comments[keys[i]]);
            }
        }
        let commentComponents = [];
        for(let i =0 ;i< comments.length;i++) {
            let component = <Comment comment={comments[i]}
                                users={this.props.users}
                                deleteComment={this.props.destroyComment}/>
            commentComponents.push(component);
        }

        let commentComponent;
        if(commentComponents.length>0){
            commentComponent = <div className="comments-container">
                {commentComponents}
            </div>
        } else {
            commentComponent = <div></div>
        }
        
        let header = <p>Not found</p>;
        if(this.props.users[this.props.post.author_id]!=undefined && this.props.users[this.props.post.profile_id] != undefined){
            if(this.props.post.author_id === this.props.post.profile_id) {
                header = <div className="post-header">
                <div className="post-user-profile-pic" ><img className="post-user-profile-pic-pic"
                 src={this.props.users[this.props.post.author_id].photoUrl}></img></div>
                <Link to={`/${this.props.post.author_id}/profile`} className="profile-link">
                <p> {this.props.users[this.props.post.author_id].first_name}</p><p>{this.props.users[this.props.post.author_id].last_name}</p>
                </Link>
                </div>
            } else {
                header = <div className="post-header">
                    <div className="post-user-profile-pic" ><img className="post-user-profile-pic-pic"
                 src={this.props.users[this.props.post.author_id].photoUrl}></img></div>
                 <Link to={`/${this.props.post.author_id}/profile`} className="profile-link">
                <i >{this.props.users[this.props.post.author_id].first_name} </i>
                
                <i >{this.props.users[this.props.post.author_id].last_name} </i>
                </Link>
                            <div className="arrow-right"></div>
                <div className="post-user-profile-pic" ><img className="post-user-profile-pic-pic"
                 src={this.props.users[this.props.post.profile_id].photoUrl}></img></div>
                 <Link to={`/${this.props.post.profile_id}/profile`} className="profile-link">
                <i >{this.props.users[this.props.post.profile_id].first_name}</i>
                <i >{this.props.users[this.props.post.profile_id].last_name}
                </i>
                </Link></div>
            } 
         }
         let img = <div></div>
         if(this.props.post.photoUrl != undefined) {
             img = <img src={this.props.post.photoUrl} className="post-photo"/>
             
         }
        return(
            <div className="post">
                <div className="post-header-container">
                    {header}
                    </div>
                <div className="post-content">
                <p>{this.props.post.content}</p>
                {img}
                </div>
                {commentComponent}
                <CommentForm currentUser={this.props.currentUser}
                createComment={this.props.createComment}
                postId={this.props.post.id} 
                currentUserId={this.props.currentUser.id}/>
            </div>
        )
    }
}

export default Post;