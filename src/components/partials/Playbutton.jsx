import React from "react";
import styled from "styled-components";

const Playbutton = () => {
  return (
    <Wrapper>
      <img src="/img/play-button.svg" alt="" />
    </Wrapper>
  );
};

export default Playbutton;

const Wrapper = styled.div`
  background: #fff;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    width: 80px;
    height: 80px;
    background: #e73c3e;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    opacity: 0;
    animation: animate 1.6s ease-out 1s infinite;
  }
  @keyframes animate {
    0%,
    35% {
      transform: scale(0);
      opacity: 1;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.8;
    }
    100% {
      opacity: 0;
      transform: scale(2);
    }
  }
  img {
    width: 70%;
    height: 70%;
  }
`;
