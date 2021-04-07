import React from 'react';
import { withRouter } from 'react-router';


class ProjectForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.props.resetProjectErrors();
    if(this.props.type === 'edit'){
      this.props.fetchProject(this.props.match.params.projectId)
    }
  }
  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('project[title]', this.state.title);
    formData.append('project[description]', this.state.description);
    formData.append('project[campaign]', this.state.campaign);
    formData.append('project[updates]', this.state.updates);
    formData.append('project[faq]', this.state.faq);
    formData.append('project[location]', this.state.location);
    formData.append('project[start_date]', this.state.start_date);
    formData.append('project[end_date]', this.state.end_date);
    formData.append('project[funding_goal]', this.state.funding_goal);
    this.props.createProject(formData);
  }
  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }



  render() {

    return (
      <div className="new-project-container">
        <div className="new-project-form">
          <h1 className="new-project-title">Create a Project!</h1>

          <form onSubmit={this.handleSubmit}>
          <input
              type="text"
              value={this.state.title}
              placeholder="Title" 
              onChange={this.update('title')}
              className="project-field"
            />
            <input
              type="text"
              value={this.state.description}
              placeholder="Description" 
              onChange={this.update('description')}
              className="project-field"
            />

            <input
              type="text"
              value={this.state.campaign}
              placeholder="Campaign" 
              onChange={this.update('campaign')}
              className="project-field"
            />

            <input
              type="text"
              value={this.state.updates}
              placeholder="Updates" 
              onChange={this.update('updates')}
              className="project-field"
            />

            <input
              type="text"
              value={this.state.faq}
              placeholder="FAQ" 
              onChange={this.update('faq')}
              className="project-field"
            />
            <input
              type="text"
              value={this.state.location}
              placeholder="Location" 
              onChange={this.update('location')}
              className="project-field"
            />
            <input
              type="text"
              value={this.state.start_date}
              placeholder="Start Date"
              onChange={this.update('start_date')}
              className="project-field"
            />
            <input
              type="text"
              value={this.state.end_date}
              placeholder="End Date"
              onChange={this.update('end_date')}
              className="project-field"
            />
            <input
              type="text"
              value={this.state.funding_goal}
              placeholder="Funding Goal"
              onChange={this.update('funding_goal')}
              className="project-field"
            />


            <div className="button-holder">
              <input
                type="submit"
                value="Create project"
                className="new-project-button"
              />
            </div>
            <div className='project-errors'>{this.renderErrors()}</div>
          </form>
        </div>
      </div>
    );
  }
}




export default withRouter(ProjectForm);