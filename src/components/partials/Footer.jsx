import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "./Subtitle";
import Title from "./Title";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container className="mt-5 p-5">
        <Row xs="1" sm="2" md="4">
          <Col>
            <div>
              <img src="/img/asset-19.png" alt="" />
            </div>
            <Subtitle
              fontSize="1rem"
              title="Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <ul className="icon">
              <li>Follow us:</li>
              <li>
                <i class="fa fa-twitter"></i>
              </li>
              <li>
                <i class="fa fa-facebook"></i>
              </li>
              <li>
                <i class="fa fa-instagram"></i>
              </li>
              <li>
                <i class="fa fa-linkedin"></i>
              </li>
            </ul>
          </Col>
          <Col>
            <Title color="#fff" size="1rem" title="Quick Links" />
            <hr />
            <ul>
              <li>About</li>
              <li>Our Performance</li>
              <li>Help(FAQ)</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col>
            <Title color="#fff" size="1rem" title="Other Resources" />
            <hr />
            <ul>
              <li>Support</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Business Loan</li>
              <li>Loan Service</li>
            </ul>
          </Col>
          <Col>
            <Title color="#fff" size="1rem" title="Contact Us" />
            <hr />
            <ul>
              <li>
                <i class="fas fa-map-marker-alt"></i> 6890 Blvd, The Bronx, NY
                1058 New York, USA
              </li>
              <li>
                <i class="far fa-envelope"></i> simon.chowdery@gmail.com
              </li>
              <li>
                <i class="fas fa-phone-alt"></i> +1 (514) 312-5678 +1 (514)
                312-5678
              </li>
            </ul>
          </Col>
        </Row>
        <div className="my-4 py-3 border-top text-center">
          <p>Copyright @2020 Finix. Designed By EnvyTheme</p>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background: #111111;
  color: #fff;
  .icon {
    display: flex;
    li {
      margin: 0 10px;
    }
  }
`;
