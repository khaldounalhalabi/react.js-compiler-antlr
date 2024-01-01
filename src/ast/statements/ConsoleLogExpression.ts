import { Statement } from "../Statement.ts";
import { Arguments } from "../Expressions/Arguments.ts";

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
    return `ConsoleLog : [\n \t console.log , \n \t ${this.args?.astNode()} \n]`;
  }
}
