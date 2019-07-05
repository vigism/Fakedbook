import {DELETE_FRIEND, UPDATE_FRIEND, NEW_FRIEND,GET_FRIENDS} from '../actions/friends_actions';
import {merge} from 'lodash'


const friendsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case NEW_FRIEND:
            let newState = {[action.friend.id]:action.friend}
            return merge({}, state, newState)
        case UPDATE_FRIEND:

            return merge({},state, action.friend)
        case DELETE_FRIEND:
            delete state[action.friend.id]
        case GET_FRIENDS:
             newState = {};
            let keys = Object.keys(action.friends);
            for(let i = 0;i<keys.length; i++) {
                newState[keys[i]] = action.friends[keys[i]]
            }
            return merge({},newState)
        default:
            return state
    }
}

export default friendsReducer;
