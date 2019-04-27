
export default class Value {
    _id?: string;

    constructor(public x: Number = 0, public y: Number = 0, ) {
    }

    public setId?() {
        this._id = this._makeId();
    }

    private _makeId?(length = 10) {
        let txt = ''
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return txt
    }
}