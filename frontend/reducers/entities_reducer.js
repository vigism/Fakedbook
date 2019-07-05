import {combineReducers} from 'redux';

import users from './users_reducer';
import user from './user_reducer';

export default combineReducers({
    users: users,
    user: user
})