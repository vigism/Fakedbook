import NavBar from './NavBar';
import {logout} from '../../actions/session_actions';
import {fetchUsers} from '../../actions/user_actions';
import {getAllFriends} from '../../actions/friends_actions';
import {connect} from 'react-redux'
import {toggleDropDown, toggleFriendsDropdown} from '../../actions/ui_actions';
import {selectIncomingRequestsFromState} from '../../selectors/friends_selectors';
import {receiveUserById} from '../../actions/user_actions';

const mapStateToProps = state => {
    return {
        user: state.entities.users[state.session.id],
        incomingRequests: selectIncomingRequestsFromState(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDropDown: () => dispatch(toggleDropDown()),
        toggleFriendsDropdown: () => dispatch(toggleFriendsDropdown()),
        fetchUsers: (search) => dispatch(fetchUsers(search)),
        getAllFriends: () => dispatch(getAllFriends()),
        receiveUserById: id => dispatch(receiveUserById(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);