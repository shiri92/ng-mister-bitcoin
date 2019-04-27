import Value from './Value';

export default class Chart {
    _id?: string;

    constructor(public name: string = "", public values: Array<Value> = [], public type: string = "", public description: string = "") {
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