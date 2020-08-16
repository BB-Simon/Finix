import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";
import Minititle from "./partials/Minititle";
import Title from "./partials/Title";
import Subtitle from "./partials/Subtitle";
import Teaminfo from "./partials/Teaminfo";

const Team = () => {
  return (
    <TeamWrapper>
      <Container className="my-5 p-5">
        <div className="text-center">
          <Minititle title="Expert People" />
          <Title size="2.25rem" title="Global leadership team" />
          <Subtitle
            marginLorR={true}
            width="570px"
            fontSize="1rem"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <Teaminfo />
      </Container>
    </TeamWrapper>
  );
};

export default Team;

const TeamWrapper = styled.div`
  background: #f4f5fe;
`;
