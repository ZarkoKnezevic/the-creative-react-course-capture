import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About Us</a>
        </li>
        <li>
          <a href="#">2. Our work</a>
        </li>
        <li>
          <a href="#">3. Contact Us</a>
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
