import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";
import Minititle from "./partials/Minititle";
import Title from "./partials/Title";
import Subtitle from "./partials/Subtitle";
import Loanitemslider from "./Loanitemslider";

const Services = () => {
  return (
    <Wrapper>
      <Container className="my-5 p-5">
        <div className="text-center">
          <Minititle title="Knowledge of the market" />
          <Title size="2.25rem" title="Only the best professional services" />
          <Subtitle
            marginLorR={true}
            width="570px"
            fontSize="1rem"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <Loanitemslider />
      </Container>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  background: #f4f5fe;
`;
