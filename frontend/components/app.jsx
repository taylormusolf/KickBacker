import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>KickBacker</h1>
      </Link>
      
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={GreetingContainer}/>
      <Redirect to="/" component={GreetingContainer}/>
    </Switch>
  </div>
);

export default App;