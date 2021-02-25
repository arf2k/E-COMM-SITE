import React from "react";
import { connect } from "react-redux";    
import FormInput from "../form-input/FormInput.js";
import CustomButton from "../custom-button/CustomButton.js";
import { signUpStart } from "../../redux/user/userActions.js"

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  submitHandler = async (e) => {
    e.preventDefault();
    const { signUpStart } = this.props
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password})
  }
  

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
 

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.submitHandler}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName} 
            onChange={this.changeHandler}
            label="Display Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.changeHandler}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.changeHandler}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.changeHandler}
            label="Confirm Password"
            required
          ></FormInput>

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
