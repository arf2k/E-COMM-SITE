import React from "react";

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
       e.preventDefault()
       this.setState({email: "", password: ""})
  }

  changeHandler = (e) => {
       const {value, name} = e.target;
       this.setState({[name]: value})

  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.submitHandler}>
          <input 
          name="email" 
          type="email" 
          onChange={this.changeHandler}
          value={this.state.email} 
          required 
          />
          <label>Email</label>
          <input
            name="password"
            type="password"
            onChange={this.changeHandler}
            value={this.state.password}
            required
          />
          <label>Password</label>
          <input type="submit" value="Submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn
