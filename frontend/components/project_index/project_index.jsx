import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.fetchProjects();
  }

  categories(){
    return(
      <div className='category-links-container'>
          <ul className='category-links'>
          <li><a href="">Arts</a></li>
          <li><a href="">Comics & Illustration</a></li>
          <li><a href="">Design & Tech</a></li>
          <li><a href="">Film</a></li>
          <li><a href="">Food & Craft</a></li>
          <li><a href="">Games</a></li>
          <li><a href="">Music</a></li>
          <li><a href="">Publishing</a></li>
        </ul>
      </div>
      
    )
  }

  render() {
    const { projects, project, array } = this.props;
    if (!projects || !project) return null;
   
      return (
        <div >
          {this.categories()}
          <div id='featured-project'>
            <ProjectIndexItem 
            project={project}
            />
          </div>
          <ul className='projects-list-container'>
            {
              array.map(i => (
                <ProjectIndexItem
                  project={this.props.projects[i]}
                  key={[i + 1]}
                />
              ))
            }
          </ul>
          {this.categories()}
        </div>
      );
  }
}

export default ProjectIndex;