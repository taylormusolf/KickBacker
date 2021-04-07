import React from 'react';
import { withRouter } from 'react-router';


class ProjectForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      updates: '',
      faq: '',
      location: '',
      start_date: '',
      end_date: '',
      funding_goal: ''
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render() {

    return (
      <div className="new-project-container">
        <div className="new-project-form">
          <h3 className="new-project-title">Create A Project!</h3>

          <form onSubmit={this.handleSubmit}>
            <label className="project-field">Description</label>
            <input
              type="text"
              value={this.state.description}
              onChange={this.update('description')}
              className="project-field"
            />

            <label className="project-field">Campaign</label>
            <input
              type="text"
              value={this.state.campaign}
              onChange={this.update('campaign')}
              className="project-field"
            />

            <label className="project-field">Updates</label>
            <input
              type="text"
              value={this.state.updates}
              onChange={this.update('updates')}
              className="project-field"
            />

            <label className="project-field">FAQ</label>
            <input
              type="text"
              value={this.state.faq}
              onChange={this.update('faq')}
              className="project-field"
            />
            <label className="project-field">Location</label>
            <input
              type="text"
              value={this.state.location}
              onChange={this.update('location')}
              className="project-field"
            />
            <label className="project-field">Start Date</label>
            <input
              type="text"
              value={this.state.start_date}
              onChange={this.update('start_date')}
              className="project-field"
            />
            <label className="project-field">End Date</label>
            <input
              type="text"
              value={this.state.end_date}
              onChange={this.update('end_date')}
              className="project-field"
            />
             <label className="project-field">Funding Goal</label>
            <input
              type="text"
              value={this.state.funding_goal}
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
          </form>
        </div>
      </div>
    );
  }
}




export default withRouter(ProjectForm);