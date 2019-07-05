import React from 'react';
import SettingsDropDown from './SettingsDropDownMenu'

class SettingsDropDown extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="nav-drop-down-button" >
            <i className="nav-drop-down-button-icon"></i>
            </button>
        )
    }

}

export default SettingsDropDown;