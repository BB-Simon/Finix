import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <ButtonWrapper
      size={props.size}
      width={props.width}
      btnColor={props.btnColor}
    >
      {props.title ? props.title : "Hello"}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button.attrs((props) => ({
  size: props.size || "45px",
  btnColor: props.btnColor || "#e73c3e",
  width: props.width || null,
}))`
  padding: 12px ${(props) => props.size};
  background: ${(props) => props.btnColor};
  display: block;
  width: ${(props) => props.width};
  position: relative;
  transition: all 0.5s ease-in-out;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: #111111;
    border-radius: 5px;
    z-index: -1;
    transition: all 0.5s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
`;
