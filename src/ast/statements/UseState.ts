import { Identifier } from "../Expressions/Identifier.ts";
import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";
import { AbstractStatement } from "../abstracts/AbstractStatement.ts";

export class UseState extends AbstractStatement {
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

  resolve(): string {
    return `const ${this.identifier.resolve()} = getState('${this.identifier.resolve()}') ${
      this.expression ? `?? ${this.expression.resolve()}` : "undefined"
    };
            \n const ${this.setIdentifier.resolve()} = (value) => {setState('${this.identifier.resolve()}' , value)}
            \n window.${this.identifier.resolve()} = ${this.identifier.resolve()}\n
            \n window.${this.setIdentifier.resolve()} = ${this.setIdentifier.resolve()}`;
  }
}
