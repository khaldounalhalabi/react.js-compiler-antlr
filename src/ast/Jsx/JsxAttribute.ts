import {JsxAttributeName} from "./JsxAttributeName.ts";
import {JsxAttributeValue} from "./JsxAttributeValue.ts";
import {Jsx} from "./Jsx.ts";

export class JsxAttribute extends Jsx{
    public name: JsxAttributeName;

    public value: JsxAttributeValue;


    constructor(name: JsxAttributeName, value: JsxAttributeValue) {
        super();
        this.name = name;
        this.value = value;
    }

    public toString() {
        return `${this.name} = ${this.value.toString()}`;
    }
}