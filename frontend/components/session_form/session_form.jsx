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
        <input type="text" 
                value={this.state.username}
                placeholder="Username" 
                onChange={this.update('username')}
                className="login-input"
                />
    );
  }

  renderPassword(){
    return(
        <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-input"
                />
    );      
  }

  renderEmail(){
    return(
        <input type="text"
                value={this.state.email}
                placeholder="Email"
                onChange={this.update('email')}
                className="login-input"
                />
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
            <h1>{this.props.formType}</h1>
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
              <button className="demo-user-submit" onClick={this.demoUser}>Demo User</button>
              <br/>
              <div className='login-footer'>
               <div className="login-subscript">Already have an account? </div>
               <div className='login-link'>{this.props.navLink}</div> 
              </div>
              
            </div>
          </form>
        </div>
      );
    } else {
        return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            <h1>{this.props.formType}</h1>
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              {this.renderUsername()}
              <br/>
              {this.renderPassword()}
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
              <br/>
              <button className="demo-user-submit" onClick={this.demoUser}>Demo User</button>
              <br/>
              <div className='login-footer'>
               <div className="login-subscript">New to KickBacker? </div> 
               <div className='login-link'>{this.props.navLink}</div>
              </div>
              
            </div>
          </form>
        </div>
      );
    }
    
  }
}

export default SessionForm;
