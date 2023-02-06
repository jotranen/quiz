import React from 'react';

import './App.css';

import QuestionCard from './components/QuestionCard';
import { string } from 'prop-types';
import ProgressBar from './components/ProgressBar';
import Game from './gameplay/game';
import Player from './gameplay/player';

interface Props {}

const question =
    'mita kello? fdafasdfadf asfasdfas hfsadhfkja sdhfkasdhfkashfkja hfhdahkfdsah';
const answers = ['kello', 'kello2', 'kello3'];

const startGame = 'new game';
const startGameAnswers = ['start', 'join'];

class App extends React.Component<Props, any> {
    private _player = new Player(1, 'player1');

    constructor(props: Props) {
        super(props);
        this.state = {
            showProgressBar: false,
            showStartGame: true,
            showQuestions: false,
            showQuestionsAnswered: false,
            gameId: string,
            container: React.createRef(),
            selectedButton: 0,
            progress: 20,
            game: Game,
        };
    }

    progressDone = () => {
        console.log('progress done');
    };

    buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;

        if (this.state.showStartGame) {
            if (button.id === '0') {
                this.setState({
                    showProgressBar: true,
                    showStartGame: false,
                    showQuestions: true,
                    showQuestionsAnswered: false,
                    gameId: '1234',
                    selectedButton: 0,
                    game: new Game(1234, this._player, 2),
                });
            } else {
                alert('join game');
            }
        } else if (this.state.showQuestions) {
            this.setState({
                showProgressBar: true,
                showStartGame: false,
                showQuestions: false,
                showQuestionsAnswered: true,
                selectedButton: button.id,
            });
        } else if (this.state.showQuestionsAnswered) {
            console.log('showQuestionsAnswered');
        }
    };

    render() {
        return (
            <div className="container">
                <div>
                    {this.state.showStartGame && (
                        <div>
                            <QuestionCard
                                question={startGame}
                                answers={startGameAnswers}
                                buttonHandler={this.buttonHandler}
                                progressDone={this.progressDone}
                            ></QuestionCard>
                        </div>
                    )}
                    {this.state.showQuestions && (
                        <div ref={this.state.container}>
                            <QuestionCard
                                question={question}
                                answers={answers}
                                buttonHandler={this.buttonHandler}
                            ></QuestionCard>
                        </div>
                    )}
                    {this.state.showQuestionsAnswered && (
                        <div ref={this.state.container}>
                            <QuestionCard
                                question={question}
                                answers={answers}
                                buttonId={this.state.selectedButton}
                            ></QuestionCard>
                        </div>
                    )}
                    {this.state.showProgressBar && (
                        <div>
                            <ProgressBar
                                progressDone={this.progressDone}
                            ></ProgressBar>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default App;
