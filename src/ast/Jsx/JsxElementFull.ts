import { JsxAttribute } from "./JsxAttribute.ts";
import { JsxElementContent } from "./JsxElementContent.ts";
import { JsxTagName } from "./JsxTagName.ts";
import { Jsx } from "./Jsx.ts";

export class JsxElementFull extends Jsx {
  public tagName: JsxTagName;

  public jsxAttributes?: JsxAttribute[];

  public content?: JsxElementContent[];

  constructor(
    tagName: JsxTagName,
    content?: JsxElementContent[],
    jsxAttributes?: JsxAttribute[],
  ) {
    super();
    this.tagName = tagName;
    this.jsxAttributes = jsxAttributes;

    if (content) {
      this.content = content;
    }
  }

  public toString() {
    const attributes =
      this.jsxAttributes?.map((attr) => attr.toString()).join(" ") ?? "";

    const contentSpread =
      this.content?.map((item) => item.toString()).join("\n") ?? "";

    return `<${this.tagName.toString()} ${attributes}> 
                    ${contentSpread}
                </${this.tagName.toString()}>`;
  }

  public astNode(): string {
    const attributesAst =
      this.jsxAttributes?.map((attr) => attr.astNode()).join(", \n \t") ?? "";

    const contentAst =
      this.content?.map((co) => co.astNode()).join(", \n \t") ?? "";

    return `JsxElementFull : [\n \t ${this.tagName.astNode()}  , \n \t ${attributesAst} , \n \t , ${contentAst} \n]`;
  }
}
