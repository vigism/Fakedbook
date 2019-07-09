import {connect} from 'react-redux';
import NewsFeed from './NewsFeed';
import {createPost} from '../../actions/posts_actions';

const mapStateToProps = state => {
    return {
        user: state.entities.users[state.session.id],
        currentUserId: state.session.id,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: post => dispatch(createPost(post))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsFeed);