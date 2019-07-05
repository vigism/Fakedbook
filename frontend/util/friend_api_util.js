export const newFriendRequest = friend => ($.ajax({
    method:"post",
    url: "api/friends",
    data: {friend}
}))

export const updateFriendRequest = friend => ($.ajax({
    method: "patch",
    url: `api/friends/${friend.id}`,
}))

export const deleteFriend = friend => ($.ajax({
    method: "delete",
    url: `api/friends/${friend.id}`
}))

export const getFriends = () => ($.ajax({
    method:"get",
    url: "api/friends",

}))