import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import style from "../utils/style";
import wealthHealthLogo from "../public/img/logo.jpg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";

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
  display: flex;
  text-decoration: "none";
  color: black;
  margin: 0 1rem 0 1rem;
  &:hover {
    color: ${style.primaryColorDarker};
  }
  & > * {
    margin-right: 0.5rem;
  }
`;

/**
 * header component
 * @returns
 */
const Header = () => {
  return (
    <HeaderHeader>
      <HeaderTitle>
        <img src={wealthHealthLogo} alt="wealth Health logo" width="100px" />
        <span>Hrnet</span>
      </HeaderTitle>
      <HeaderNav>
        <NavbarLink to="/">
          <HomeIcon />
          Home
        </NavbarLink>
        <NavbarLink to="/create">
          <AddCircleIcon />
          Create Employee
        </NavbarLink>
        <NavbarLink to="/current">
          <GroupsIcon />
          Current Employees
        </NavbarLink>
      </HeaderNav>
    </HeaderHeader>
  );
};

export default Header;
