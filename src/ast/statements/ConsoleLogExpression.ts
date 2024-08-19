import { Arguments } from "../Expressions/Arguments.ts";
import { TreeNode } from "../../Types/TreeNode.ts";
import {AbstractStatement} from "../abstracts/AbstractStatement.ts";

export class ConsoleLogExpression extends AbstractStatement {
  args: Arguments | undefined;

  constructor(args: Arguments | undefined) {
    super();
    this.args = args;
  }

  toString(): string {
    const argsStr = this.args ? this.args.toString() : "";
    return `console.log(${argsStr})`;
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

  resolve(): string {
    const argsStr = this.args ? this.args.resolve() : "";
    return `console.log${argsStr}`;
  }
}
