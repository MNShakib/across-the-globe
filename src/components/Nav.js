import React, { useState, useRef } from "react";
//images
import union from "../images/Union.png";
//style
import styled from "styled-components";
//Modal
import Modal from "../components/Modal";

const Nav = () => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
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
        <li className="acc" onClick={modalHandler}>
          <p>
            Create account.{" "}
            <a>
              It's free!{" "}
              <i class="fas fa-sort-down" style={{ color: "black" }}></i>
            </a>
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
    i {
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
