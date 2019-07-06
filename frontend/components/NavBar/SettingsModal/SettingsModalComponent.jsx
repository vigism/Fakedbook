import React from 'react';

function SettingsModalComponent(props) {
    return (
        <div className="settings-modal-component" > 
            <li onClick= {() => props.action()}>Logout</li>
        </div>
    )
}

export default SettingsModalComponent;