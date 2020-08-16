import React from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Homemenu = () => {
  return (
    <Wrapper className="sub-nav-item">
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
    </Wrapper>
  );
};
export const Pagemenu = () => {
  return (
    <Wrapper className="sub-nav-item">
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
    </Wrapper>
  );
};
export const Servicemenu = () => {
  return (
    <Wrapper className="sub-nav-item">
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
    </Wrapper>
  );
};
export const Newsmenu = () => {
  return (
    <Wrapper className="sub-nav-item">
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
      <NavLink className="sub-nav-link" to="3">
        Hello
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
  height: auto;
  position: absolute;
  top: 170%;
  left: 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.5s ease-in-out;
  .sub-nav-link {
    text-decoration: none;
    color: #111111;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }
`;
