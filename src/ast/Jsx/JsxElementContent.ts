import {JsxElement} from "./JsxElement.ts";
import {Expression} from "../Expressions/Expression.ts";

export class JsxElementContent {
    public content: JsxElement | Expression | String;

    constructor(content: JsxElement | Expression | String) {
        this.content = content;
    }

    public toString() {
        this.content.toString();
    }
}