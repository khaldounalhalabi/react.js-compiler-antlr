import {JsxAttributeName} from "./JsxAttributeName.ts";
import {JsxAttributeValue} from "./JsxAttributeValue.ts";

export class JsxAttribute {
    public name: JsxAttributeName;

    public value: JsxAttributeValue;


    constructor(name: JsxAttributeName, value: JsxAttributeValue) {
        this.name = name;
        this.value = value;
    }

    public toString() {
        return `${this.name} = ${this.value.toString()}`;
    }
}