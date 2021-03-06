import React, { useState } from "react";
import styled from "styled-components";
import bag from "../images/bag.png";

const Post = ({
  postImage,
  userImage,
  userName,
  postType,
  BigText,
  Company,
  City = "",
  additional = "",
}) => {
  const [toolTip, setToolTip] = useState(false);

  return (
    <StyledPost>
      {postImage && <img className="image" src={postImage} alt="post" />}
      <p>
        <img src={postType} alt="type" />
        {BigText && (
          <span>
            <h3>{BigText}</h3>
            <span className={`${toolTip ? "toolBtn box" : "box"}`}>
              <i
                className="fas fa-ellipsis-h"
                onClick={() => setToolTip(!toolTip)}
              ></i>
              <span
                className="tooltiptext"
                style={{ display: `${toolTip ? "flex" : "none"}` }}
              >
                <a href="#">Edit</a>
                <a href="#">Report</a>
                <a href="#">About</a>
              </span>
            </span>
          </span>
        )}
        {additional.length > 4 ? (
          <h6>{additional}</h6>
        ) : (
          <>
            <div className="location">
              {additional == "Date" ? (
                <h3>
                  <i class="fas fa-calendar-day"></i> Fri, 12 Oct, 2018
                </h3>
              ) : (
                <h3>
                  <img src={bag} alt="" /> {Company}
                </h3>
              )}

              <h3 className="map">
                <i class="fas fa-map-marker-alt"></i> {City}, India
              </h3>
            </div>
            {additional == "Date" ? (
              <div className="tap">Visit Website</div>
            ) : (
              <div className="tap green">Apply on Timesjobs</div>
            )}
          </>
        )}
      </p>
      <div className="user">
        <span>
          <img src={userImage} />
          {userName}
        </span>
        <span className="views">
          <i class="far fa-eye"></i>
          <span className="share">1.4k views</span>
          <span className="alt">
            <i class="fas fa-share-alt"></i>
          </span>
        </span>
      </div>
    </StyledPost>
  );
};

const StyledPost = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 30px;
  .image {
    width: 100%;
    height: 220px;
  }
  p {
    padding: 0.3rem 1rem;
    img {
      height: 16px;
    }
    span {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      i {
        color: black;
      }
      .box {
        width: 36px;
        height: 32px;
        position: relative;
        transition: all 0.5s ease;
        .tooltiptext {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0.5rem;
          width: 120px;
          background: #ffffff;
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16),
            0px 0px 2px rgba(0, 0, 0, 0.08);
          color: #fff;
          border-radius: 6px;
          position: absolute;
          z-index: 1;
          top: 30px;
          right: 110%;
          a {
            color: black;
            text-decoration: none;
            display: block;
            font-size: 14px;
            font-weight: lighter;
          }
        }
      }

      .box:hover,
      .toolBtn {
        border-radius: 4px;
        background-color: #bfc0c0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    h3 {
      font-size: 24px;
      color: black;
    }
    h6 {
      margin-top: 10px;
      font-size: 15px;
      font-weight: 400;
      line-height: 134.17%;
      color: #5c5c5c;
    }
  }
  .location {
    display: flex;
    margin-top: 7px;
    h3 {
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
    }
    .map {
      margin-left: 100px;
    }
  }
  .tap {
    text-align: center;
    font-weight: 600;
    margin-top: 15px;
    font-size: 14px;
    line-height: 0.9cm;
    color: #e56135;
    background: #ffffff;
    border: 0.7px solid #a9aeb8;
    box-sizing: border-box;
    border-radius: 8px;
  }
  .green {
    color: green;
  }
  .user {
    padding: 0.3rem 1rem;
    img {
      padding-right: 0.5rem;
    }
  }
  .user,
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000000;
  }
  .views {
    color: #525252 !important;
    span {
      color: #525252;
    }
  }
  .share {
    padding-right: 2rem;
  }
  .alt {
    width: 42px;
    height: 36px;
    background-color: #edeef0;
    border-radius: 2px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    transition: all 0.5s ease;
    align-items: center;
  }
  .alt:hover {
    background: #bfc0c0;
  }
`;

export default Post;
