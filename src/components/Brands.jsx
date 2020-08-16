import React, { Component } from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";

class Brands extends Component {
  state = {
    infinite: true,
    slidesToShow: 5,
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
    const brands = [
      {
        id: 1,
        img: "/img/asset-2.png",
      },
      {
        id: 2,
        img: "/img/asset-3.png",
      },
      {
        id: 3,
        img: "/img/asset-4.png",
      },
      {
        id: 4,
        img: "/img/asset-5.png",
      },
      {
        id: 5,
        img: "/img/asset-5.png",
      },
      {
        id: 6,
        img: "/img/asset-22.png",
      },
    ];
    return (
      <Container className="my-5 p-5 overflow-hidden">
        <Slider {...this.state}>
          {brands.map((item) => (
            <img
              className="p-3 mx-4"
              width="100%"
              height="60px"
              src={item.img}
              alt=""
            />
          ))}
        </Slider>
      </Container>
    );
  }
}

export default Brands;
