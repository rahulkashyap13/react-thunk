import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "./../../store/actions/RegisterUser";
import Validator from "js-object-validation";
import { Form, Button } from 'react-bootstrap';
import { RegisterValidations, RegisterValidationsMessaages } from "../../validations";
import "../Login/Login.css";
class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
		username: "",
		email: "",
		password: "",
		first_name: "",
		last_name: "",
		errors: "",
    };
  }

  componentDidMount() {
    const storageSession=JSON.parse(localStorage.getItem('user'));
    if(storageSession) {
      this.props.history.push("/dashboard");
    };
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      errors: {}
    });
    
    try {
      const { isValid, errors } = Validator(
        this.state,
        RegisterValidations,
        RegisterValidationsMessaages
      );
      if (!isValid) {
        this.setState({
          errors,
          isLoading: false
        });
        return;
      }
      const { username, email, password, first_name, last_name } = this.state;
      	this.props.registerUserAction({
		   	username,
			email,
			password,
			first_name,
			last_name
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [ name ]: value,
      errors: {
        ...this.state.errors,
        [ name ]: ""
      }
    });
  };

  render() {
    const { errors } = this.state;
		const { loginState } = this.props
    return (
      <>
      <div className="login-page">
        <div className="login-wrap">
          <div className="login-box">	
          <h4 className="text-center">Sign Up</h4>
            <Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Username</Form.Label>
					<Form.Control type="text" placeholder="Enter User Name"  
					name="username"
					value={ this.state.username }
					type="text"
					placeholder="Email User Name"
					onChange={ this.handleChange }
					autoComplete="username"/>
					{errors && errors[ "username" ] ? (
						<div className="text-danger">{errors[ "username" ]}</div>
						) : (
						""
						)}
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email"  
					name="email"
					value={ this.state.email }
					type="email"
					placeholder="Email Address"
					onChange={ this.handleChange }
					autoComplete="username"/>
					{errors && errors[ "email" ] ? (
						<div className="text-danger">{errors[ "email" ]}</div>
						) : (
						""
						)}
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" 
					name="password"
					value={ this.state.password }
					type="password"
					placeholder="Password"
					onChange={ this.handleChange }
					autoComplete="current-password"/>
						{errors && errors[ "password" ] ? (
						<div className="text-danger">{ errors[ "password" ] }</div>
						) : (
						""
						)}
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>First Name</Form.Label>
					<Form.Control type="text" placeholder="Enter User Name"  
					name="first_name"
					value={ this.state.first_name }
					type="text"
					placeholder="Email First Name"
					onChange={ this.handleChange }
					autoComplete="first_name"/>
					{errors && errors[ "first_name" ] ? (
						<div className="text-danger">{errors[ "first_name" ]}</div>
						) : (
						""
						)}
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Last Name</Form.Label>
					<Form.Control type="text" placeholder="Enter User Name"  
					name="last_name"
					value={ this.state.last_name }
					type="text"
					placeholder="Email Last Name"
					onChange={ this.handleChange }
					autoComplete="last_name"/>
					{errors && errors[ "last_name" ] ? (
						<div className="text-danger">{errors[ "last_name" ]}</div>
						) : (
						""
						)}
				</Form.Group>
              <Button variant="primary" type="submit"  onClick={ this.handleSubmit }
              >
                Submit
              </Button>
              <p className="text-right"><a href="login"><strong>Sign In</strong></a></p>
            </Form>
          </div>
        </div>
      </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const loginstatus = state.LoginReducer;
  return {
    loginState: state.LoginReducer,
    loginstatus
  };
};
const mapDispatchToProps = dispatch => {
  return {
    registerUserAction: userData => {
      dispatch(registerUser(userData));
    }
  };
};
export default connect(
  undefined,
  mapDispatchToProps
)(RegistrationPage);
