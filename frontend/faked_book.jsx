import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {logout} from './actions/session_actions';
import {merge} from 'lodash'

import {createPost, fetchPostById} from './util/post_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.merge = merge;
  window.createPost = createPost
  window.fetchPostById = fetchPostById;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.logout = logout;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});