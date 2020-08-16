import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Button from "./Button";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Minititle from "./Minititle";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container fluid={true} className="mx-4">
        <Row xs="1" sm="2" md="2" className="header-content">
          <Col>
            <Minititle title="We are here for" />
            <Title title="We believe in those made to do more" />
            <Subtitle
              title="Loans are advantageous as a relatively inexpensive way of
              borrowing money. Start or grow your own business"
            />
            <Button title="View more" />
          </Col>
          <div className="header-icon">
            <ul>
              <li>
                <span>Follow us</span>
              </li>
              <li>
                <i class="fa fa-twitter"></i>
              </li>
              <li>
                <i class="fa fa-facebook"></i>
              </li>
              <li>
                <i class="fa fa-instagram"></i>
              </li>
              <li>
                <i class="fa fa-linkedin"></i>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  overflow: hidden;
  background: url("/img/asset-20.jpeg") no-repeat top center;
  background-size: cover;
  background-attachment: fixed;
  .header-content {
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;

    h6 {
      // font-size: 1.1rem;
      // color: #e73c3e;
    }

    .header-icon {
      position: absolute;
      left: 0;
      bottom: 0;
      ul {
        display: flex;
        li {
          margin: 0 10px;
          font-size: 1.1rem;

          span {
            margin-right: 3rem;
            position: relative;
            &::after {
              content: "";
              height: 1px;
              background: #111111;
              width: 35px;
              position: absolute;
              top: 51%;
              right: -45px;
            }
          }
        }
      }
    }
  }
`;
