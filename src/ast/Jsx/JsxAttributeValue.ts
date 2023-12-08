import {Expression} from "../Expressions/Expression.ts";
import {String} from "../Expressions/String.ts";

export class JsxAttributeValue {
    public value: String | Expression;


    constructor(value: string | Expression) {
        this.value = value;
    }

    public toString(): string {
        return this.value.toString();
    }
}