import React from "react";
import { Row, Col } from "reactstrap";
import Title from "./Title";
import Subtitle from "./Subtitle";

const Teaminfo = () => {
  return (
    <Row xs="1" sm="2" md="4">
      <Col>
        <div>
          <img src="/img/asset-12.jpeg" width="100%" height="100%" alt="" />
        </div>
        <Title color="#e73c3e" title="Jerome Le Luel" size="1.25rem" />
        <Subtitle fontSize="1rem" title="Managing Director" />
      </Col>
      <Col>
        <div>
          <img src="/img/asset-13.jpeg" width="100%" height="100%" alt="" />
        </div>
        <Title color="#e73c3e" title="Andrew Learoyd" size="1.25rem" />
        <Subtitle fontSize="1rem" title="Chief Executive Officer" />
      </Col>
      <Col>
        <div>
          <img src="/img/asset-14.jpeg" width="100%" height="100%" alt="" />
        </div>
        <Title color="#e73c3e" title="Harry Nelis" size="1.25rem" />
        <Subtitle fontSize="1rem" title="Technology Officer" />
      </Col>
      <Col>
        <div>
          <img src="/img/asset-15.jpeg" width="100%" height="100%" alt="" />
        </div>
        <Title color="#e73c3e" title="Lucy Vernall" size="1.25rem" />
        <Subtitle fontSize="1rem" title="Chief Financial Officer" />
      </Col>
    </Row>
  );
};

export default Teaminfo;
