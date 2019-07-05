export const fetchUsersBySearch = search => {
    return $.ajax({
    
    method:"GET",
    url:"api/users",
    data: {search}
})};