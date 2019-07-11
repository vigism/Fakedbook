import {CREATE_POST, RECEIVE_POSTS} from '../actions/posts_actions';
import {merge} from 'lodash';
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const postsReducer = (state={},action) => {
    Object.freeze(state);

    let newState;
    switch(action.type) {
        case CREATE_POST:
             newState = {[action.post.id]: action.post};
            return merge({},state, newState);
        case RECEIVE_POSTS:
            newState = action.posts;
            return merge({}, newState);
        case LOGOUT_CURRENT_USER: 
            return {};
        default:
            return state;
    }
}

export default postsReducer;