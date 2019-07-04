import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

import merge from 'lodash/merge';


const sessionReducer = (state = {id:null} , action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                id:action.currentUser.id
            };
            case LOGOUT_CURRENT_USER:
                return _nullUser;
            case RECEIVE_SESSION_ERRORS:
                return state;
            default: 
                return state;
    }
};

export default sessionReducer;