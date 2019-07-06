import React from 'react';

function FriendsModalComponent(props) {
    return (
        <div className="friends-modal-component" onClick= {() => props.action()} > 
            <li className="friends-modal-list-el"> {props.sender.first_name} {props.sender.last_name} 
                <div><button className="friend-request-button">Confirm</button>
                <button className="friend-request-button">Deny</button>
                </div>
            </li>
        </div>
    )
}

export default FriendsModalComponent;