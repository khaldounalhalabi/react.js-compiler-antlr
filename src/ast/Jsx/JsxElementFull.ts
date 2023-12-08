import {JsxAttribute} from "./JsxAttribute.ts";
import {JsxElementContent} from "./JsxElementContent.ts";
import {JsxTagName} from "./JsxTagName.ts";

export class JsxElementFull {
    public tagName: JsxTagName;

    public jsxAttributes?: JsxAttribute[];

    public content?: JsxElementContent[];

    constructor(tagName: JsxTagName, content?: JsxElementContent[], jsxAttributes?: JsxAttribute[]) {
        this.tagName = tagName;
        this.jsxAttributes = jsxAttributes;

        if (content) {
            this.content = content;
        }
    }

    public toString() {
        const attributes = this.jsxAttributes?.map(
            attr => attr.toString()
        ).join(' ') ?? '';

        const contentSpread = this.content?.map(
            item => item.toString()
        ).join('\n') ?? '';

        return `<${this.tagName.toString()} ${attributes}> 
                    ${contentSpread}
                </${this.tagName.toString()}>`
    }
}