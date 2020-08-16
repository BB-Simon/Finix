import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Button from "./partials/Button";
import Minititle from "./partials/Minititle";
import Title from "./partials/Title";
import Subtitle from "./partials/Subtitle";

const About = () => {
  return (
    <Wrapper>
      <Container className="my-5 p-5">
        <Row xs="1" sm="1" md="2">
          <Col className="py-3">
            <ImgWrapper>
              <img src="/img/asset-7.png" width="100%" height="100%" alt="" />
              <div className="img-info">
                <div>
                  <Title title="25" color="#e73c3e" marginBottom="0px" />
                  <p style={{ fontWeight: "500" }}>Years Of Experience</p>
                </div>
              </div>
            </ImgWrapper>
          </Col>
          <Col className="py-3">
            <Minititle title="About company" />
            <Title
              size="2.25rem"
              weight="400"
              title="We have been working very efficiently with loan and funding for 25
            years."
            />
            <Subtitle
              fontSize="1rem"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida."
            />
            <Subtitle
              fontSize="1rem"
              title="In business, we focus on 3 things."
            />
            <ul>
              <li>
                <span className="mr-2">
                  <img
                    src="/img/tick.svg"
                    width="20px"
                    height="20px"
                    alt="mark"
                  />
                </span>
                Useful info
              </li>
              <li>
                <span className="mr-2">
                  <img
                    src="/img/tick.svg"
                    width="20px"
                    height="20px"
                    alt="mark"
                  />
                </span>
                Reliability
              </li>
              <li>
                <span className="mr-2">
                  <img
                    src="/img/tick.svg"
                    width="20px"
                    height="20px"
                    alt="mark"
                  />
                </span>
                Innovation
              </li>
            </ul>
            <Button title="View more" />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  border-top: 1px solid #f4f5fe;
`;

const ImgWrapper = styled.div`
  position: relative;
  padding: 50px;
  .img-info {
    background: url("/img/asset-21.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 200px;
    height: 200px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    bottom: 50px;
  }
`;
