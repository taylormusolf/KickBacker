import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  handleDelete(e) {
    this.props.deleteProject(this.props.project.id)
        .then(action => {
            return this.props.history.push(`/`)
        }) 
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
  
  render() {
    const { project } = this.props;
    if (!project) return null;
    return (
      <div className='show-page'>
        <div className='show-header'>
          <div className='show-title'>
            <h1>{project.title}</h1>
            <h2>{project.description}</h2>
          </div>
          <section className='show-top-main'>
            <div className='show-img-container'>
              <img src={project.photo_url}/>
              <ul className='under-photo-items'>
                <li>Category</li>
                <li><i class="fas fa-map-marker-alt"></i> {project.location}</li>
              </ul>
            </div>
                    
            <ul className='show-side-bar'>
              <li>$0 of ${project.funding_goal}</li>
              <li># of backers</li>
              <li># of days to go</li>
              <li>Back this project</li>
              <li className='small-text'>All or nothing.  This project will only be fundened if it reaches its goal by {project.end_date.slice(0,10)}</li>
            </ul>
          </section>
        </div>
        
        <div className='show-main'>
          <div className='show-tabs'>
            Campaign
            <p>{project.campaign}</p>
            FAQ
            <p>{project.faq}</p>
            Updates
            <p>{project.updates}</p>
          </div>
          <ul className='show-rewards-side-bar'>
            <li>Creator: {project.creator.username}</li>
          </ul>
        </div>
        {this.handleCreator()}
      </div>
      );
    
  }
}

export default ProjectShow;

