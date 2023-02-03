import React, { useRef, useState } from "react";

import "./App.css";

import Button from "./components/AnswerButton/AnswerButton";
import QuestionCard from "./components/QuestionCard";
import { string } from "prop-types";

// element
const element = <h1>Hello, world</h1>;

// component
function Welcome(props: any) {
  return <h1>Hello, {props.name}</h1>;
}

interface Props {
}

const Clock = (props: Props) => {
  const [state, setState] = useState({
    date: new Date(),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setState({
        date: new Date(),
      });
    }, 1000);
  });

  return <h2>{`${state.date}`}</h2>;
};
const question = "mita kello? fdafasdfadf asfasdfas hfsadhfkja sdhfkasdhfkashfkja hfhdahkfdsah";
const answers = ["kello", "kello2", "kello3"]

const startGame = "new game";
const startGameAnswers = ["start", "join"];

class App extends React.Component<Props, any> {
  // const [clickedButton, setClickedButton] = useState('');
  constructor(props: Props) {
    super(props);
    this.state = {
      showStartGame: true,
      showQuestions: false,
      showQuestionsAnswered: false,
      gameId: string,
      container: React.createRef(),
      selectedButton: 0,
    };
  }

   buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;

    if (this.state.showStartGame) {
      if (button.id === "0") {   
        this.setState({
          showStartGame: false,
          showQuestions: true,
          showQuestionsAnswered: false,
          gameId : "1234",
          selectedButton: 0,
        });     
      } else {
        alert("join game");
      }
    } else if (this.state.showQuestions) {
      this.setState({
        showStartGame: false,
        showQuestions: false,
        showQuestionsAnswered: true,
        selectedButton: button.id,
      });
    } else if (this.state.showQuestionsAnswered) {
      console.log("showQuestionsAnswered");
    }
  }

  render() {
    return (
      <div className="container">
        <div>
          {
            this.state.showStartGame &&   
            <div>
            <QuestionCard question={startGame} answers={startGameAnswers} buttonHandler={this.buttonHandler}></QuestionCard>
            </div>
          }
          {
            this.state.showQuestions &&
            <div ref={this.state.container}>
            <QuestionCard question={question} answers={answers} buttonHandler={this.buttonHandler}></QuestionCard>
            </div>
          }
          {
            this.state.showQuestionsAnswered &&
            <div ref={this.state.container}>
            <QuestionCard question={question} answers={answers} buttonId={this.state.selectedButton}></QuestionCard>
            </div>
          }
        </div>  
      </div>
    );
  }
}

export default App;