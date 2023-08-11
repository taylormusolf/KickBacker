import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
import * as ProjectAPIUtil from './util/project_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //for testing
  if(process.env.NODE_ENV !== 'production') {
    window.store = store;
    window.ProjectAPIUtil = ProjectAPIUtil;
  }
  //
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root)
});