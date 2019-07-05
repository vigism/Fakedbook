import React from 'react';
import {Switch,Route} from 'react-router-dom';
import SignUpContainer from './SignUp/SignUpContainer';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import NavBarContainer from './NavBar/NavBarContainer';
import NewsFeedContainer from './NewsFeed/NewsFeedContainer'
import SearchResultsContainer from './NavBar/SearchResultsContainer';

const App = () => (
    <div className="app-container">
        <ProtectedRoute path='/' component={NavBarContainer} />
        <ProtectedRoute path='/newsfeed' component={NewsFeedContainer} /> 
        <ProtectedRoute path='/searchResults' component={SearchResultsContainer} />
        <Switch>
            
            <AuthRoute exact path ='/' component={SignUpContainer} />
        </Switch>
    </div>
);

export default App;