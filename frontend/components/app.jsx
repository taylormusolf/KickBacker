import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import ProjectFormContainer from './project_form/project_new_container';
import ProjectIndexContainer from './project_index/project_index_container';
import ProjectShowContainer from "./project_show/project_show_container";
import EditProjectFormContainer from "./project_form/project_edit_container";
// import UserBackedShowContainer from "./backed_show/user_backed_show_container"

const categories = () =>{
  return(
    <div className='category-links-container-bottom'>
        <ul className='category-links'>
        <li><a href="">Arts</a></li>
        <li><a href="">Comics & Illustration</a></li>
        <li><a href="">Design & Tech</a></li>
        <li><a href="">Film</a></li>
        <li><a href="">Food & Craft</a></li>
        <li><a href="">Games</a></li>
        <li><a href="">Music</a></li>
        <li><a href="">Publishing</a></li>
      </ul>
    </div>
    
  )
}


const App = () => (
  <div>
    <Modal />
    <header>
      <nav className='nav-bar'>
        <div className= 'nav-box'>
          <h2 className='nav-item'><a href="">Discover</a></h2>
          <Link to="/projects/new" className="nav-item"><h2>Start a Project</h2></Link>
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
          <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
          <ProtectedRoute path="/projects/:projectId/edit" component={EditProjectFormContainer} />
          {/* <ProtectedRoute path="/users/:userId" component={UserBackedShowContainer} /> */}
          <Route exact path="/"component={ProjectIndexContainer}/>
          <Redirect to="/"/>
        </Switch>
      </div>
      {categories()}
      <footer>
       <nav className='footer-box'>
          <div> 
            {/* <img src="../../assets/images/favicon.ico"/> */}
            <div>Kickbacker, PBC <i className="far fa-copyright"></i> 2021</div>
            <section className="social-links">
              <a href="https://github.com/taylormusolf" target="_blank"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/taylor-musolf-4454a876/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            </section>
          </div>
       </nav>
      </footer>
      
    
  </div>
);

export default App;