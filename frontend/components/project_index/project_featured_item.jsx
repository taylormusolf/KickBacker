import React from 'react';
import { Link } from 'react-router-dom';


const ProjectFeaturedItem = props => {
  if (!props.project) return null;
  const funding = (project) =>{
    let sum = 0;
    if(project.backings){
     Object.values(project.backings).forEach((backing) =>{
      sum += backing.amount_pledged
    })
    return fundingPer(sum); 
    }
    return '0%'
  }
  const fundingPer = (sum) =>{
    let num = Math.ceil(((sum)/(props.project.funding_goal))* 100)
    if (num > 100){
      num = 100
    }
    return num.toString() + '%'
  }

  return (
    <ul className='featured-list-item'>
      <span>
      <Link to={`/projects/${props.project.id}`}><img src={props.project.photo_url ? props.project.photo_url : 'https://kickbacker-seeds.s3.us-west-1.amazonaws.com/placeholder.jpg'}/></Link>
      <li className='featured-list-funding' style={{width: funding(props.project)}}><h1></h1></li>
      </span>
      <ul>
        <li className='featured-list-link'>
          <Link to={`/projects/${props.project.id}`}>{props.project.title}</Link>
        </li>
        <li className='featured-list-description'>{props.project.description}</li>
        <li className='featured-list-creator'>By {props.project.creator.username}</li>
      </ul>
      
    </ul>
  )  
};

export default ProjectFeaturedItem;