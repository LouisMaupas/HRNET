import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import style from "../utils/style";
import wealthHealthLogo from "../public/img/logo.jpg";

// Styled components
const HeaderHeader = styled.header({
    margin: "0 0 1rem 0",
  }),
  HeaderNav = styled.nav({
    display: "flex",
    justifyContent: "center",
  }),
  HeaderTitle = styled.h1({
    display: "flex",
    justifyContent: "center",
  });

const NavbarLink = styled(Link)`
  // FIXME cancel le style de la page
  // background-color: ${style.primaryColor};
  // color: black;
  // margin: "0 1rem 0.5rem 1rem";
  // text-decoration: "none";
  // font-weight: "bold;
  // font-size: "1.5rem";
  // &:hover {
  //   color: "black";
  //   margin-bottom: 0;
  // }
`;

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
        <NavbarLink
          className={currentPage === "/create" ? "link--active" : null}
          to="/create"
        >
          Create Employee
        </NavbarLink>
        <NavbarLink
          className={currentPage === "/current" ? "link--active" : null}
          to="/current"
        >
          Current Employees
        </NavbarLink>
      </HeaderNav>
    </HeaderHeader>
  );
};

export default Header;
