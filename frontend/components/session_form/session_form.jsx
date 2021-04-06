import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoUser(e) {
    e.preventDefault();
    this.props.demoUser({username: 'demouser', password: '123456'})
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

  renderUsername(){
    return (
      <label>Username:
        <input type="text" 
                value={this.state.username} 
                onChange={this.update('username')}
                className="login-input"
                />
      </label>
    );
  }

  renderPassword(){
    return(
      <label>Password:
        <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
      </label>
    );      
  }

  renderEmail(){
    return(
      <label>Email:
        <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                />
      </label>
    )
  }


  componentDidMount(){
    this.props.resetSessionErrors();
  }

  render() {
    if(this.props.formType === 'Sign Up'){
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            {this.props.formType}
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              {this.renderUsername()}
              <br/>
              {this.renderEmail()}
              <br/>
              {this.renderPassword()}
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
              <br/>
              <button onClick={this.demoUser}>Demo User</button>
              <br/>
              {this.props.navLink}
            </div>
          </form>
        </div>
      );
    } else {
        return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            {this.props.formType}
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              {this.renderUsername()}
              <br/>
              {this.renderPassword()}
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
              <br/>
              <button onClick={this.demoUser}>Demo User</button>
              <br/>
              {this.props.navLink}
            </div>
          </form>
        </div>
      );
    }
    
  }
}

export default SessionForm;
