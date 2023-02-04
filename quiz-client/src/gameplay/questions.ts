// temp
type Question = {
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
    private _length: number;

    constructor(gameId: number, length: number) {
        this._gameId = 1234;
        this._length = length;
    }

    public start() {
        return this._gameId;
    }

    public nextQuestion() {
        return questions[this._currentQuestion++];
    }
}

export default Questions;
