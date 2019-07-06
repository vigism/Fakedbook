import {connect} from 'react-redux';
import SettingsModal from './SettingsModal'
import {logout} from '../../../actions/session_actions';
import {toggleDropDown} from '../../../actions/ui_actions';

const mapStateToProps = state => {
    return {
        dropDown: state.ui.dropdown
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        toggleDropDown: () => dispatch(toggleDropDown()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingsModal)