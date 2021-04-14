import React from 'react';
import { Link } from 'react-router-dom';


const ProjectIndexItem = props => {
  const funding = (project) =>{
    let sum = 0;
    Object.values(project.backings).forEach((backing) =>{
      sum += backing.amount_pledged
    })
    return sum;
  }
  return(
    <li className='project-list-item'>
      <span>
      <Link to={`/projects/${props.project.id}`}><img src={props.project.photo_url}/></Link>
      </span>
      <ul>
        <li className='project-list-link'>
          <Link to={`/projects/${props.project.id}`}>{props.project.title}</Link>
        </li>
        <li className='project-list-funding'>{Math.ceil(((funding(props.project))/(props.project.funding_goal)) * 100)}% funded</li>
        <li className='project-list-creator'>By {props.project.creator.username}</li>
      </ul>
      
    </li>
  )  
};

export default ProjectIndexItem;