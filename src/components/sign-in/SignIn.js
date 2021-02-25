import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/FormInput.js";
import CustomButton from "../custom-button/CustomButton.js";
import "./sign-in.styles.scss";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  
const [userCredentials, setCredentials ] = useState({email: "", password: ""})

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = userCredentials

    emailSignInStart(email, password);
  };

  const { email, password } = userCredentials;
 const changeHandler = (e) => {
    const { value, name } = e.target;
    setCredentials({...userCredentials, [name]: value});
  };

 

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={submitHandler}>
          <FormInput
            name="email"
            type="email"
            changeHandler={changeHandler}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            changeHandler={changeHandler}
            value={password}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
