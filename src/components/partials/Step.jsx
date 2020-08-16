import React from "react";
import styled from "styled-components";

const Step = (props) => {
  console.log(props.line);
  return (
    <Wrapper line={props.line}>
      <span>{props.step}</span>
      <div style={{ paddingLeft: "65px" }}>
        {props.title}
        {props.subtitle}
      </div>
    </Wrapper>
  );
};

export default Step;

const Wrapper = styled.div.attrs((props) => ({
  line: props.line,
}))`
  position: relative;
  span {
    display: inline-block;
    height: 2.5rem;
    width: 2.5rem;
    line-height: 40px;
    background-color: #f9fafb;
    border: 1px solid #e73c3e;
    text-align: center;
    font-size: 1.5rem;
    color: #e73c3e;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
  }
  &::before {
    ${(props) =>
      props.line
        ? `width: 1px;
    height: 140%;
    background-color: #e73c3e;
    content: "";
    "z-index":-1 ;
    position: absolute;
    left: 20px;
    top: 0;`
        : null}
  }
`;
