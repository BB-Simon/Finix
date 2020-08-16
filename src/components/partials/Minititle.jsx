import React from "react";
import styled from "styled-components";

const Minititle = (props) => {
  return <MinititleWrapper>{props.title}</MinititleWrapper>;
};

export default Minititle;

const MinititleWrapper = styled.p`
  font-size: 1.1rem;
  color: #e73c3e;
`;
