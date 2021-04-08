import React from 'react';
import ProjectIndexItem from './project_index_item';
import CreateProjectFormContainer from '../project_form/project_new_container';

class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
    console.log('hello')
    console.log(this.props)
  }

  render() {
    const { projects, deleteProject } = this.props;
    if (!projects) return null;
      return (
        <div>
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
        </div>
      );
  }
}

export default ProjectIndex;