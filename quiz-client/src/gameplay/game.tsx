import Player from "./player";
import Questions from "./questions";

class Game {
    private _gameId: number;
    private _currentQuestion: number = 0;
    private _questions: Questions;

    private _host: Player;
    private _players: Player[] = [];

    constructor(gameId: number, host: Player) {
        this._host = host;
        this._gameId = 1234;
        this._questions = new Questions(this._gameId, 2);
    }

    public start() {
        return this._gameId;
    }

    public nextQuestion() {
        return this._questions.nextQuestion();
    }
}

export default Game;
