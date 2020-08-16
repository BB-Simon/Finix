import React from "react";
import styled from "styled-components";

import Minititle from "./partials/Minititle";
import Title from "./partials/Title";
import Subtitle from "./partials/Subtitle";
import { Container, Row, Col } from "reactstrap";
import Step from "./partials/Step";
import Button from "./partials/Button";
import Loanform from "./partials/Loanform";

const Funding = () => {
  return (
    <Container className="my-5 p-5">
      <div className="text-center">
        <Minititle title="Funding circles" />
        <Title size="2.25rem" title="You deserve a better business loan" />
        <Subtitle
          marginLorR={true}
          width="570px"
          fontSize="1rem"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <Row xs="1" sm="1" md="2">
        <Col className="py-3">
          <Title
            size="2.25rem"
            weight="400"
            title="We usually follow 4 steps to get a better business loans."
          />
          <Step
            line={true}
            step="1"
            title={<Title size="1.5rem" title="Apply in 10 minutes" />}
            subtitle={
              <Subtitle
                fontSize="1rem"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            }
          />
          <Step
            line={true}
            step="2"
            title={<Title size="1.5rem" title="Hear from us in 1 hour" />}
            subtitle={
              <Subtitle
                fontSize="1rem"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            }
          />
          <Step
            line={true}
            step="3"
            title={<Title size="1.5rem" title="A decision in 24 hours" />}
            subtitle={
              <Subtitle
                fontSize="1rem"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            }
          />
          <Step
            step="4"
            title={<Title size="1.5rem" title="Your loan is funded" />}
            subtitle={
              <Subtitle
                fontSize="1rem"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            }
          />
          <Button title="Apply now" />
        </Col>
        <Col className="py-3">
          <FormWrapper>
            <div className="text-center">
              <Subtitle fontSize="1rem" title="Calculate your rate" />
              <Title size="2.25rem" title="How much do you need?" />
            </div>
            <Loanform />
          </FormWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Funding;

const FormWrapper = styled.div`
  background: #fdebeb;
  padding: 50px 45px;
`;
