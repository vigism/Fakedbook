import {RECEIVE_COMMENT, GET_POST_COMMENTS} from '../actions/comments_actions';
import {merge} from 'lodash';

const commentsReducer = (state={}, action) => {
    Object.freeze(state);

    let newState;
    switch(action.type) {
        case RECEIVE_COMMENT:
            newState = {[action.comment.id]:action.comment};
            return merge({},state,newState);
        case GET_POST_COMMENTS:
            newState = action.comments;
            return merge({},state,newState);
        default:
            return state;
    }
}

export default commentsReducer;