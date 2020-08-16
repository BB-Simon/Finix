import React, { useState } from "react";
import styled from "styled-components";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  NavbarText,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import { Homemenu, Pagemenu, Servicemenu, Newsmenu } from "./Navmenu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavWrapper>
      <Navbar className="sticky-top" expand="md">
        <Container fluid={true} className="mx-2">
          <NavLink to="/">
            <img src="/img/asset-1.png" alt="logo" />
          </NavLink>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav-item">
                <NavLink to="/" className="nav-link">
                  <span>
                    Home <i class="fas fa-angle-down"></i>
                  </span>
                  <Homemenu />
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink to="/pages" className="nav-link">
                  Pages <i class="fas fa-angle-down"></i>
                  <Pagemenu />
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink to="/services" className="nav-link">
                  Services <i class="fas fa-angle-down"></i>
                  <Servicemenu />
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink to="/funding" className="nav-link">
                  Funding
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink to="/loans" className="nav-link">
                  Loans
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink to="/news" className="nav-link">
                  News <i class="fas fa-angle-down"></i>
                  <Newsmenu />
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i class="fas fa-search"></i>
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="nav-txt">
              <span className="icon">
                <img src="/img/phone.svg" alt="" />
              </span>
            </NavbarText>
            <NavbarText className="nav-txt">
              <p>call now</p>
              <p style={{ fontWeight: "500" }}>+1 (514) 312-5678</p>
            </NavbarText>
            <NavbarText className="nav-txt">
              <Button title="Apply now" />
            </NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </NavWrapper>
  );
};

export default Navigation;

const NavWrapper = styled.div`
  background: #fff;
  color: #000;
  border-bottom: 1px solid gray;

  .nav-item {
    margin: 0 10px;
    .nav-link {
      position: relative;
      font-size: 1rem;
      color: #111111;
      font-weight: 500;
      transition: all 0.5s ease-in-out;
    }
  }
  .nav-txt {
    padding: 0 5px;
    .icon {
      color: red;
      padding-left: 1rem;
      padding-right: 0;
      border-left: 1px solid gray;
    }
  }
`;
