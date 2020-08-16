import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Row, Col } from "reactstrap";
import Subtitle from "./Subtitle";
import Title from "./Title";

class Testimonialslider extends Component {
  state = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  render() {
    return (
      <Slider {...this.state}>
        <div>
          <Row xs="1" sm="1" md="2">
            <Col>
              <Subtitle
                fontSize="1.25rem"
                title="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.”"
              />
              <Title size="1rem" weight="300" title="Debra C. Cowen" />
              <Subtitle title="Founder" />
            </Col>
            <Col>
              <ImgWrapper>
                <img src="/img/asset-11.png" alt="" />
                <div className="icon">
                  <img
                    src="/img/quotemarks-right.svg"
                    width="50px"
                    height="50px"
                    alt=""
                  />
                </div>
              </ImgWrapper>
            </Col>
          </Row>
        </div>
        <div>
          <Row xs="1" sm="2" md="2">
            <Col>
              <Subtitle
                fontSize="1.25rem"
                title="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.”"
              />
              <Title size="1rem" weight="300" title="Debra C. Cowen" />
              <Subtitle title="Founder" />
            </Col>
            <Col>
              <ImgWrapper>
                <img src="/img/asset-11.png" alt="" />
                <div className="icon">
                  <img
                    src="/img/quotemarks-right.svg"
                    width="50px"
                    height="50px"
                    alt=""
                  />
                </div>
              </ImgWrapper>
            </Col>
          </Row>
        </div>
      </Slider>
    );
  }
}

export default Testimonialslider;

const ImgWrapper = styled.div`
  position: relative;
  .icon {
    width: 80px;
    height: 80px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    left: 75px;
    bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
