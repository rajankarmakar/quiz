import React, { Component } from "react";

class QuizOver extends Component {
  getScore = () => {
    let { result } = this.props;
    let score = 0;
    if (result[0] === "YES") {
      score += 1;
    }
    if (result[1] === "YES") {
      score += 1;
    }
    if (result[2] === "YES") {
      score += 1;
    }
    console.log(result[0], result[1], result[2]);
    return score;
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-primary text-center">
              Congratulations your Quiz is over
            </h3>
            <h3 className="text-center text-success">
              You Score is {this.getScore()} out of {this.props.totalQuestion}
            </h3>
            <br />
            <br />
            <span className="text-center">
              1. Your first Answer is:{" "}
              <strong
                className={
                  this.props.result[0] === "YES"
                    ? "text-success d-inline"
                    : "text-danger d-inline"
                }
              >
                {this.props.result[0]}{" "}
              </strong>
              <br />
              2. Your Second Answer is:{" "}
              <strong
                className={
                  this.props.result[1] === "YES"
                    ? "text-success d-inline"
                    : "text-danger d-inline"
                }
              >
                {this.props.result[1]}{" "}
              </strong>{" "}
              <br />
              3. Your third Answer is:{" "}
              <strong
                className={
                  this.props.result[2] === "YES"
                    ? "text-success d-inline"
                    : "text-danger d-inline"
                }
              >
                {this.props.result[2]}{" "}
              </strong>
            </span>
            <br />
            <br />
            <button
              className="btn btn-success btn-lg"
              onClick={this.props.onReplay}
            >
              Replay
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizOver;