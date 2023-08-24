import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      email2: '',
      password: '',
      password2: ''
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
    if(this.props.formType === 'Sign Up'){
      if(this.state.email !== this.state.email2){
        this.props.receiveSessionErrors(['Emails need to match']);
      } else if(this.state.password !== this.state.password2){
          this.props.receiveSessionErrors(['Passwords need to match']);
      } else {
        this.props.processForm(user);
        // this.props.history.goBack()
        
      }
    } else {
      this.props.processForm(user);
      // this.props.history.goBack()
    }
  }

  demoUser(e) {
    e.preventDefault();
    this.props.demoUser({username: 'Demo User', password: '123456'})
    // this.props.history.goBack()
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
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <h1>{this.props.formType}</h1>
          <div className="login-form">
            <br/>
            {this.renderUsername()}
            <br/>
            {this.props.formType === 'Sign Up' && 
              <>
                {this.renderEmail()}
                <br/>
                <input type="text" value={this.state.email2} placeholder="Re-enter email" onChange={this.update('email2')} className="login-input"/>
                <br/>
                {this.renderPassword()}
                <br/>
                <input type="text" value={this.state.password2} placeholder="Re-enter password" onChange={this.update('password2')} className="login-input"/>
                <br/>
              </>
            }
            {this.props.formType !== 'Sign Up' && 
              <>
                {this.renderPassword()}
                <br/>
              </>
            }
            <input className="session-submit" type="submit" value={this.props.formType === 'Sign Up' ? 'Create account' : 'Log in'} />
            <br/>
            <button className="demo-user-submit" onClick={this.demoUser}>Demo User</button>
            <br/>
            <div className='login-footer'>
              <div className="login-subscript">Already have an account? </div>
              <div className='login-link'>{this.props.navLink}</div>
            </div>
            <div className='login-errors'>{this.renderErrors()}</div> 
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
