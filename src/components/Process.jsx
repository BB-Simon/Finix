import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Minititle from "./partials/Minititle";
import Title from "./partials/Title";
import Subtitle from "./partials/Subtitle";
import Processbox from "./partials/Processbox";
import Playbutton from "./partials/Playbutton";

const Process = () => {
  return (
    <Wrapper>
      <Container className="my-5 p-5">
        <Row xs="1" sm="1" md="2">
          <Col>
            <Minititle title="Transparent process" />
            <Title title="Why people choose us" size="2.25rem" />
            <Subtitle
              fontSize="1rem"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <div className="play-btn-box">
              <img src="/img/asset-8.png" alt="" width="100%" height="100%" />
              <div className="play-btn">
                <Playbutton />
              </div>
            </div>
          </Col>
          <Col>
            <Row xs="1" sm="1" md="2">
              <Col>
                <Processbox
                  title={<Title title="Guarantee" size="1.8rem" />}
                  subtitle={
                    <Subtitle
                      fontSize="1rem"
                      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                  }
                  img="/img/guarantee.svg"
                />
                <Processbox
                  title={<Title title="Reliability" size="1.8rem" />}
                  subtitle={
                    <Subtitle
                      fontSize="1rem"
                      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                  }
                  img="/img/trust.svg"
                />
              </Col>
              <Col>
                <Processbox
                  title={<Title title="Speed" size="1.8rem" />}
                  subtitle={
                    <Subtitle
                      fontSize="1rem"
                      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                  }
                  img="/img/speed.svg"
                />
                <Processbox
                  title={<Title title="Experience" size="1.8rem" />}
                  subtitle={
                    <Subtitle
                      fontSize="1rem"
                      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                  }
                  img="/img/experience.svg"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Process;

const Wrapper = styled.div`
  background: #f4f5fe;
  .play-btn-box {
    position: relative;
    .play-btn {
      position: absolute;
      right: 36%;
      bottom: 16%;
    }
  }
`;
