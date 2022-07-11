import * as React from "react";
import styled from "styled-components";

// Styled components
const Welcome = styled.main({
  display: "flex",
  justifyContent: "center",
  width: "90%",
});

/**
 * component page current employees
 * @returns
 */
const Home = () => {
  return (
    <>
      <Welcome>Hello what do you want to do?</Welcome>
    </>
  );
};

export default Home;
