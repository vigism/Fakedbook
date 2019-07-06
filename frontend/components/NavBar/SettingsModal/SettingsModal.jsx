import React from 'react';
import ReactDOM from 'react-dom';
import SettingsModalComponent from './SettingsModalComponent';


class SettingsModal extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render() {
     const JSX = (
        <div  className="settings-modal-container" onClick={() => this.props.toggleDropDown()}>
            <div className="settings-modal">
            <ul className="settings-modal-list">
            <SettingsModalComponent action={this.props.logout}/>
            </ul>
            </div>
        </div>
    )
    

      
    
    if(!this.props.dropDown) {
    return (
        <i></i>
    )
    } else {
    return ReactDOM.createPortal(JSX, document.querySelector("#modal"))
    }
    }
}

export default SettingsModal;