import React from 'react';
import { Link } from 'react-router-dom';


const ProjectFeaturedItem = props => (
  <li className='project-list-item'>
    <span>
    <Link to={`/projects/${props.project.id}`}><img src={props.project.photo_url}/></Link>
    </span>
    <ul>
      <li className='project-list-link'>
        <Link to={`/projects/${props.project.id}`}>{props.project.title}</Link>
      </li>
      <li className='project-list-description'>{props.project.description}</li>
      <li className='project-list-creator'>By {props.project.creator.username}</li>
    </ul>
    
  </li>
);

export default ProjectFeaturedItem;