import * as React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import style from "../utils/style";
import { useNavigate } from "react-router-dom";

// Styled components
const Welcome = styled.p({
    fontWeight: "bold",
    fontSize: "2.5rem",
    color: `${style.primaryColor}`,
  }),
  Main = styled.main({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  }),
  Buttons = styled.div({});

/**
 * component page current employees
 * @returns
 */
const Home = () => {
  // navigate feature
  let navigate = useNavigate();
  const routeChange = (ev) => {
    let path = `current`;
    ev.currentTarget.innerText === "ADD AN EMPLOYEE"
      ? (path = `create`)
      : (path = `current`);

    navigate(path);
  };
  return (
    <>
      <Main>
        <Welcome>Hello what do you want to do?</Welcome>
        <Buttons>
          <Button
            type="submit"
            variant="contained"
            color="success"
            onClick={routeChange}
          >
            Add an employee
          </Button>{" "}
          <Button
            type="submit"
            variant="contained"
            color="success"
            onClick={routeChange}
          >
            Consult the list of employees
          </Button>
        </Buttons>
      </Main>
    </>
  );
};

export default Home;
