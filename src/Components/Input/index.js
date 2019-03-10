import React from "react";
import myGymnasts from "../GymnastsData";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      gymnastName: ""
    };
  }
  chooseGymnast = event => {
    this.setState({ value: event.target.value });

    // console.log(event.target.value);
  };

  PressEnter = event => {
    if (event.key === "Enter") {
      this.getGymnastPhoto();
      //this.setState({ gymnastName: myGymnasts[this.state.value] });
    }
  };

  getGymnastPhoto = () => {
    if (
      this.state.value === "1" ||
      this.state.value === "2" ||
      this.state.value === "3" ||
      this.state.value === "4" ||
      this.state.value === "5"
    ) {
      this.setState({ gymnastName: myGymnasts[this.state.value] });
      console.log(this);
    } else {
      alert("Please select a number from 1-5");
    }

    //console.log(this.state.value);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <br />
        <p>Select a number from 1-5</p>
        <input
          className="input"
          type={Number}
          onKeyPress={this.PressEnter}
          onChange={this.chooseGymnast}
        />
        <br />
        <button className="button" onClick={this.getGymnastPhoto}>
          Press me for getting some magic gymnasts!
        </button>
        <div />
        <img src={this.state.gymnastName} />
        <br />
      </div>
    );
  }
}

export default Input;
