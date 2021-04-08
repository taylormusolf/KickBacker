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
    if(this.props.formType === 'Update Project'){
      this.props.fetchProject(this.props.match.params.projectId)
    }
  }
  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    // const formData = new FormData();
    // formData.append('project[title]', this.state.title);
    // formData.append('project[description]', this.state.description);
    // formData.append('project[campaign]', this.state.campaign);
    // formData.append('project[updates]', this.state.updates);
    // formData.append('project[faq]', this.state.faq);
    // formData.append('project[location]', this.state.location);
    // formData.append('project[start_date]', this.state.start_date);
    // formData.append('project[end_date]', this.state.end_date);
    // formData.append('project[funding_goal]', this.state.funding_goal);
    // this.props.createProject(formData);
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
        <h1 className="new-project-title">{this.props.formType}</h1>
        <form className="new-project-form" onSubmit={this.handleSubmit}>
          <label>Project Title
            <input
              type="text"
              value={this.state.title}
              placeholder="Your title here" 
              onChange={this.update('title')}
              className="project-field"
            />
            </label>
          <label>Project Description
            <textarea
              value={this.state.description}
              placeholder="What is your project about?" 
              onChange={this.update('description')}
              className="project-field"
            />
          </label>
          
          <label>Campaign
            <textarea
              type="text"
              value={this.state.campaign}
              placeholder="Campaign" 
              onChange={this.update('campaign')}
              className="project-field"
            />
          </label>
          
          <label>Updates
            <textarea
              type="text"
              value={this.state.updates}
              placeholder="Updates" 
              onChange={this.update('updates')}
              className="project-field"
            />
          </label>
          
          <label>FAQ
            <textarea
              type="text"
              value={this.state.faq}
              placeholder="FAQ" 
              onChange={this.update('faq')}
              className="project-field"
            />
          </label>
          
          <label>Location
            <input
              type="text"
              value={this.state.location}
              placeholder="Where you at?" 
              onChange={this.update('location')}
              className="project-field"
            />
          </label>
          <label>Project Start Date
            <input
              type='date'              
              value={this.state.start_date}
              onChange={this.update('start_date')}
              className="project-field"
            />
          </label>
          <label>Project End Date
            <input
              type='date'              
              value={this.state.end_date}
              onChange={this.update('end_date')}
              className="project-field"
            />
          </label>
          <label>Funding Goal
            <input
              type="currency"
              value={this.state.funding_goal}
              placeholder="$$$$"
              onChange={this.update('funding_goal')}
              className="project-field"
            />
          </label>
          
          <input
                type="submit"
                value={this.props.formType}
                className="new-project-button"
              />
          <div className='project-errors'>{this.renderErrors()}</div>
        </form>
      </div>
    );
  }
}




export default withRouter(ProjectForm);