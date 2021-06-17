import React, { useState } from "react";
//style
import styled from "styled-components";
//image
import log from "../images/log.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";

const Modal = ({ modal }) => {
  const [signIn, setSignIn] = useState(true);

  const closeModal = (e) => {
    if (e.target.id === "modal") {
      modal();
    }
  };

  const signInUpHandler = () => {
    setSignIn(!signIn);
  };
  return (
    <StyledModal>
      <div id="myModal" class="modal" id="modal" onClick={closeModal}>
        <div className="modal-content">
          <span className="close" onClick={modal}>
            &times;
          </span>
          <h5 className="learn">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now
          </h5>
          <Log>
            <span className="inpForm">
              <form>
                <h1>{signIn ? "Create Account" : "Sign In"}</h1>
                {signIn && (
                  <span className="name">
                    <input
                      className="first"
                      type="text"
                      placeholder="First Name"
                      name="email"
                      required
                    />
                    <input
                      className="last"
                      type="text"
                      placeholder="Last Name"
                      name="email"
                      required
                    />
                  </span>
                )}
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  required
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                />

                {signIn && (
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="psw-repeat"
                    required
                  />
                )}

                <div class="mobButton">
                  <button type="submit" className="signupbtn">
                    {signIn ? "Create Account" : "Sign In"}
                  </button>
                  <h3 className="mobSign" onClick={signInUpHandler}>
                    {signIn ? "or, Sign In" : "or, Create Account"}
                  </h3>
                </div>
              </form>
              <button className="direct">
                <img src={facebook} />
                Sign Up With Facebook
              </button>
              <button className="direct">
                <img src={google} /> Sign Up With Google
              </button>

              {signIn && (
                <h6 className="mobileOnly">
                  By signing up, you agree to our Terms & condition, Privacy
                  policy{" "}
                </h6>
              )}
            </span>
            <span className="photo">
              <a onClick={signInUpHandler}>
                {signIn ? (
                  <h3>
                    Already have account?
                    <span style={{ color: "blue" }}>Sign In</span>
                  </h3>
                ) : (
                  <h3>
                    Does not have account yet?
                    <span style={{ color: "blue" }}>Create new for free!</span>
                  </h3>
                )}
              </a>
              <img src={log} />
              {signIn && (
                <h6>
                  By signing up, you agree to our Terms & condition, Privacy
                  policy{" "}
                </h6>
              )}
            </span>
          </Log>
        </div>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    @media (max-width: 699px) {
      align-items: flex-end;
    }
  }

  /* Modal Content */
  .modal-content {
    position: absolute;
    background-color: #fefefe;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    width: 65%;
    @media (max-width: 859px) {
      width: 80%;
    }
    @media (max-width: 699px) {
      width: 100%;
      .learn,
      .photo {
        display: none;
      }
      .close {
        right: 0;
        top: auto;
      }
      .mobButton {
        display: flex;
        justify-content: space-between;
      }
      .mobSign {
        color: #495057;
        display: inline-block;
        display: flex;
        align-items: center;
      }
      .signupbtn {
        width: 45%;
      }
      .inpForm {
        width: 90%;
      }
      .mobileOnly {
        display: block;
        padding-right: 10px;
        font-size: 10px;
        line-height: 16px;
        margin-top: 15px;
        text-align: center;
        letter-spacing: -0.008em;
        color: #000000;
        opacity: 0.6;
      }
      margin-top: auto;
    }
    h5 {
      background: #effff4;
      height: 30px;
      display: flex;
      align-items: center;
      border-radius: 8px 8px 0px 0px;
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      text-align: center;
      color: #008a45;
      padding-left: 5px;
    }
  }

  .close {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaaaaa;
    width: 21px;
    height: 21px;
    background: #ffffff;
    border-radius: 50%;
    font-size: 20px;
    font-weight: 400;
    position: absolute;
    right: 0;
    top: -30px;
    margin-left: auto;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Log = styled.div`
  width: 100%;
  display: flex;

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 15px;
    /* margin: 5px 0 22px 0; */
    display: inline-block;
    border: 1px solid #d9d9db;

    background: #f1f1f1;
  }

  input[type="text"]:focus,
  input[type="password"]:focus {
    background-color: #ddd;
    outline: none;
  }

  .inpForm {
    display: flex;
    width: 55%;
    justify-content: center;
    padding: 10px 0 20px 40px;
    align-items: center;
    flex-direction: column;
    color: black;
    button {
      width: 100%;
      height: 40px;
      margin-top: 15px;
      border: none;
      font-size: 14px;
      color: white;
      background: #2f6ce5;
      border-radius: 20px;
      cursor: pointer;
    }
    h1 {
      margin: 10px 0 30px 0;
    }
    .direct {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 14px;
      background: #ffffff;
      color: black;
      border: 0.6px solid #d9d9db;
      box-sizing: border-box;
      border-radius: 2px;
    }
  }
  .mobileOnly {
    display: none;
  }

  .name {
    width: 100%;
    display: name;
    flex-direction: row;

    .first {
      width: 50%;
    }
    .last {
      width: 50%;
    }
  }

  .photo {
    padding-top: 20px;
    padding-left: 10px;
    a > h3 {
      padding-right: 10px;
      margin-left: auto;
      font-style: normal;
      margin: 10px 0 50px 0;
      cursor: pointer;
      font-weight: 500;
      font-size: 12px;
      text-align: right;
      color: #3d3d3d;
      span {
        font-size: 12px;
        font-weight: normal;
      }
    }
    img {
      padding-left: 20px;
      margin-bottom: 40px;
    }
    h6 {
      padding-right: 10px;
      font-size: 10px;
      line-height: 16px;
      text-align: right;
      letter-spacing: -0.008em;
      color: #000000;
      opacity: 0.6;
    }
  }
`;

export default Modal;
