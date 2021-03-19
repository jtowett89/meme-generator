/** @format */

import React, { Component } from "react";
import "./css/style.css";
import MyHeader from "./components/Header";
import MyMeme from "./components/MemeGenerator";
import MyFooter from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <MyHeader />
        <MyMeme />
        <MyFooter />
      </div>
    );
  }
}

export default App;
