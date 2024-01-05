import { JsxTagName } from "./JsxTagName.ts";
import { JsxAttribute } from "./JsxAttribute.ts";
import { Jsx } from "../abstracts/Jsx.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

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

  public toString(): string {
    const attributes =
      this.jsxAttributes?.map((attr) => attr.toString()).join(" ") ?? "";

    return `<${this.tagName.toString()} ${attributes}/>`;
  }

  public astNode(): string {
    const attributesAst =
      this.jsxAttributes?.map((attr) => attr.astNode()).join(" , ") ??
      undefined;

    return `SelfClosingJsxElement -> ${this.tagName.astNode()} ${
      attributesAst ? `SelfClosingJsxElement -> ${attributesAst}` : ""
    }`;
  }

  treeObject(): TreeNode {
    let attrs: TreeNode[] = [];
    this.jsxAttributes?.forEach((att) => {
      attrs.push(att.treeObject());
    });

    return this.jsxAttributes
      ? {
          name: "Self Closing Jsx Element",
          children: [...attrs],
        }
      : {
          name: "Self Closing Jsx Element",
        };
  }
}
