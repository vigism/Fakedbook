import {connect} from 'react-redux';
import FriendsModal from './FriendsModal'
import {toggleFriendsDropdown} from '../../../actions/ui_actions';
import {selectIncomingRequestsFromState} from '../../../selectors/friends_selectors';


const mapStateToProps = state => {
    return {
        friendsDropdown: state.ui.friendsDropdown,
        requests: selectIncomingRequestsFromState(state),
        users: state.entities.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDropDown: () => dispatch(toggleFriendsDropdown())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FriendsModal)