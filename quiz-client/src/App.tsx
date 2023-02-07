import React from 'react';

import './App.css';

import QuestionCard from './components/QuestionCard';
import { string } from 'prop-types';
import ProgressBar from './components/ProgressBar';
import Game from './gameplay/game';
import Player from './gameplay/player';

interface Props {}

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
            progress: 60,
            game: Game,
            answer: 0,
        };
    }

    progressDone = () => {
        if (this.state.showQuestionsAnswered) {
            console.log('progress done, answer: ' + this.state.answer);
        } else {
            console.log('progress done, no answer');
        }
        if (this.state.game.nextRound()) {
            this.setState({
                showProgressBar: true,
                showStartGame: false,
                showQuestions: true,
                showQuestionsAnswered: false,
                progress: 60,
            });
        } else {
            console.log('game over');
        }
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
                answer: button.id,
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
                                question={this.state.game.question().question}
                                answers={this.state.game.question().answers}
                                buttonHandler={this.buttonHandler}
                            ></QuestionCard>
                        </div>
                    )}
                    {this.state.showQuestionsAnswered && (
                        <div ref={this.state.container}>
                            <QuestionCard
                                question={this.state.game.question().question}
                                answers={this.state.game.question().answers}
                                buttonId={this.state.selectedButton}
                            ></QuestionCard>
                        </div>
                    )}
                    {this.state.showProgressBar && (
                        <div>
                            <ProgressBar
                                key={this.state.game.question().question}
                                speed={50}
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
