import React, { Component } from "react";
import logo from "./gymnast.gif";
import Input from "../Input";

// replicate the same input field as in the previous example
// have an input field, a button and a div asking what gymnasts
// would they like to be displayed
// input field will take numbers between 1-10
// button will have an onclik request
// the gymnast photos will be displayed once the button is clicked
// each gymnast will have an ID between 1-10

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input />
        </header>
      </div>
    );
  }
}

export default App;
