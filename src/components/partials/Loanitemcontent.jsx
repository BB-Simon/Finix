import React from "react";
import { Row, Col } from "reactstrap";
import Title from "./Title";
import Subtitle from "./Subtitle";

const Loanitemcontent = () => {
  return (
    <Row xs="1" sm="2" md="2">
      <Col>
        <div>
          <img src="/img/asset-10.png" width="100%" height="100%" alt="" />
        </div>
      </Col>
      <Col>
        <Title title="Personal Loan" size="1.5rem" />
        <Subtitle
          fontSize="1rem"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        />
        <Title size="1.5rem" title="Types of business loan" />
        <ul>
          <li>Secured loans</li>
          <li>Unsecured loans</li>
          <li>Revolving credit facilities</li>
          <li>Business cash advances</li>
        </ul>
        <Title
          size="1.5rem"
          title="Eligibility and criteria for Agricultural loan"
        />
        <Subtitle
          fontSize="1rem"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Title size="1.5rem" title="Agricultural loan guide" />
        <Subtitle
          fontSize="1rem"
          title="Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        />
      </Col>
    </Row>
  );
};

export default Loanitemcontent;
