import React from 'react';
import { Link } from 'react-router-dom';
import Headers from './project_headers'

class ProjectShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {selectedPane: 0};
    this.selectTab = this.selectTab.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  selectTab(num) {
    this.setState({selectedPane: num});
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

  selectedContent(){
    if(this.state.selectedPane === 0){
      return(
        <article>
          {this.props.project.campaign}
        </article>
      )
    } else if(this.state.selectedPane === 1){
      return(
        <article>
          {this.props.project.faq}
        </article>
      )
    } else {
      return(
        <article>
          {this.props.project.updates}
        </article>
      )
    }
  }
  
  render() {
    const { project } = this.props;
    const pane = this.props.panes[this.state.selectedPane];
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
                <li><i className="fas fa-map-marker-alt"></i> {project.location}</li>
              </ul>
            </div>
                    
            <ul className='show-side-bar'>
              <ul className='show-side-subbar'>
                <div className='show-subbar-sub'>
                  <li className='show-pledged-total'>$$$ pledged total</li>
                  <li className='show-goal-total'>pledged of ${project.funding_goal} goal</li>
                </div>
                <div className='show-subbar-sub'>
                  <li className='show-backer-total'>#</li>
                  <li className='show-text-total'>of backers</li>
                </div>
                <div className='show-subbar-sub'>
                  <li className='show-days-total'>#</li>
                <li className='show-text-total'>days to go</li>
                </div>
                
              </ul>
              
              <button className='show-back-button'>Back this project</button>
              <li className='small-text'>All or nothing. This project will only be funded if it reaches its goal by {project.end_date.slice(0,10)}</li>
            </ul>
          </section>
        </div>
        
        <div className='show-main'>
          <div className='show-tabs'>
            <Headers
              selectedPane={this.state.selectedPane}
              onTabChosen={this.selectTab}
              panes={this.props.panes}
              />
            <div className='tab-content'>
              {this.selectedContent()}
            </div>
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

