import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import ProjectFormContainer from './project_form/project_form_container';

const App = () => (
  <div>
    <header>
      <nav className='nav-bar'>
        <div className= 'nav-box'>
          <h2 className='nav-item'><a href="">Discover</a></h2>
          <h2 className="nav-item"><a href="">Start a Project</a></h2>
        </div>
        <Link to="/" className="nav-header"><h1>KICKBACKER</h1></Link>
        <div className= 'nav-box'>
          <h2 className="nav-item"><a href="">Search <i className="fa fa-search"></i></a></h2>
          <h2 className="nav-item"><GreetingContainer /></h2>
        </div>
        
      </nav>
      
    </header>
      <div className= 'main-content'>
        <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <ProtectedRoute exact path="/projects/new" component={ProjectFormContainer} />
          <Route exact path="/"/>
          <Redirect to="/"/>
        </Switch>
      </div>
      
    
  </div>
);

export default App;