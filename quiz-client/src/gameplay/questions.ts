// temp
export type Question = {
    question: string;
    answers: string[];
};

const questions = [
    {
        question: 'mita kello?',
        answers: ['kello1', 'kello2', 'kello3'],
    },
    {
        question: 'mika paiva?',
        answers: ['maanantai', 'tiistai', 'torstai'],
    },
];

class Questions {
    private _gameId: number;
    private _currentQuestion: number = 0;
    private _amount: number;

    constructor(gameId: number, amount: number) {
        this._gameId = 1234;
        this._amount = amount;
    }

    public start() {
        return this._gameId;
    }

    public question() {
        return questions[this._currentQuestion];
    }

    public nextRound() {
        if (this._currentQuestion >= this._amount - 1) {
            return false;
        }

        this._currentQuestion++;
        return true;
    }
}

export default Questions;
