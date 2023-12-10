import { Statement } from "../Statement.ts";
import { Arguments } from "../Arguments.ts";

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
}
