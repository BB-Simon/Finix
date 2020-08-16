import React from "react";
import { Container } from "reactstrap";
import Minititle from "./partials/Minititle";
import Title from "./partials/Title";
import Subtitle from "./partials/Subtitle";
import Newsletteritem from "./partials/Newsletteritem";

const Newsletter = () => {
  return (
    <Container className="my-5 p-5">
      <div className="text-center">
        <Minititle title="Recent news" />
        <Title size="2.25rem" title="Success story posts" />
        <Subtitle
          marginLorR={true}
          width="570px"
          fontSize="1rem"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <Newsletteritem />
    </Container>
  );
};

export default Newsletter;
