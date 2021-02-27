import React from "react";
import Directory from "../../components/directory/Directory.js";
import { HomepageContainer} from "./HopepageStyles.js"

const Homepage = () => {
  return (
    <>
      <HomepageContainer>
        <Directory />
      </HomepageContainer>
    </>
  );
};

export default Homepage;
