import React from 'react';
import { withRouter } from 'react-router';


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
    this.state.project_id = this.props.projectId
    this.props.action(this.state)
    this.setState({
      title: '',
      description: '',
      project_id: '',
      cost: ''
    })
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
        <h1 className="new-reward-title">Add New Reward</h1>
        <form className="new-reward-form" onSubmit={this.handleSubmit}>
          <label>Reward Title
            <input
              type="text"
              value={this.state.title}
              placeholder="Your title here" 
              onChange={this.update('title')}
              className="project-field"
              required
            />
            </label>
          <label>Reward Description
            <textarea
              value={this.state.description}
              placeholder="What is your reward about?" 
              onChange={this.update('description')}
              className="project-field"
              required
            />
          </label>
          
          <label>Cost
            <input
              type="currency"
              value={this.state.cost}
              placeholder="$$ Cost" 
              onChange={this.update('cost')}
              className="project-field"
              required
            />
          </label>
          <input
                type="submit"
                value={this.props.formType}
                className="new-reward-button"
              />
          {/* <div className='project-errors'>{this.renderErrors()}</div> */}
        </form>
      </div>
    );
  }
}




export default withRouter(RewardForm);