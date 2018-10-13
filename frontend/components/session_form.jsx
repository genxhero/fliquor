import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';



class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      first_name:"",
      last_name:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);

  }



  update(field) {
  return event => this.setState({
    [field]: event.currentTarget.value
  });
}

renderErrors() {
  if (this.props.errors.session.length > 0) {

    return (

        <div className="errors-popup">
            <ul className="errors">
              {this.props.errors.session.map((error, key) => {
                return <li>{error}</li>
              })}
            </ul>
      </div>
    );
  }
}

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoLogin(event) {
    event.preventDefault();

     this.setState({username: "demo",
       password: "demonstration"}, () =>{
       const user = Object.assign({}, this.state);
       this.props.processForm(user);}
     );

  }



  render() {
    let formString = "";
    let formUrl = ""
    let currentPage ="";

    const ErrorsPopup = () => {
      return (
        <div>
     {this.renderErrors()}
        </div>

     );

    };

    if (this.props.formType === 'login') {
      formUrl = '/signup';
      formString = "Sign Up";
      currentPage = "Log In";
      return (
    <div>
        <ErrorsPopup />
      <div className="session-form-container">
        <h3 className="form-header">{currentPage}</h3>
        <br></br>
        <form onSubmit={this.handleSubmit} className="session-form">
           <input className="form-field" type="text"
             placeholder="Username"
             value={this.state.username}
             onChange={this.update('username')}/>

              <input className="form-field"  type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}/>
          <input className="submission" type="submit" value={currentPage} />
          <button className="submission" onClick={this.demoLogin}>Demo Login</button>
        </form>
        <br></br>
      </div>
      </div>
      );

    } else  {

      formUrl = '/login';
      formString ="Log In";
      currentPage = "Sign Up";
      return (
<div>
    <ErrorsPopup />
  <div className="session-form-container">
    <h3 className="form-header">{currentPage}</h3>
    <br></br>
    <form onSubmit={this.handleSubmit} className="session-form">

    <div className="name-container">
      <input className="form-field-name"  type="text"
        placeholder="First Name"
        value={this.state.first_name}
        onChange={this.update('first_name')}/>

      <input className="form-field-name" type="text"
        placeholder="Last Name"
        value={this.state.last_name}
        onChange={this.update('last_name')}/>
    </div>

    <input className="form-field" type="text"
      placeholder="Your current email address"
      value={this.state.email}
      onChange={this.update('email')}/>

       <input className="form-field"  type="text"
         placeholder="Username"
         value={this.state.username}
         onChange={this.update('username')}/>


          <input className="form-field" type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}/>

      <input className="submission" type="submit" value={currentPage} />
    </form>

    <br></br>
  </div>
</div>

      );

    }


  }

}

export default withRouter(SessionForm);
// <Link className="other-action" to={`${formUrl}`}>{formString} Instead</Link>
