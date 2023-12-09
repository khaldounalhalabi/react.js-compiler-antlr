import { Identifier } from "../Identifier.ts";
import { FunctionalExpression } from "./FunctionalExpression.ts";
import { Arguments } from "../../Arguments.ts";

export class FunctionCall extends FunctionalExpression {
  public identifier: Identifier;
  public args?: Arguments; // Assuming arguments can be expressions

  constructor(identifier: Identifier, args?: Arguments) {
    super();
    this.identifier = identifier;
    this.args = args;
  }

  public toString(): string {
    return `${this.identifier.toString()}(${
      this.args?.toString() ?? ""
    })`;
  }
}
