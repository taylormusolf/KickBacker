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

    this.props.action((this.props.formType === "Create Reward") ? formData : formData, this.state.id)
    
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
    return (
      <div className="new-reward-container">
        <h1 className="new-reward-title">{this.props.formType}</h1>
        <form className="new-reward-form" onSubmit={this.handleSubmit}>
          <label>Reward Title
            <input
              type="text"
              value={this.state.title}
              placeholder="Your title here" 
              onChange={this.update('title')}
              className="project-field"
            />
            </label>
          <label>Reward Description
            <textarea
              value={this.state.description}
              placeholder="What is your reward about?" 
              onChange={this.update('description')}
              className="project-field"
            />
          </label>
          
          <label>Cost
            <textarea 
              type="number"
              value={this.state.cost}
              placeholder="Cost" 
              onChange={this.update('cost')}
              className="project-field"
            />
          </label>
          <input
                type="submit"
                value={this.props.formType}
                className="new-project-button"
              />
          {/* <div className='project-errors'>{this.renderErrors()}</div> */}
        </form>
      </div>
    );
  }
}




export default withRouter(RewardForm);