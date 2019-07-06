import React from 'react';

function SettingsModalComponent(props) {
    return (
        <div className="settings-modal-component" onClick= {() => props.action()} > 
            <li >Log out</li>
        </div>
    )
}

export default SettingsModalComponent;