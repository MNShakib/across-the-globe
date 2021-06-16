import React from "react";
import styled from "styled-components";
import vector from "../images/Vector.png";

const Outline = () => {
  return (
    <StyledOutline>
      <ul className="cred">
        <li className="allPost">All Posts(32)</li>
        <li>Article</li>
        <li>Event</li>
        <li>Education</li>
        <li>Job</li>
      </ul>
      <ul className="postGroup">
        <li className="write">
          Write Post <i class="fas fa-sort-down"></i>
        </li>
        <li className="join">
          <img src={vector} /> Join Group
        </li>
      </ul>
    </StyledOutline>
  );
};

const StyledOutline = styled.div`
  padding: 1rem 10rem 0 10rem;
  display: flex;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    height: 100%;
    height: 50px;
  }
  .cred {
    width: 70%;
    border-bottom: 1px solid #e0e0e0;
    li {
      margin-left: 20px;
      color: #8a8a8a;
    }
    @media (max-width: 699px) {
      width: 100%;
    }
  }
  .allPost {
    margin-left: 0 !important;
    color: black !important;
  }
  .postGroup {
    border-bottom: 1px solid #e0e0e0;
    width: 30%;
    padding-left: 30px;
    @media (max-width: 699px) {
      display: none;
    }
  }
  .write,
  .join {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .write {
    margin-left: auto;
    width: 133px;
    height: 36px;
    background: #edeef0;
    border-radius: 4px;
  }
  .join {
    width: 125px;
    height: 36px;
    margin-left: 20px;
    border-radius: 4px;
    background: #2f6ce5;
  }
  @media (max-width: 859px) {
    padding: 1rem 5rem 0 5rem;
  }
  @media (max-width: 699px) {
    padding: 1rem 1rem 0 1rem;
  }
  @media (max-width: 399px) {
    padding: 1rem 0rem 0 0rem;
  }
`;

export default Outline;
