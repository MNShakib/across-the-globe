import React, { useState, useRef } from "react";
import styled from "styled-components";
//PostImage
import post0 from "../images/post0.png";
import post1 from "../images/post1.png";
import post2 from "../images/post2.png";
//UserImage
import user0 from "../images/user0.png";
import user1 from "../images/user1.png";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";
//UserImage
import follow0 from "../images/follow0.png";
import follow1 from "../images/follow1.png";
import follow2 from "../images/follow2.png";
import follow3 from "../images/follow3.png";
//PostType
import article from "../images/Article.png";
import job from "../images/Job.png";
import education from "../images/Education.png";
import meetup from "../images/Meetup.png";
//image
import recommended from "../images/recommended.png";
//Post
import Post from "../components/Post";

const Posts = () => {
  const [focused, setFocused] = useState(true);
  const [follow, setFollow] = useState("FOLLOW");
  const location = useRef();

  const onFocus = () => {
    setFocused(!focused);
  };
  const onBlur = () => {
    setFocused(!focused);
  };

  const focusHandler = () => {
    location.current.focus();
  };

  const blurHandler = () => {
    location.current.blur();
  };

  const clickHandler = () => {
    if (follow == "FOLLOWED") {
      setFollow("FOLLOW");
    } else {
      setFollow("FOLLOWED");
    }
  };

  return (
    <StyledPosts>
      <StyledPost>
        <Post
          postImage={post0}
          userImage={user0}
          userName="Sarthak Kamra"
          postType={article}
          BigText="What if famous brand had regular fonts? Meet RegularBrands!"
          additional="I've worked in UX for the better part of a decade. From now on , I plan to rei..."
        />
        <Post
          postImage={post1}
          userImage={user1}
          userName="Sarah West"
          postType={education}
          BigText="Tax Benefits for Investment under National Pension Scheme launched by Government"
          additional="I've worked in UX for the better part of a decade. From now on , I plan to rei..."
        />
        <Post
          postImage={post2}
          userImage={user2}
          userName="Ronal Jones"
          postType={meetup}
          additional="Date"
        />
        <Post
          postImage=""
          userImage={user3}
          userName="Joseph Gray"
          postType={job}
          Company="Innovacer Analytics Private Ltd."
          BigText="Software Developer"
        />
      </StyledPost>
      <StyledLocation>
        <Contain>
          <i className="point fas fa-map-marker-alt"></i>
          <input
            type="text"
            ref={location}
            onFocus={onFocus}
            onBlur={onBlur}
            className="place"
            placeholder="Noida, India"
          ></input>
          {focused ? (
            <i className="pen fas fa-pen" onClick={focusHandler}></i>
          ) : (
            <i className="pen fas fa-times" onClick={blurHandler}></i>
          )}
        </Contain>
        <h6>
          <i class="fas fa-exclamation-circle"></i> Your location will help us
          serve better and extend a personalised experience
        </h6>
        <span className="groups">
          <h4>
            <img src={recommended} alt="" /> RECOMMENDED GROUPS
          </h4>
          <h3>
            <img src={follow0} alt="" /> Leisure
            <button onClick={clickHandler}>{follow}</button>
          </h3>
          <h3>
            <img src={follow1} alt="" /> Activism
            <button onClick={clickHandler}>{follow}</button>
          </h3>
          <h3>
            <img src={follow2} alt="" /> MBA
            <button onClick={clickHandler}>{follow}</button>
          </h3>
          <h3>
            <img src={follow3} alt="" />
            Philosophy
            <button onClick={clickHandler}>{follow}</button>
          </h3>
        </span>
      </StyledLocation>
    </StyledPosts>
  );
};

const StyledPosts = styled.div`
  width: 100%;
  padding: 1rem 10rem 0 10rem;
  display: flex;
  justify-content: space-between;
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
const StyledPost = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  @media (max-width: 699px) {
    width: 100%;
  }
`;
const StyledLocation = styled.div`
  width: 25%;
  color: #000000;

  input {
    width: 100%;
    border: 0;
    border-bottom: 0.4px solid #b8b8b8;
    padding: 0;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    background: none;
    border-radius: 0;
    color: black;
    transition: all 0.15s ease;
    &:focus {
      outline: none;
    }
  }
  h6 {
    margin-top: 40px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: #000000;

    opacity: 0.5;
  }

  .groups {
    h4 {
      margin-top: 80px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    h3,
    h4 {
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      color: #000000;
    }
    h3 {
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
    }
  }

  @media (max-width: 699px) {
    width: 0%;
    display: none;
  }
`;

const Contain = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.4px solid #b8b8b8;
    color: #000000;
  }
  .point {
    padding-right: 6px;
  }
  .pen {
    padding-left: 8px;
    cursor: pointer !important;
  }
`;

export default Posts;
