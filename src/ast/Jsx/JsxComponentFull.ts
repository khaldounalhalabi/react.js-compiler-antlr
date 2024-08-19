import { Jsx } from "../abstracts/Jsx.ts";
import { JsxAttribute } from "./JsxAttribute.ts";
import { Identifier } from "../Expressions/Identifier.ts";
import { ComponentProps } from "./ComponentProps.ts";
import { TreeNode } from "../../Types/TreeNode.ts";
import { Expression } from "../abstracts/Expression.ts";
import { JsxElementContent } from "./JsxElementContent.ts";

export class JsxComponentFull extends Jsx {
  public identifier: Identifier;
  public jsxAttributes?: JsxAttribute[];
  public props: ComponentProps[];
  public content: Array<Expression | JsxElementContent>;

  constructor(
    identifier: Identifier,
    jsxAttributes: JsxAttribute[],
    props: ComponentProps[],
    content: Array<Expression | JsxElementContent>,
  ) {
    super();
    this.identifier = identifier;
    this.jsxAttributes = jsxAttributes;
    this.props = props;
    this.content = content;
  }

  toString(): string {
    return `<${this.identifier.toString()} 
                ${this.jsxAttributes?.map((attr) => attr.toString()).join(" ")}
                ${this.props?.map((prop) => prop.toString()).join(" ")}
            >
                ${this.content.map((cont) => cont.toString).join("\n")}
            </${this.identifier.toString()}>`;
  }

  treeObject(): TreeNode {
    let attributesTree: TreeNode[] = [];

    this.jsxAttributes?.forEach((att) => {
      attributesTree.push(att.treeObject());
    });

    let propsTree: TreeNode[] = [];
    this.props.forEach((pr: ComponentProps) => {
      propsTree.push(pr.treeObject());
    });

    const contentTree = this.content.map((cont) => cont.treeObject());

    return {
      name: "Jsx Component Full",
      children: [...attributesTree, ...propsTree, ...contentTree],
    };
  }

  resolve(): string {
    return `\${${this.identifier.resolve()}(${this.props.map((prop) =>
      prop.value.resolve(),
    )})}`;
  }
}
