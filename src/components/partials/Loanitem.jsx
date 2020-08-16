import React from "react";
import styled from "styled-components";

const Loanitem = ({ img, title }) => {
  return (
    <ImgWrapper>
      <div className="img-wrapper">
        <img src={img} width="45px" height="45px" alt="" />
      </div>
      {title}
    </ImgWrapper>
  );
};

export default Loanitem;

const ImgWrapper = styled.div`
  text-align: center;
  .img-wrapper {
    width: 80px;
    height: 80px;
    margin: auto;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);
  }
`;
