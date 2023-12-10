import {Jsx} from "./Jsx.ts";

export class JsxTagName extends Jsx{
    public name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    public toString() {
        return this.name;
    }
}