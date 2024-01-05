import { JsxAttribute } from "./JsxAttribute.ts";
import { JsxElementContent } from "./JsxElementContent.ts";
import { JsxTagName } from "./JsxTagName.ts";
import { Jsx } from "../abstracts/Jsx.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

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
      this.jsxAttributes?.map((attr) => attr.astNode()).join(" , ") ??
      undefined;

    const contentAst =
      this.content?.map((co) => co.astNode()).join(" , ") ?? undefined;

    return `JsxElementFull -> ${this.tagName.astNode()}  ${
      attributesAst ? `JsxElementFull -> ${attributesAst}` : ""
    } ${
      contentAst
        ? `
    JsxElementFull -> ${contentAst}`
        : ""
    }`;
  }

  treeObject(): TreeNode {
    let contentObjects: TreeNode[] = [];
    this.content?.forEach((co) => {
      contentObjects.push(co.treeObject());
    });

    let attrs: TreeNode[] = [];
    this.jsxAttributes?.forEach((att) => {
      attrs.push(att.treeObject());
    });

    if (this.content && this.jsxAttributes) {
      return {
        name: "Jsx Element Full",
        children: [this.tagName.treeObject(), ...attrs, ...contentObjects],
      };
    } else if (this.content && !this.jsxAttributes){
      return {
        name: "Jsx Element Full",
        children: [this.tagName.treeObject(), ...contentObjects],
      };
    } else if (!this.content && this.jsxAttributes) {
      return {
        name: "Jsx Element Full",
        children: [this.tagName.treeObject(), ...attrs],
      };
    } else {
      return {
        name: "Jsx Element Full",
        children: [this.tagName.treeObject()],
      };
    }
  }
}
