import React from 'react';
import {Switch,Route} from 'react-router-dom';
import SignUpContainer from './SignUp/SignUpContainer';

const App = () => (
    <div className="app-container">
        <Switch>
            <Route exact path ='/' component={SignUpContainer} />
        </Switch>
    </div>
);

export default App;