import NavBar from './NavBar';
import {logout} from '../../actions/session_actions';
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        user: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);