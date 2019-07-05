import NavBar from './NavBar';
import {logout} from '../../actions/session_actions';
import {fetchUsers} from '../../actions/user_actions';
import {connect} from 'react-redux'
import {toggleDropDown} from '../../actions/ui_actions';

const mapStateToProps = state => {
    return {
        user: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        toggleDropDown: () => dispatch(toggleDropDown()),
        fetchUsers: (search) => dispatch(fetchUsers(search))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);