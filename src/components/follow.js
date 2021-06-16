import React, { useState } from "react";
import styled from "styled-components";

const Follow = ({ followImage, followName }) => {
  const [follow, setFollow] = useState("FOLLOW");
  const clickHandler = () => {
    if (follow == "FOLLOWED") {
      setFollow("FOLLOW");
    } else {
      setFollow("FOLLOWED");
    }
  };

  return (
    <StyledFollow>
      <img src={followImage} alt="" /> {followName}
      <button
        onClick={clickHandler}
        style={{
          backgroundColor: `${follow == "FOLLOW" ? "#EDEEF0" : "black"}`,
          color: `${follow == "FOLLOW" ? "black" : "#EDEEF0"}`,
        }}
      >
        {follow}
      </button>
    </StyledFollow>
  );
};

const StyledFollow = styled.h3`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  display: flex;
  align-items: center;
  margin-top: 20px;
  img {
    padding-right: 0.5rem;
  }
  button {
    width: 90px;
    height: 28px;
    left: 1175px;
    top: 449px;
    margin-left: auto;
    background: #edeef0;
    border-radius: 14px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  button:hover {
    background: #bfc0c0;
  }

  @media (max-width: 699px) {
    width: 0%;
    display: none;
  }
`;
export default Follow;
