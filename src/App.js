import React, { Component } from "react";
import Quiz from "./Components/Quiz";
import Answer from "./Components/Answer";
import QuizOver from "./Components/QuizOver";

class App extends Component {
  state = {
    quiz: [
      {
        question: "Do you Love me?",
        answers: ["NO", "YES", "MAY-BE", "NOT-SURE"]
      },
      {
        question: "Are you happy today?",
        answers: ["NO", "THINKING", "LITTLE", "YES"]
      },
      {
        question: "Do you miss me?",
        answers: ["NOT-AT-ALL", "NOT-NOW", "YES", "REPLY-LATER"]
      }
    ],
    quizCount: 0,
    showResult: false,
    answer: []
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-3 text-center text-success"> React Quiz </h1>
                <hr className="bg-success pt-1" />
              </div>
            </div>
            {this.state.showResult === false ? (
              <div>
                <div className="row">
                  <div className="col-md-12">
                    <Quiz
                      question={this.state.quiz[this.state.quizCount].question}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 text-center">
                    {this.state.quiz[this.state.quizCount].answers.map(
                      (answer, index) => {
                        return (
                          <Answer
                            key={answer}
                            data-txt={answer}
                            answers={answer}
                            answerHandeler={() => this.answerHandeler(answer)}
                          />
                        );
                      }
                    )}
                  </div>
                  <span className="text-secondary text-center d-inline">
                    Question{" "}
                    <h5 className="text-primary d-inline">
                      {this.state.quizCount + 1}
                    </h5>{" "}
                    out of{" "}
                    <h5 className="text-primary d-inline">
                      {" "}
                      {this.state.quiz.length}{" "}
                    </h5>
                  </span>
                </div>
              </div>
            ) : (
              <QuizOver
                result={this.state.answer}
                totalQuestion={this.state.quiz.length}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }

  answerHandeler = key => {
    this.setState({
      quizCount: this.state.quizCount + 1,
      answer: this.state.answer.concat(key)
    });
    if (this.state.quizCount === this.state.quiz.length - 1) {
      this.setState({
        quizCount: this.state.quizCount,
        showResult: true
      });
    }
  };
}

export default App;
