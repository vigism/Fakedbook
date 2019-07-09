import {connect} from 'react-redux';
import NewsFeed from './NewsFeed';
import {createPost, fetchUserPosts} from '../../actions/posts_actions';
import {receiveUserById} from '../../actions/user_actions';
import {selectFriendPostsOnly} from '../../selectors/post_selector';

const mapStateToProps = state => {
    return {
        user: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        posts: selectFriendPostsOnly(state),
        users: state.entities.user,
        friends: state.entities.friends
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: post => dispatch(createPost(post)),
        fetchPosts: id => dispatch(fetchUserPosts(id)),
        receiveUserById: id => dispatch(receiveUserById(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsFeed);