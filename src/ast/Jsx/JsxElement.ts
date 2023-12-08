import {JsxElementFull} from "./JsxElementFull.ts";
import {SelfClosingJsxElement} from "./SelfClosingJsxElement.ts";

export class JsxElement {
    public element: JsxElementFull | SelfClosingJsxElement;


    constructor(element: JsxElementFull | SelfClosingJsxElement) {
        this.element = element;
    }

    public toString() {
        return this.element.toString();
    }
}