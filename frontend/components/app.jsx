import React from 'react';
import {Route, Redirect, Switch, Link} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
// import ProjectFormContainer from './project_form/project_new_container';
import ProjectIndexContainer from './project_index/project_index_container';
import ProjectShowContainer from "./project_show/project_show_container";
// import EditProjectFormContainer from "./project_form/project_edit_container";
import UserBackedShowContainer from "./backed_show/user_backed_show_container"
import SearchPageContainer from './search/search_page_container';
import CategoryContainer from './category/category_container'
import CategoryNavContainer from './category/category_nav_container'
import RewardPageContainer from './reward/reward_page_container'
import DiscoverContainer from './discover/discover_container';
import Navbar from './navbar';

import ProjectForm from './project_form/project_form';

const App = () => (
  <div className='big-div'>
    <Modal />
    <Navbar />
    <div className= 'main-content'>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/projects/new" component={ProjectForm} />
        <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
        <Route exact path="/discover" component={DiscoverContainer} />
        <Route exact path="/projects/search/:query" component={SearchPageContainer} />
        <Route exact path="/projects/category/:categoryId" component={CategoryContainer} />
        <ProtectedRoute exact path="/projects/:projectId/rewards" component={RewardPageContainer} />
        <ProtectedRoute exact path="/projects/:projectId/edit" component={ProjectForm} />
        <ProtectedRoute exact path="/users/:userId" component={UserBackedShowContainer} />
        <Route exact path="/"component={ProjectIndexContainer}/>
        <Redirect to="/"/>
      </Switch>
    </div>
    <div className='category-links-container-bottom'><CategoryNavContainer/></div>
    <footer>
      <nav className='footer-page'>
        <div className='footer-box'> 
          <section className='footer-links'>
            <div className="social-name">Kickbacker, PBC <i className="far fa-copyright"></i> 2021</div>
            <div className="social-links">
              <a  href="https://github.com/taylormusolf" target="_blank"><i className="fab fa-github"></i></a>
              <a  href="https://www.linkedin.com/in/taylor-musolf" target="_blank"><i className="fab fa-linkedin-in"></i></a>
              <a  href="https://angel.co/u/taylor-musolf" target="_blank"><i className="fab fa-angellist"></i></a>
            </div>
            
          </section>
        </div>
      </nav>
    </footer>
      
    
  </div>
);

export default App;