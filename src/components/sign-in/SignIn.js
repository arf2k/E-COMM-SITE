import React from "react";
import FormInput from "../form-input/FormInput.js";
import CustomButton from "../custom-button/CustomButton.js"
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  changeHandler = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.submitHandler}>
          <FormInput
            name="email"
            type="email"
            changeHandler={this.changeHandler}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            changeHandler={this.changeHandler}
            value={this.state.password}
            label="password"
            required
          />
          <CustomButton type="submit">Sign In</CustomButton> 
        </form>
      </div>
    );
  }
}

export default SignIn;
