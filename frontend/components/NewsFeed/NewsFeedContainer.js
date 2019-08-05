import {connect} from 'react-redux';
import NewsFeed from './NewsFeed';
import {createPost, fetchUserPosts, fetchAllPosts} from '../../actions/posts_actions';
import {receiveUserById} from '../../actions/user_actions';
import {selectFriendPostsOnly} from '../../selectors/post_selector';
import {fetchPostComments, createComment, destroyComment,
patchComment} from '../../actions/comments_actions';


const mapStateToProps = state => {
    return {
        user: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        posts: state.entities.posts,
        users: state.entities.user,
        friends: state.entities.friends,
        comments: state.entities.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: post => dispatch(createPost(post)),
        fetchPosts: id => dispatch(fetchUserPosts(id)),
        receiveUserById: id => dispatch(receiveUserById(id)),
        fetchPostComments: post_id => dispatch(fetchPostComments(post_id)),
        createComment: comment => dispatch(createComment(comment)),
        fetchAllPosts: id => dispatch(fetchAllPosts(id)),
        destroyComment: id => dispatch(destroyComment(id)),
        patchComment: comment =>  dispatch(patchComment(comment)),
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(NewsFeed);