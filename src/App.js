import React from "react";
// import Main from "./Pages/Main";
import GlobalStyle from "./GlobalStyle";
import Nav from "./components/Nav";
import Computer from "./components/Computer";
import Outline from "./components/Outline";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Computer />
      <Outline />
      <Posts />
    </div>
  );
}

export default App;
