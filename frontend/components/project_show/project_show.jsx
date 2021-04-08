import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }
  
  render() {
    const { project } = this.props;
    if (!project) return null;
    return (
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <Link to="/" />``
      </div>
      );
    
  }
}

export default ProjectShow;