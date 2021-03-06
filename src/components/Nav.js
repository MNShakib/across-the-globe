import React, { useState, useRef } from "react";
//images
import union from "../images/Union.png";
import user3 from "../images/user3.png";
//style
import styled from "styled-components";
//Modal
import Modal from "../components/Modal";

const Nav = ({ loggingHandler }) => {
  const [modal, setModal] = useState(false);
  const [logged, setLogged] = useState(false);
  const [tool, setTool] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  const logHandler = () => {
    setLogged(!logged);
    loggingHandler();
  };

  return (
    <Navbar>
      <ul>
        <li className="logo">
          <p className="atg">ATG.</p>
          <p className="world">
            W<img src={union} alt="union" />
            RLD
          </p>
        </li>
        <li className="search">
          <p>
            <i class="fas fa-search"></i>Search for your favorite groups int ATG
          </p>
        </li>
        <li className="acc">
          {logged ? (
            <span className="user">
              <img src={user3} />
              &nbsp;Siddharth Goyal&nbsp;
            </span>
          ) : (
            <p onClick={modalHandler}>
              Create account. <a>It's free! &nbsp;</a>
            </p>
          )}
          <p className="down">
            <i
              className={`${tool ? "fas fa-sort-up" : "fas fa-sort-down"}`}
              style={{ color: "black" }}
              onClick={() => setTool(!tool)}
            ></i>
            <span
              className="tool tooltiptext"
              style={{ display: `${tool ? "block" : "none"}` }}
              onClick={logHandler}
            >
              {logged ? "LogOut" : "Direct Login"}
            </span>
          </p>
        </li>
      </ul>
      {modal && <Modal modal={modalHandler} />}
    </Navbar>
  );
};

const Navbar = styled.nav`
  min-height: 72px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 4rem 0.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);
  p {
    padding: 5px 0;
    font-size: 22px;
  }
  ul {
    width: 100%;
  }
  .atg {
    color: #27a365;
  }
  .world {
    color: #5c5d5d;
    font-size: 22px;
  }
  .logo,
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
  .search {
    background: #f2f2f2;
    border-radius: 21px;

    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: #5c5c5c;
      padding: 5px 15px;
    }
    i {
      padding-right: 10px;
    }
  }
  .acc {
    display: flex;
    flex-direction: row;
    .user {
      display: flex;
      align-items: center;
      img {
        width: 36px;
        height: 36px;
      }
      font-size: 14px;
      color: #000000;
      font-weight: normal;
    }
    .tooltiptext {
      display: none;
      width: 120px;
      border: 1px solid grey;
      color: black;
      text-align: center;
      border-radius: 6px;
      padding: 3px 0;
      cursor: pointer;
      background: #ffffff;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16),
        0px 0px 2px rgba(0, 0, 0, 0.08);
      position: absolute;
      font-weight: normal;
      z-index: 1;
      top: 50px;
      right: 5%;
    }
    .down {
      cursor: pointer;
    }
  }
  .acc > p {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #2e2e2e;
    cursor: pointer;
    a {
      color: blue;
      cursor: pointer;
    }
  }
  @media (max-width: 699px) {
    .search {
      display: none;
    }
    padding: 0.5rem 1rem 0.5rem;
  }
`;

export default Nav;
