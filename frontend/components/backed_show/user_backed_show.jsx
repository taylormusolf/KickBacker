import React from 'react';
import {Link} from 'react-router-dom';

class UserBackedShow extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteBacking = this.handleDeleteBacking.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDeleteBacking(backingId) {
    this.props.deleteBacking(backingId)
    .then((action) => window.location.reload())
  }
  handleDelete(projectId) {
    this.props.deleteProject(projectId)
    .then((action) => window.location.reload())
  }
  
  backingReward(reward){
    if(reward){
      return reward.title
    } else {
      return 'No reward'
    }
  }

  handleScroll(){
    window.scrollTo(0, 0);
  }

  userBackings(){
    if (this.props.currentUser.backings){
      const array = (Object.values(this.props.currentUser.backings)).reverse();
      return(
        array.map((backing => ( 
        <ul key={backing.project.id} className='backed-project-item'>
          <ul className='backed-project-name-container'>
            <li><Link to={`/projects/${backing.project.id}`} onClick={()=>this.handleScroll()}><img className='smaller-img' src={backing.project.photo_url}/></Link></li>
            <li className='backed-project-title'><Link to={`/projects/${backing.project.id}`} onClick={()=>this.handleScroll()}>{backing.project.title}</Link></li>
          </ul>
          <li className='backed-amount'>${backing.amount_pledged}.00</li>
          <li className='backed-reward-title'>{this.backingReward(backing.reward)}</li>
          <li ><button className='backed-reward-delete' onClick={()=>this.handleDeleteBacking(backing.id)}>Delete</button></li>
        </ul>
        )))
      )
    } else {
      return(null)
    }
  }
  userProjects(){
      
    if (this.props.currentUser.projects){
      const array = (Object.values(this.props.currentUser.projects)).reverse().slice(0,4);
      const fundingTotal = (project) =>{
        let sum = 0;
        if(project.backings){
         Object.values(project.backings).forEach((backing) =>{
          sum += backing.amount_pledged
          }) 
        }
        return sum;
      }
      return(
        array.map((project => (
          <ul key={project.id} className='backed-project-item'>
            <ul key={project.id} className='backed-project-name-container'>
              <li><Link to={`/projects/${project.id}`} onClick={()=>this.handleScroll()}><img className='smaller-img' src={project.photo_url}/></Link></li>
              <li className='backed-project-title'><Link to={`/projects/${project.id}`} onClick={()=>this.handleScroll()}>{project.title}</Link></li>
            </ul>
          <li className='backed-amount'>${fundingTotal(project)}.00</li>
          <li className='backed-reward-edit'><Link to={`/projects/${project.id}/edit`} onClick={()=>this.handleScroll()}><div>Edit </div></Link></li>
          <li className='backed-reward-edit'><Link to={`/projects/${project.id}/rewards`} onClick={()=>this.handleScroll()}><div>Edit </div></Link></li>
          <li><button className='backed-reward-delete' onClick={()=>this.handleDelete(project.id)}>Delete</button></li>
          </ul>
            
          )))
      )
    } else {
      return(null)
    }
  }
  backingCheck(){
    if (this.props.currentUser.backings){
      return Object.values(this.props.currentUser.backings).length
    } else {
      return 0
    }
  }

  projectCheck(){
    if (this.props.currentUser.projects){
      return Object.values(this.props.currentUser.projects).length
    } else {
      return 0
    }
  }

  
  render(){
   return(
    <div className='backed-projects-page'>
      <div className='backed-projects-container'>
      <section className='backed-projects-section'>
        <h1>Backed projects</h1>
        <h2>A place to keep track of all your backed projects</h2>
        <span>Your pledges</span>
        <h3>{this.backingCheck()} projects</h3>
        <ul className='backed-projects-table'>
          <ul className='backed-projects-headings'>
            <h4 className='backed-projects-heading-1'>Projects I backed</h4>
            <h4 className='backed-projects-heading-2'>Pledged</h4>
            <h4 className='backed-projects-heading-3'>Reward</h4>
            <h4 className='backed-projects-heading-4'>Delete Pledge</h4>
          </ul>
          <ul className='backed-project-line'>
            {this.userBackings()}
          </ul>
        </ul>
      </section>
        
      </div>
      <div className='backed-projects-container'>
      <section className='backed-projects-section'>
        <h1>Created projects</h1>
        <h2>A place to keep track of all your created projects</h2>
        <span>Your projects</span>
        <h3>{this.projectCheck()} projects</h3>
        <ul className='backed-projects-table'>
          <ul className='backed-projects-headings'>
            <h4 className='backed-projects-heading-1'>Projects I created</h4>
            <h4 className='backed-projects-heading-2'>Total funded</h4>
            <h4 className='backed-projects-heading-5'>Edit Project</h4>
            <h4 className='backed-projects-heading-5'>Edit Rewards</h4>
            <h4 className='backed-projects-heading-4'>Delete Project</h4>
          </ul>
          <ul className='backed-project-line'>
            {this.userProjects()}
          </ul>
        </ul>
      </section>
        
      </div>
    </div>
    
      
    ) 
  }
  

}











export default UserBackedShow 
