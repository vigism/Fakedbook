import {connect} from 'react-redux';
import NewsFeed from './NewsFeed';
import {createPost, fetchUserPosts} from '../../actions/posts_actions';


const mapStateToProps = state => {
    return {
        user: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        posts: state.entities.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: post => dispatch(createPost(post)),
        fetchPosts: id => dispatch(fetchUserPosts(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsFeed);