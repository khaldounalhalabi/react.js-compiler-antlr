import { Expression } from "../Expressions/Expression.ts";
import { String } from "../Expressions/String.ts";
import { Jsx } from "./Jsx.ts";

export class JsxAttributeValue extends Jsx {
  public value: String | Expression;

  constructor(value: Expression) {
    super();
    this.value = value;
  }

  public toString(): string {
    return this.value.toString();
  }

  public astNode(): string {
    return `JsxAttributeValue : [\n \t ${this.value.astNode()} \n]`;
  }
}
