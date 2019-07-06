import React from 'react';
import ReactDOM from 'react-dom';
import SettingsModalComponent from './SettingsModalComponent';


class SettingsModal extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render() {
     const JSX = (
        <div  className="settings-modal" onClick={() => this.props.toggleDropDown()}>
            <ul className="settings-modal-list">
            <SettingsModalComponent action={this.props.logout}/>
            </ul>
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