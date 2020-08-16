import React from "react";
import Title from "./partials/Title";
import Subtitle from "./partials/Subtitle";
import { Container, Row, Col } from "reactstrap";
import Value from "./partials/value";

const Values = () => {
  return (
    <Container className="my-5 p-5">
      <Row xs="1" sm="2" md="2">
        <Col>
          <Title size="2.25rem" title="Our company values" />
          <Value
            img="/img/idea.svg"
            title={<Title size="1.5rem" title="Innovative" />}
            subtitle={
              <Subtitle
                fontSize="1rem"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            }
          />
          <Value
            img="/img/talent.svg"
            title={<Title size="1.5rem" title="Talent" />}
            subtitle={
              <Subtitle
                fontSize="1rem"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            }
          />
          <Value
            img="/img/rent.svg"
            title={<Title size="1.5rem" title="Enabling" />}
            subtitle={
              <Subtitle
                fontSize="1rem"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            }
          />
          <Value
            img="/img/responsibility.svg"
            title={<Title size="1.5rem" title="Commercially responsible" />}
            subtitle={
              <Subtitle
                fontSize="1rem"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            }
          />
        </Col>
        <Col>
          <div>
            <img src="/img/asset-9.png" width="100%" height="100%" alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Values;
