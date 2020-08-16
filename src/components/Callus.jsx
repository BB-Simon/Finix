import React from "react";
import styled from "styled-components";
import Title from "./partials/Title";
import { Container, Row, Col } from "reactstrap";

const Callus = () => {
  return (
    <Container className="my-5 p-5">
      <Wrapper>
        <Row>
          <Col xs="12" sm="12" md="7">
            <Title
              color="#fff"
              size="2.25rem"
              title="We are here to help your business Call to discuss your Solution"
            />
          </Col>
          <Col xs="12" sm="12" md="5" className="border-left">
            <div className="box">
              <div className="img-wapper">
                <img src="/img/phone.svg" width="30px" height="30px" alt="" />
              </div>
              <Title color="#fff" size="2.25rem" title="+1 (514) 312-5678" />
            </div>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Callus;
const Wrapper = styled.div`
  background: #e73c3e;
  padding: 65px 50px;
  border-radius: 5px;
  .row {
    align-items: center;
  }
  .box {
    display: flex;
    align-items: center;
    .img-wapper {
      background: #fff;
      width: 70px;
      height: 70px;
      margin-right: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }
`;
