import React from "react";
import { Row, Col } from "reactstrap";
import Subtitle from "./Subtitle";
import Title from "./Title";
const Newsletteritem = () => {
  return (
    <div>
      <Row xs="1" sm="2" md="3">
        <Col>
          <div>
            <img src="/img/asset-16.jpeg" width="100%" height="100%" alt="" />
          </div>
          <Subtitle title="July 05, 2020" fontSize="1rem" />
          <Title
            size="1.25rem"
            title="Financing loans available to small businesses"
          />
          <Title size="1rem" weight="300" title="Read more" />
        </Col>
        <Col>
          <div>
            <img src="/img/asset-17.jpeg" width="100%" height="100%" alt="" />
          </div>
          <Subtitle title="July 04, 2020" fontSize="1rem" />
          <Title
            size="1.25rem"
            title="5 Ways you can prepare your business for success"
          />
          <Title size="1rem" weight="300" title="Read more" />
        </Col>
        <Col>
          <div>
            <img src="/img/asset-18.jpeg" width="100%" height="100%" alt="" />
          </div>
          <Subtitle title="July 03, 2020" fontSize="1rem" />
          <Title
            size="1.25rem"
            title="Tips for saving money and better guide for investment"
          />
          <Title size="1rem" weight="300" title="Read more" />
        </Col>
      </Row>
    </div>
  );
};

export default Newsletteritem;
