import React from 'react';

class SettingsDropDownMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listOpen: false
        }
    }

    render() {
        let list;
        if(this.state.listOpen) {
            list.push(<li><button>Logout</button></li>)
        }
        return (
            <h1>DropDown</h1>
            
        )
    }

}

export default SettingsDropDownMenu;