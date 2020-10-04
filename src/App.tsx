import React from "react";
import styled from "styled-components";

import logo from "./logo.svg";
import "./App.scss";

const Title = styled.div``;

function App() {
  return (
    <Title className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Title>
  );
}

export default App;
