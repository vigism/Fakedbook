export const createPost = post => ($.ajax({
    method:"POST",
    url: "api/post",
    data: {post}
}));

export const fetchPostById = id => ($.ajax({
    method: "GET",
    url: `/api/post/${id}`
}))

export const fetchUsersPosts = id => ($.ajax({
    method: "GET",
    url: `/api/post/all/${id}`
}))