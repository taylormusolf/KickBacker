import React from 'react';
import { Link } from 'react-router-dom';


const ProjectIndexItem = props => (
  <li className='project-list-item'>
    <span>
    <Link to={`/projects/${props.project.id}`}><img src={props.project.photo_url}/></Link>
    </span>
    <ul>
      <li className='project-list-link'>
        <Link to={`/projects/${props.project.id}`}>{props.project.title}</Link>
      </li>
      <li className='project-list-funding'>% funded</li>
      <li className='project-list-creator'>By {props.project.creator.username}</li>
    </ul>
    
  </li>
);

export default ProjectIndexItem;