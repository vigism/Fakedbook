import {TOGGLE_DROP_DOWN} from '../actions/ui_actions';
import {merge} from 'lodash'

const uiReducer = (state = {dropdown:false}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case TOGGLE_DROP_DOWN:
            let newToggle = !state["dropdown"];
            let newState = {dropdown: newToggle};
            return merge({},state,newState);
        default: 
            return state;
    }
}

export default uiReducer;