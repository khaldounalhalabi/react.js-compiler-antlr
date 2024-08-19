import { Jsx } from "../abstracts/Jsx.ts";
import { Identifier } from "../Expressions/Identifier.ts";
import { TreeNode } from "../../Types/TreeNode.ts";
import { JsxAttribute } from "./JsxAttribute.ts";
import { ComponentProps } from "./ComponentProps.ts";

export class SelfClosingComponent extends Jsx {
  public identifier: Identifier;
  public jsxAttributes?: JsxAttribute[];
  public props: ComponentProps[];

  constructor(
    identifier: Identifier,
    jsxAttributes: JsxAttribute[],
    props: ComponentProps[],
  ) {
    super();
    this.identifier = identifier;
    this.jsxAttributes = jsxAttributes;
    this.props = props;
  }

  toString(): string {
    return "";
  }

  astNode(): string {
    return "";
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

    return {
      name: "Self Closing Jsx Component",
      children: [...attributesTree, ...propsTree],
    };
  }

  resolve(): string {
    return `\${${this.identifier.resolve()}(${this.props.map((prop) =>
      prop.value.resolve(),
    )})}`;
  }
}
