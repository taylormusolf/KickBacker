import React from 'react';
import ProjectIndexItem from './project_index_item';
import CreateProjectFormContainer from '../project_form/project_new_container';

class ProjectIndex extends React.Component {
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
    const { projects, deleteProject } = this.props;
    if (!projects) return null;
      return (
        <div>
          {this.categories()}
          <ul>
            {
              projects.map(project => (
                <ProjectIndexItem
                  project={project}
                  deleteProject={deleteProject}
                  key={project.id}
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