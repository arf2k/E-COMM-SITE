import React from "react";
// import "./custom-button.styles.scss"
import { CustomButtonContainer } from "./CustomButtonStyles.js";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
