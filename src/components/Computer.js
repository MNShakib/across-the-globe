import React from "react";
import styled from "styled-components";
import computer from "../images/computer.jpg";

const Computer = () => {
  return (
    <StyledComp>
      <div>
        <h1>Computer Engineering</h1>
        <h3>142,765 Computer Engineers follow this</h3>
      </div>
    </StyledComp>
  );
};

const StyledComp = styled.div`
  height: 440px;
  background-image: url(${computer});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.45) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
  h1 {
    font-size: 36px;
    line-height: 47px;
    color: #ffffff;
    margin-top: auto;
    padding-left: 80px;
  }
  h3 {
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    padding-left: 80px;
    padding-bottom: 60px;
  }
`;

export default Computer;
