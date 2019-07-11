import {combineReducers} from 'redux';

import users from './users_reducer';
import user from './user_reducer';
import friends from './friends_reducer';
import posts from './posts_reducer';
import comments from './comments_reducer';
import searchRes from './searchResReducer';

export default combineReducers({
    users: users,
    user: user,
    friends: friends,
    posts: posts,
    comments: comments,
    searchRes: searchRes
})