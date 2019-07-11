import {connect} from 'react-redux';
import Profile from './Profile';
import {receiveUserById} from '../../actions/user_actions';
import {getAllFriends} from '../../actions/friends_actions';

import {createPost, fetchUserPosts} from '../../actions/posts_actions';
import {newFriendRequest, updateFriendRequest, deleteFriendRequest} from '../../actions/friends_actions'

import {fetchPostComments, createComment} from '../../actions/comments_actions';


const mapStateToProps = (state, { match }) => {
    return {
        profileUserId: parseInt(match.params.id),
        currentUser: state.entities.users[state.session.id],
        users: state.entities.user,
        friends: state.entities.friends,
        posts: state.entities.posts,
        comments: state.entities.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        receiveUserById: id => dispatch(receiveUserById(id)),
        getAllFriends: () => dispatch(getAllFriends()),
        newFriend: friend => dispatch(newFriendRequest(friend)),
        updateFriendRequest: friend => dispatch(updateFriendRequest(friend)),
        deleteFriendRequest: friend => dispatch(deleteFriendRequest(friend)),
        createPost: post => dispatch(createPost(post)),
        fetchPosts: id => dispatch(fetchUserPosts(id)),
        fetchPostComments: post_id => dispatch(fetchPostComments(post_id)),
        createComment: comment => dispatch(createComment(comment))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);