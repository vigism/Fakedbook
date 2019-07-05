import React from 'react';
import SettingsDropDownMenu from './SettingsDropDownMenu';

class SettingsDropDown extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="nav-drop-down-button" onClick={() => this.props.toggleDropDown()}>
            <i className="nav-drop-down-button-icon"></i>
            </button>
        )
    }

}

export default SettingsDropDown;