import React from "react";
import styled from "styled-components";

const Subtitle = (props) => {
  return (
    <ParagraphWrapper
      fontSize={props.fontSize}
      width={props.width}
      marginLorR={props.marginLorR}
    >
      {props.title}
    </ParagraphWrapper>
  );
};

export default Subtitle;
const ParagraphWrapper = styled.p.attrs((props) => ({
  fontSize: props.fontSize || "1.15rem",
  width: props.width || null,
  marginLorR: props.marginLorR,
}))`
  font-size: ${(props) => props.fontSize};
  color: #606060;
  margin-bottom: 1.87rem;
  max-width: ${(props) => props.width};
  margin-left: ${(props) => (props.marginLorR ? "auto" : null)};
  margin-right: ${(props) => (props.marginLorR ? "auto" : null)};
`;
