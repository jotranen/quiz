import React, { useState } from "react";

import "./App.css";

import Button from "./components/Button/Button";

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


const App = (): JSX.Element => {
  const [clickedButton, setClickedButton] = useState('');

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setClickedButton(button.name);
  };

  return (
    <div className="container">
      <h3>Quiz</h3>

      <Welcome name='Kala'></Welcome>
      <Clock/>
      <form>
        <button onClick={buttonHandler} className="button" name="button 1">
          Button 1
        </button>

        <Button shape='rounded' children="kala" variant="danger"></Button>

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
      </h1>
    </div>
  );
};

export default App;