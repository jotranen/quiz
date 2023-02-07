import Player from './player';
import Questions from './questions';

class Game {
    private _gameId: number;
    private _currentQuestion: number = 0;
    private _questions: Questions;

    private _host: Player;
    private _players: Player[] = [];

    constructor(gameId: number, host: Player, amount: number) {
        this._host = host;
        this._gameId = 1234;
        this._questions = new Questions(this._gameId, amount);
    }

    public start(amount: number) {
        return this._gameId;
    }

    public question() {
        return this._questions.question();
    }

    public nextRound() {
        return this._questions.nextRound();
    }
}

export default Game;
