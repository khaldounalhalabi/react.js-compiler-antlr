import { JsxTagName } from "./JsxTagName.ts";
import { JsxAttribute } from "./JsxAttribute.ts";
import { Jsx } from "./Jsx.ts";

export class SelfClosingJsxElement extends Jsx {
  public tagName: JsxTagName;

  public jsxAttributes?: JsxAttribute[];

  constructor(tagName: JsxTagName, attributes?: JsxAttribute[]) {
    super();
    this.tagName = tagName;

    if (attributes) {
      this.jsxAttributes = attributes;
    }
  }

  public toString() {
    const attributes =
      this.jsxAttributes?.map((attr) => attr.toString()).join(" ") ?? "";

    return `<${this.tagName.toString()} ${attributes}/>`;
  }
}
