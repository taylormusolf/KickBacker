import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <header>
      <nav className='nav-bar'>
        <h2><a href="">Discover</a></h2>
        <h2><a href="">Start a Project</a></h2>
        <Link to="/" className="header-link"><h1>KICKBACKER</h1></Link>
        <h2><a href="">Search</a></h2>
        <GreetingContainer/>
      </nav>
      
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/"/>
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;