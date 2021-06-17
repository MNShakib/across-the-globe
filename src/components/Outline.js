import React, { useState } from "react";
import styled from "styled-components";
import vector from "../images/Vector.png";

const Outline = () => {
  const [group, setGroup] = useState(true);

  const groupHandler = () => {
    setGroup(!group);
  };
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
          Write Post &nbsp;<i class="fas fa-sort-down"></i>
        </li>
        {group ? (
          <li className="join" onClick={groupHandler}>
            <img src={vector} /> Join Group
          </li>
        ) : (
          <li className="leave" onClick={groupHandler}>
            <i class="fas fa-sign-out-alt"></i> Leave Group
          </li>
        )}
      </ul>
      <ul className="post">
        <li>Post (368)</li>
        <li>
          <li className="leave" onClick={groupHandler}>
            Filter: All &nbsp;&nbsp;{" "}
            <i class="fas fa-sort-down" style={{ color: "black" }}></i>
          </li>
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
  .post {
    width: 100%;
    display: none;
    padding: 0 1rem;
    font-size: 16px;
    font-weight: bold;
  }
  .write,
  .join,
  .leave {
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
    transition: all 0.2s ease;
  }
  .leave {
    width: 125px;
    height: 36px;
    margin-left: 20px;
    color: #6a6a6b;
    background: #ffffff;
    border: 0.8px solid #989899;
    box-sizing: border-box;
    border-radius: 4px;
    transition: all 0.2s ease;
  }
  @media (max-width: 859px) {
    padding: 1rem 5rem 0 5rem;
  }
  @media (max-width: 699px) {
    padding: 1rem 1rem 0 1rem;
  }
  @media (max-width: 599px) {
    .cred {
      display: none;
    }
    .post {
      display: flex;
      justify-content: space-between;
      color: black;
    }
  }
  @media (max-width: 399px) {
    padding: 1rem 0rem 0 0rem;
  }
`;

export default Outline;
