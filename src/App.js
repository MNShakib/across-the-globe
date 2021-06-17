import React, { useState } from "react";
// import Main from "./Pages/Main";
import GlobalStyle from "./GlobalStyle";
import Nav from "./components/Nav";
import Computer from "./components/Computer";
import Outline from "./components/Outline";
import Posts from "./components/Posts";

function App() {
  const [logging, setLogging] = useState(false);

  const loggingHandler = () => {
    setLogging(!logging);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Nav loggingHandler={loggingHandler} />
      <Computer />
      <Outline />
      <Posts log={logging} />
    </div>
  );
}

export default App;
