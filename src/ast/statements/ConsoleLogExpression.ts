import { Statement } from "../abstracts/Statement.ts";
import { Arguments } from "../Expressions/Arguments.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class ConsoleLogExpression extends Statement {
  args: Arguments | undefined;

  constructor(args: Arguments | undefined) {
    super();
    this.args = args;
  }

  toString(): string {
    const argsStr = this.args ? this.args.toString() : "";
    return `console.log(${argsStr})`;
  }

  public astNode(): string {
    return `ConsoleLog -> console.log ${
      this.args ? `ConsoleLog -> ${this.args?.astNode()}` : ""
    }`;
  }

  treeObject(): TreeNode {
    return this.args
      ? {
          name: "Console Log",
          children: [this.args.treeObject()],
        }
      : {
          name: "Console Log",
        };
  }
}
