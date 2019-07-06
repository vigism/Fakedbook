import NavBar from './NavBar';
import {logout} from '../../actions/session_actions';
import {fetchUsers} from '../../actions/user_actions';
import {getAllFriends} from '../../actions/friends_actions';
import {connect} from 'react-redux'
import {toggleDropDown} from '../../actions/ui_actions';
import {selectIncomingRequestsFromState} from '../../selectors/friends_selectors';


const mapStateToProps = state => {
    return {
        user: state.entities.users[state.session.id],
        incomingRequests: selectIncomingRequestsFromState(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDropDown: () => dispatch(toggleDropDown()),
        fetchUsers: (search) => dispatch(fetchUsers(search)),
        getAllFriends: () => dispatch(getAllFriends())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);