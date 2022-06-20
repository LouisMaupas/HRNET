import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import style from "../utils/style"; FIXME
import wealthHealthLogo from "../public/img/logo.jpg";

// Styled components
const HeaderHeader = styled.header({
    margin: "0 0 1rem 0",
    backgroundColor: "blue",
  }),
  HeaderNav = styled.nav({
    display: "flex",
    justifyContent: "center",
    "& > a": {
      margin: "0 1rem 0.5rem 1rem",
      textDecoration: "none",
      color: "green",
      fontWeight: "bold",
      fontSize: "1.5rem",
      ":hover": {
        color: "black",
        fontSize: "1.6rem",
        marginBottom: "0",
      },
    },
  }),
  HeaderTitle = styled.h1({
    display: "flex",
    justifyContent: "center",
  });

/**
 * header component
 * @returns
 */
const Header = () => {
  // FIXME comme le header ne recharge pas à chaque changement de page (car il est hors de <Route> )
  // il faut utiliser le redux state qu'on modifie depuis <App>
  /** nav link style */

  let currentPage = "/";
  useEffect(() => {
    currentPage = window.location.pathname;
  });
  return (
    <HeaderHeader>
      <HeaderTitle>
        <img src={wealthHealthLogo} alt="wealth Health logo" width="100px" />
        <span>Hrnet</span>
      </HeaderTitle>
      <HeaderNav>
        <Link
          className={currentPage === "/create" ? "link--active" : null}
          to="/create"
        >
          Create Employee
        </Link>
        <Link
          className={currentPage === "/current" ? "link--active" : null}
          to="/current"
        >
          Current Employees
        </Link>
      </HeaderNav>
    </HeaderHeader>
  );
};

export default Header;
