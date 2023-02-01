import React, { useState } from "react";

import "./App.css";

import Button from "./components/AnswerButton/AnswerButton";
import QuestionCard from "./components/QuestionCard";

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
    };
  }

  buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    // alert(button.name);
    if (button.name === "start") {
      this.setState({ showStartGame: false, showQuestions: true });
    } 

    // setClickedButton(button.name);
  };

  render() {
    return (
      <div className="container">
        <div>
          {
            this.state.showStartGame &&   
            <QuestionCard question={startGame} answers={startGameAnswers} buttonHandler={this.buttonHandler}></QuestionCard>
          }
          {
            this.state.showQuestions &&
            <QuestionCard question={question} answers={answers} buttonHandler={this.buttonHandler}></QuestionCard>
          }
        </div>
  
        {/* <Welcome name='Kala'></Welcome>
        <Clock/>
        <form>
          <button onClick={buttonHandler} className="button" name="button 1">
            Button 1
          </button>
  
          <Button onClick={buttonHandler} name='kissa' shape='rounded' children="kala" variant="danger"></Button>
  
          <button onClick={buttonHandler} className="button" name="button 2">
            Button 2
          </button>
  
          <button onClick={buttonHandler} className="button" name="button 3">
            Button 3
          </button>
  
          <button onClick={buttonHandler} className="button" name="button 4">
            Button 4
          </button>
        </form>
        <h1>
          {clickedButton !== ""
            ? `You have clicked "${clickedButton}"` 
            : "No button clicked yet"}
        </h1> */}
      </div>
    );
  }
}

export default App;