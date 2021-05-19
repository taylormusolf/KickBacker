import React from 'react';
import { withRouter } from 'react-router';
import {Link, Redirect} from 'react-router-dom';

//pass in project from edit screen or back_show
//pass in reward create

class RewardForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = this.props.reward;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
      const formData = new FormData();
      formData.append('project[title]', this.state.title);
      formData.append('project[creator_id]', this.props.creatorId);

    this.props.action((this.state.formType === "Create Project" || this.state.imageFile) ? formData : formData, this.state.id)
    .then((action) => this.props.history.push(`/projects/${action.project.id}`));

    
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }


  render() {
    const { project } = this.props;
    console.log
    if (!project) return null;
    const preview = this.state.existingPhoto ? <img src={this.state.existingPhoto}/> : this.state.imageUrl ? <img src={this.state.imageUrl}/> : null
    return (
      <div className="new-project-container">
        <h1 className="new-project-title">{this.props.formType}</h1>
        <form className="new-project-form" onSubmit={this.handleSubmit}>
          <label>Project Category
            <select defaultValue={this.state.category_id ? `${this.state.category_id}` : ''} className='new-project-categories' onChange={this.update('category_id')}>
              <option value='' disabled={true}>Select your category</option>
              <option value="1">Art</option>
              <option value="2">Comics & Illustration</option>
              <option value="3">Design & Tech</option>
              <option value="4">Film</option>
              <option value="5">Food & Craft</option>
              <option value="6">Games</option>
              <option value="7">Music</option>
              <option value="8">Publishing</option>
            </select>
          </label>
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
              value={this.state.start_date.slice(0,10)}
              onChange={this.update('start_date')}
              className="project-field"
            />
          </label>
          <label>Project End Date
            <input
              type='date'              
              value={this.state.end_date.slice(0,10)}
              onChange={this.update('end_date')}
              className="project-field"
            />
          </label>
          <label>Funding Goal
            <input required
              type="currency"
              value={this.state.funding_goal}
              placeholder="$$$$"
              onChange={this.update('funding_goal')}
              className="project-field"
            />
          </label>
          {this.hasPhoto()}
          <label>Upload Project Image
            <div>
              <input
              type="file"
              onChange={this.handleFile}
              />
              {preview}
            </div>
            
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




export default withRouter(RewardForm);