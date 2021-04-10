import React from 'react';
import { withRouter } from 'react-router';
import {Link, Redirect} from 'react-router-dom';



class ProjectForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }
  componentDidMount(){
    this.props.resetProjectErrors();
    // if(this.props.formType === 'Update Project'){
    //   this.props.fetchProject(this.props.match.params.projectId)
    // }
  }
  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // if (this.state.formType === "Create Project" || this.state.photoFile){
      const formData = new FormData();
      formData.append('id', this.state.id);
      formData.append('project[title]', this.state.title);
      formData.append('project[description]', this.state.description);
      formData.append('project[campaign]', this.state.campaign);
      formData.append('project[updates]', this.state.updates);
      formData.append('project[faq]', this.state.faq);
      formData.append('project[location]', this.state.location);
      formData.append('project[start_date]', this.state.start_date);
      formData.append('project[end_date]', this.state.end_date);
      formData.append('project[funding_goal]', this.state.funding_goal);
      formData.append('project[creator_id]', this.props.creatorId);
      if (this.state.imageFile) {
        formData.append('project[photo]', this.state.imageFile);
      }
    // } else {
    //   const projectProps = 
    //   {
    //     title: this.props.project.title, 
    //     imageFile: this.props.project.photoFile, 
    //     description: this.props.project.description, 
    //     funding_goal: this.props.project.fundingGoal,
    //     campaign: this.props.project.campaign, 
    //     faq: this.props.project.faq, 
    //     updates: this.props.project.updates, 
    //     location: this.props.project.location,
    //     start_date: this.props.project.start_date,
    //     end_date: this.props.project.end_date,
    //     creator_id: this.props.creatorId
    //   }
    // }

    
    this.props.action((this.state.formType === "Create Project" || this.state.imageFile) ? formData : formData, this.state.id)
    .then((action) => this.props.history.push(`/projects/${action.project.id}`));
    // this.props.action(this.state).then(this.props.history.push(`/`))

    
  }

  handleFile(e){
    this.setState({existingPhoto: null})
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: reader.result})
    }
    if (file) {
      reader.readAsDataURL(file)
    } else {
      this.setState({imageUrl: '', imageFile: null})
    }
    this.setState({
      imageFile: e.currentTarget.files[0],
      imageUrl: e.currentTarget.files[0],
    })
  }

  hasPhoto(){
    if(this.state.photo_url.length){
      return(
        <p>Project has existing photo attached</p>
      )
    }
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
    const { project } = this.props;
    if (!project) return null;
    const preview = this.state.existingPhoto ? <img src={this.state.existingPhoto}/> : this.state.imageUrl ? <img src={this.state.imageUrl}/> : null
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




export default withRouter(ProjectForm);