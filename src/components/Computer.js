import React from "react";
import styled from "styled-components";
import computer from "../images/computer.jpg";

const Computer = () => {
  return (
    <StyledComp>
      <div>
        <span className="mobJoin">
          <i class="fas fa-arrow-left"></i> <p>Join Group</p>
        </span>
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
    padding-left: 7%;
    @media (max-width: 599px) {
      font-size: 24px;
    }
  }
  .mobJoin {
    display: none;
    justify-content: space-between;
    padding: 2rem;
    color: white;
    p {
      cursor: pointer;
      width: 100px;
      text-align: center;
      border: 0.8px solid #ffffff;
      box-sizing: border-box;
      border-radius: 4px;
      font-weight: 500;
      font-size: 12px;
      line-height: 0.9cm;
      letter-spacing: 0.05cm;
      padding: 0;
      color: white;
    }
    i {
      cursor: pointer;
    }
  }
  h3 {
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    padding-left: 7%;
    padding-bottom: 80px;
    @media (max-width: 599px) {
      font-size: 14px;
    }
  }

  @media (max-width: 499px) {
    .mobJoin {
      display: flex;
    }
  }
`;

export default Computer;
