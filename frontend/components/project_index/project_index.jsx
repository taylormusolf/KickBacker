import React from 'react';
import ProjectIndexItem from './project_index_item';
import CreateProjectFormContainer from '../project_form/project_new_container';

class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const { posts, deleteProject } = this.props;

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
        <CreateProjectFormContainer />
      </div>
    );
  }
}

export default ProjectIndex;