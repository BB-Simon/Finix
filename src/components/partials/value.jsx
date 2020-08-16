import React from "react";
import styled from "styled-components";

const value = (props) => {
  return (
    <Wrapper>
      <span>
        <img src={props.img} width="100%" height="100%" alt="" />
      </span>
      <div style={{ paddingLeft: "65px" }}>
        {props.title}
        {props.subtitle}
      </div>
    </Wrapper>
  );
};

export default value;

const Wrapper = styled.div`
  position: relative;
  span {
    display: inline-block;
    height: 3.15rem;
    width: 3.15rem;
    line-height: 40px;
    position: absolute;
    left: 0;
    top: 0;
  }
`;
