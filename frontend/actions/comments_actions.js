import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const GET_POST_COMMENTS = "GET_POST_COMMENTS";

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

export const getPostComments = comments => ({
    type: GET_POST_COMMENTS,
    comments
})

export const createComment = comment => dispatch => (
    APIUtil.createComment(comment).then(comment => (
        dispatch(receiveComment(comment))
    ))
)

export const fetchPostComments = post_id => dispatch => (
    APIUtil.getCommentsForPost(post_id).then(comments => (
        dispatch(getPostComments(comments))
    ))
)