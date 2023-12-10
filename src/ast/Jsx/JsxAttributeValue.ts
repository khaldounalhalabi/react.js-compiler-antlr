import {Expression} from "../Expressions/Expression.ts";
import {String} from "../Expressions/String.ts";
import {Jsx} from "./Jsx.ts";

export class JsxAttributeValue extends Jsx{
    public value: String | Expression;


    constructor(value: string | Expression) {
        super();
        this.value = value;
    }

    public toString(): string {
        return this.value.toString();
    }
}