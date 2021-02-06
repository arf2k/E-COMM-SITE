import React from "react";
import FormInput from "../form-input/FormInput.js";
import CustomButton from "../custom-button/CustomButton.js";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/Firebase.utils.js";
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

  submitHandler = async e => {
       e.preventDefault();
       const {displayName, email,  password, confirmPassword} = this.state
       if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
       }
       try {
const {user} = await auth.createUserWithEmailAndPassword(email, password)
await 
createUserProfileDocument(user, {displayName})
this.setState({
     displayName: "",
     email: "",
     password: "",
     confirmPassword: "",

})
       } catch (error) {
            console.error(error)

       }

  }

  changeHandler = e => {
       const { name, value} = e.target;
       this.setState({[name]: value})
  }


  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.submitHandler}>
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
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.changeHandler}
            label="Display Name"
            required
          ></FormInput>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
