import React, { useState } from "react";
import { connect } from "react-redux";    
import FormInput from "../form-input/FormInput.js";
import CustomButton from "../custom-button/CustomButton.js";
import { signUpStart } from "../../redux/user/userActions.js"

import "./sign-up.styles.scss";

const SignUp = ({ signUpStart}) => {

const [userCredentials, setUserCredentials ] = useState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
})
  

 const submitHandler = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password})
  }
  

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  }
 


    const { displayName, email, password, confirmPassword } = userCredentials
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={submitHandler}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName} 
            onChange={changeHandler}
            label="Display Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={changeHandler}
            label="Confirm Password"
            required
          ></FormInput>

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }



const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
