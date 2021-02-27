import React from 'react';
import './sign-in-sign-up.styles.scss';
import SignIn from "../../components/sign-in/SignIn.js"
import SignUp from "../../components/sign-up/SignUp.js"

const SignInSignUp = () => {
return(
<div className="sign-in-and-sign-up">
     <SignIn/>
     <SignUp/>
</div>
)


}

export default SignInSignUp