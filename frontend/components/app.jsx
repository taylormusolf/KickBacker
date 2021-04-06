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
        <div className= 'nav-left'>
          <h2 className='nav-discover'><a href="">Discover</a></h2>
          <h2><a href="">Start a Project</a></h2>
        </div>
        <Link to="/" className="nav-header"><h1>KICKBACKER</h1></Link>
        <div className= 'nav-right'>
          <h2><a href="">Search</a></h2>
          <GreetingContainer/>
        </div>
        
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