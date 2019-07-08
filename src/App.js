import React, { Component } from "react";
import Quiz from "./Components/Quiz";
import Answer from "./Components/Answer";
import QuizOver from "./Components/QuizOver";

class App extends Component {
  state = {
    quiz: [
      {
        question: "Which one is the programming languages?",
        answers: ["HTML", "PHP", "CSS", "SQL"],
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsp3jm9kIl7X5_-W41m-uP8O_Oo35OEyAh6QncUPaXNOE1kO9ctw"
      },
      {
        question: "React is a _____ ?",
        answers: ["Progamming Language", "CSS Library", "Framework", "Library"],
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzxjlgiE1cqrgsGJoPtcTWMovcYkPZ43p5FjmtO9kh3Cq0KlY"
      },
      {
        question: "React Develop By?",
        answers: ["Microsoft", "Google", "FaceBook", "Apple"],
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOYl5uFXpRQuo04vNr-Tntxr-bT6CMnzuhOnQBLLOm-4DvCyT"
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
          <div className="container app-root rounded">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-3 text-center textColor">
                  Simple React Quiz App
                </h1>
                <hr className="textColor hrContent" />
              </div>
            </div>
            {this.state.showResult === false ? (
              <div>
                <div className="row">
                  <div className="col-md-12">
                    <img
                      className="mt-2 mb-2"
                      src={this.state.quiz[this.state.quizCount].img}
                      alt="quiz"
                    />
                    <Quiz
                      question={this.state.quiz[this.state.quizCount].question}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 text-left">
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
                    <br />
                    <span className="text-light text-center d-inline">
                      Question :{" "}
                      <h5 className="textColor d-inline">
                        {this.state.quizCount + 1}
                      </h5>{" "}
                      out of{" "}
                      <h5 className="textColor d-inline">
                        {" "}
                        {this.state.quiz.length}{" "}
                      </h5>
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <QuizOver
                result={this.state.answer}
                totalQuestion={this.state.quiz.length}
                onReplay={this.onReplayHendeler}
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
  onReplayHendeler = () => {
    this.setState({ quizCount: 0, showResult: false, answer: [] });
  };
}

export default App;
