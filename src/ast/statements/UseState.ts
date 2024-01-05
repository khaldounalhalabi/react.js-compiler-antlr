import { Statement } from "../abstracts/Statement.ts";
import { Identifier } from "../Expressions/Identifier.ts";
import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class UseState extends Statement {
  public identifier: Identifier;

  public setIdentifier: Identifier;

  public expression?: Expression;

  constructor(
    identifier: Identifier,
    setIdentifier: Identifier,
    expression?: Expression,
  ) {
    super();
    this.identifier = identifier;
    this.setIdentifier = setIdentifier;

    if (expression) this.expression = expression;
  }

  public toString(): string {
    return `const [${this.identifier.toString()} , ${this.setIdentifier.toString()}] = useState(${
      this.expression?.toString() ?? ""
    })`;
  }

  public astNode(): string {
    return `UseState -> ${this.identifier.astNode()} UseState -> ${this.setIdentifier.astNode()} ${
      this.expression ? `UseState -> ${this.expression?.astNode()}` : ""
    }`;
  }

  treeObject(): TreeNode {
    return this.expression
      ? {
          name: "UseState",
          children: [
            this.identifier.treeObject(),
            this.setIdentifier.treeObject(),
            this.expression?.treeObject(),
          ],
        }
      : {
          name: "UseState",
          children: [
            this.identifier.treeObject(),
            this.setIdentifier.treeObject(),
          ],
        };
  }
}
