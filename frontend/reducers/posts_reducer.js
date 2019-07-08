import {CREATE_POST, RECEIVE_POSTS} from '../actions/posts_actions';
import {merge} from 'lodash';

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
        default:
            return state;
    }
}

export default postsReducer;