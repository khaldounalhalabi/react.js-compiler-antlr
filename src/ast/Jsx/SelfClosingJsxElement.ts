import {JsxTagName} from "./JsxTagName.ts";
import {JsxAttribute} from "./JsxAttribute.ts";

export class SelfClosingJsxElement {
    public tagName: JsxTagName;

    public jsxAttributes?: JsxAttribute[];


    constructor(tagName: JsxTagName, attributes?: JsxAttribute[]) {
        this.tagName = tagName;

        if (attributes) {
            this.jsxAttributes = attributes;
        }
    }

    public toString() {
        const attributes = this.jsxAttributes?.map(
            attr => attr.toString()
        ).join(' ') ?? '';

        return `<${this.tagName.toString()} ${attributes}/>`
    }
}