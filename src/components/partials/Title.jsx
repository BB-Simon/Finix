import React from "react";
import styled from "styled-components";

const Title = (props) => {
  return (
    <TitleWrapper
      size={props.size}
      weight={props.weight}
      color={props.color}
      marginBottom={props.marginBottom}
    >
      {props.title}
    </TitleWrapper>
  );
};

export default Title;

const TitleWrapper = styled.h1.attrs((props) => ({
  size: props.size || "4.2rem",
  weight: props.weight || "500",
  color: props.color || "#111111",
  marginBottom: props.marginBottom || "16px",
}))`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  margin: 10px 0px ${(props) => props.marginBottom};
`;
