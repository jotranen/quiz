class Player {
    private _points: number = 0;
    private _id: number;
    private _name: string;

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }
}

export default Player;
