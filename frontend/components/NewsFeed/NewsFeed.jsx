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

    render() {
        let postList = [];
        let keys = Object.keys(this.props.posts);
        for(let i = 0; i<keys.length;i ++){
            postList.push(
                <Post content={this.props.posts[keys[i]].content}/>
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