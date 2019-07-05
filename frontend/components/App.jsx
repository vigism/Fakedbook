import React from 'react';
import {Switch,Route} from 'react-router-dom';
import SignUpContainer from './SignUp/SignUpContainer';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import NavBarContainer from './NavBar/NavBarContainer';
import NewsFeedContainer from './NewsFeed/NewsFeedContainer'

const App = () => (
    <div className="app-container">
        <ProtectedRoute path='/newsfeed' component={NavBarContainer} />
        <ProtectedRoute path='/newsfeed' component={NewsFeedContainer} /> 
        <Switch>
            
            <AuthRoute exact path ='/' component={SignUpContainer} />
        </Switch>
    </div>
);

export default App;