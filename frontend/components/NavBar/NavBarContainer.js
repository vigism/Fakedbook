import NavBar from './NavBar';
import {logout} from '../../actions/session_actions';
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);