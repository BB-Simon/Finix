import React from "react";
import styled from "styled-components";

const Processbox = ({ img, title, subtitle }) => {
  return (
    <Wrapper>
      <div className="icon-wrapper">
        <img src={img} alt="" />
      </div>
      {title}
      {subtitle}
    </Wrapper>
  );
};

export default Processbox;

const Wrapper = styled.div`
  background: #fff;
  padding: 1.9rem;
  margin: 1.9rem 0;
  position: relative;
  text-align: center;
  overflow: hidden;
  &::before {
    content: "";
    width: 95%;
    height: 250px;
    background: #e73c3e;
    position: absolute;
    left: 7px;
    top: -48%;
    border-radius: 50%;
    opacity: 0.2;
  }

  .icon-wrapper {
    background: #fff;
    width: 90px;
    height: 90px;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
