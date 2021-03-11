import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

// Style
const StyledNav = styled.nav`
  min-height: 10vh;
  margin: auto;
  padding: 1rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282828;
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-family: "Lobster", sans-serif;
    font-size: 1.5rem;
    font-weight: lighter;
  }
  li {
    position: relative;
    padding-left: 10rem;
  }
`;

export default Nav;
