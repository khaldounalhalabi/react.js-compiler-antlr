import { JsxElement } from "./JsxElement.ts";
import { Expression } from "../Expressions/Expression.ts";
import { Jsx } from "./Jsx.ts";

export class JsxElementContent extends Jsx {
  public content?: JsxElement | Expression;

  constructor(content?: JsxElement | Expression) {
    super();
    this.content = content;
  }

  public toString(): string {
    return this.content?.toString() ?? "";
  }

  public astNode(): string {
    return `JsxElementContent : [\n \t ${this.content?.astNode()} \n]`;
  }
}
