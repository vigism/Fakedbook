export const createComment = comment => ($.ajax({
    method: "POST",
    url: `api/post/${comment.post_id}/comment`,
    data: {comment}
}))

export const getCommentsForPost = post_id => ($.ajax({
    method:"GET",
    url: `api/post/${post_id}/comment`
}))

export const destroyComment = comment => ($.ajax({
    method: "DESTROY",
    url: `api/comment/${comment.id}`
}))