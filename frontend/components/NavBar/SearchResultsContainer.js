import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {newFriendRequest, updateFriendRequest, deleteFriendRequest} from '../../actions/friends_actions'

const mapStateToProps = state => ({
    res: state.entities.user,
    current_user_id: state.session.id
})

const mapDispatchToProps = dispatch => ({
    newFriend: friend => dispatch(newFriendRequest(friend)),
    updateFriendRequest: friend => dispatch(updateFriendRequest(friend)),
    deleteFriendRequest: friend => dispatch(deleteFriendRequest(friend))
})

export default connect(mapStateToProps,mapDispatchToProps)(SearchResults)