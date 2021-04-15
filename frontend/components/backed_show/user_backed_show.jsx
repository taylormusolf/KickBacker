import React from 'react';
import {Link} from 'react-router-dom';

class UserBackedShow extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteBacking = this.handleDeleteBacking.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    console.log(this.state)
    this.props.fetchProjects();
    this.props.fetchBackings();
    console.log(this.state)
  }
  
  handleCreator(){
    
    if(this.props.session === this.props.project.creator.id){
      return (
        <section className='show-edit-links'>
          <span><Link to={`/projects/${this.props.project.id}/edit`}>Edit</Link></span>
          <br/>
          <span><button onClick={this.handleDelete}>Delete</button></span>
        </section>
      )
        
    }else {
      return (
        null
      )
    
    }
  }

  handleDeleteBacking(backingId) {
    this.props.removeBacking(backingId)
  }
  handleDelete(projectId) {
    this.props.deleteProject(projectId)
  }
  
  backingReward(reward){
    if(reward){
      return reward.title
    } else {
      return 'No reward'
    }
  }

  userBackings(){
    if (this.props.currentUser.backings){
      const array = (Object.values(this.props.currentUser.backings)).reverse();
      return(
        array.map((backing => ( 
        <ul key={backing.project.id} className='backed-project-item'>
          <ul className='backed-project-name-container'>
            <li><Link to={`/projects/${backing.project.id}`}><img className='smaller-img' src={backing.project.photo_url}/></Link></li>
            <li className='backed-project-title'><Link to={`/projects/${backing.project.id}`}>{backing.project.title}</Link></li>
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
        Object.values(project.backings).forEach((backing) =>{
          sum += backing.amount_pledged
        })
        return sum;
      }
      return(
        array.map((project => (
          <ul key={project.id} className='backed-project-item'>
            <ul key={project.id} className='backed-project-name-container'>
              <li><Link to={`/projects/${project.id}`}><img className='smaller-img' src={project.photo_url}/></Link></li>
              <li className='backed-project-title'><Link to={`/projects/${project.id}`}>{project.title}</Link></li>
            </ul>
          <li className='backed-amount'>${fundingTotal(project)}.00</li>
          <li className='backed-reward-edit'><div><Link to={`/projects/${project.id}/edit`}>Edit</Link></div></li>
          <li><button className='backed-reward-delete' onClick={()=>this.handleDelete(project.id)}>Delete</button></li>
          </ul>
            
          )))
      )
    } else {
      return(null)
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
        <h3>{Object.values(this.props.currentUser.backings).length} projects</h3>
        <ul className='backed-projects-table'>
          <ul className='backed-projects-headings'>
            <h4 className='backed-projects-heading-1'>Projects I backed</h4>
            <h4 className='backed-projects-heading-2'>Pledged</h4>
            <h4 className='backed-projects-heading-3'>Reward</h4>
            <h4 className='backed-projects-heading-4'>Delete</h4>
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
        <h3>{Object.values(this.props.currentUser.projects).length} projects</h3>
        <ul className='backed-projects-table'>
          <ul className='backed-projects-headings'>
            <h4 className='backed-projects-heading-1'>Projects I created</h4>
            <h4 className='backed-projects-heading-2'>Total funded</h4>
            <h4 className='backed-projects-heading-5'>Edit</h4>
            <h4 className='backed-projects-heading-4'>Delete</h4>
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
