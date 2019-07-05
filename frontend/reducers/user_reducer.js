import {RECEIVE_USERS} from '../actions/user_actions';

const userReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USERS:
            let newState = {};
            let keys = Object.keys(action.users);
            for(let i =0; i<keys.length;i++){
                newState[keys[i]] = action.users[keys[i]];
            }
            return merge({},state,newState);
        default:
            return state;
    }
}

export default userReducer;