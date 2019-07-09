import React from 'react';
import SidePanel from './SidePanel/SidePanel'
import CreatePostForm from './Posts/CreatePostForm';
import Post from './Posts/Post'

class NewsFeed extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts(this.props.currentUserId)
        
        
    }

    componentDidUpdate(prevProps) {
        if(prevProps.friends != this.props.friends) {
            let keys = Object.keys(this.props.friends);
            for(let i = 0;i < keys.length; i++) {
                if(this.props.friends[keys[i].status === true]) {
                this.props.receiveUserById(this.props.friends[keys[i]].user_one_id)
                this.props.receiveUserById(this.props.friends[keys[i]].user_two_id)
                }
            }
        }
    }

    render() {
        let postList = [];
        let keys = Object.keys(this.props.posts);
        for(let i = keys.length-1; i>=0;i--){
            postList.push(
                <Post 
                post={this.props.posts[keys[i]]}
                users={this.props.users}
                currentUser={this.props.user}/>
            )
        }
        return (
            <div className="newsfeed-main">
                <SidePanel user={this.props.user}/>
                <div className="newsfeed-main-content">
                <CreatePostForm user={this.props.user} currentUserId={this.props.currentUserId} createPost={this.props.createPost}/>
                <div className="newsfeed-posts-list">
                {postList}
                </div>
                </div>
            </div>
        )
    }

}

export default NewsFeed;