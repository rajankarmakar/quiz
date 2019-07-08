import React, { Component } from "react";

class Answer extends Component {
  render() {
    return (
      <button
        className="btn btn-secondary btn-lg m-3"
        onClick={this.props.answerHandeler}
      >
        {this.props.answers}
      </button>
    );
  }
}
export default Answer;
