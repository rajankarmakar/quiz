import React, { Component } from "react";

class Quiz extends Component {
  render() {
    return <h1 className="text-center">{this.props.question} </h1>;
  }
}
export default Quiz;
