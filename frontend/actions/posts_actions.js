import * as APIUtil from '../util/post_api_util';

export const CREATE_POST = "CREATE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const receivePost = post => ({
    type: CREATE_POST,
    post
})

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
})

export const createPost = post => dispatch => (
    APIUtil.createPost(post).then(post => (
        dispatch(receivePost(post))
    ))
)

export const fetchUserPosts = id => dispatch => (
    APIUtil.fetchUsersPosts(id).then(posts => (
        dispatch(receivePosts(posts))
    ))
)