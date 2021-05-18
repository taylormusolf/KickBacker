import React from 'react';
import { Link } from 'react-router-dom';


const ProjectSearchItem = props => {
  const {project} = props;
  if (!project) return null;
  const daysLeft = (endDate) =>{
    const today = new Date();
    const endingDate = new Date(endDate);
     if(today > endingDate){
      return 0;
    }
    const diffTime = Math.abs(endingDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
   
    return diffDays;
  }
    const funding = (project) =>{
      let sum = fundingTotal(project);
      let num = Math.floor((sum)/(this.props.project.funding_goal)*100)
      if (num > 100){
        num = 100
      }
      return num.toString() + '%'
    }
    const fundingTotal = (project) =>{
      let sum = 0;
      if(project.backings){
        Object.values(project.backings).forEach((backing) =>{
          sum += backing.amount_pledged
        })
      }
      return sum;
    }
    const backers = (project)=>{
      if(project.backings){
        let num = Object.values(project.backings).length
      return num
      } else{
        return 0;
      }
    }
    const deadline = () =>{
      let d = new Date(project.end_date.slice(0,10));
      let date = d.toString();
      return date;
    }
  if(!project) return null;
  return(
    <li className='search-project-list-item'>
      <span >
        <Link to={`/projects/${project.id}`}>
          <img className='search-project-list-img'src={project.photo_url}/>
        </Link>
      </span>
      <span>
        <ul className='search-project-list-details'>
          <li className='search-project-list-link'>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
          <li className='search-project-list-description'>{project.description}</li>
          <li className='search-project-list-creator'>By {project.creator.username}</li>
        </ul>
        <ul className='search-project-list-details-2'>
          <li className='search-project-list-funding'>
            $
          </li>
          <li className='search-project-list-percentage'>% funded</li>
          <li className='search-project-list-days'> days to go</li>
          <span>
            <li>{project.category.name}</li>
            <li>{project.location}</li>
          </span>
        </ul>
        
      </span>
      
    </li>
  )  
};

export default ProjectSearchItem;