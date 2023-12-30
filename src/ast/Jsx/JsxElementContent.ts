import { JsxElement } from "./JsxElement.ts";
import { Expression } from "../Expressions/Expression.ts";
import { Jsx } from "./Jsx.ts";

export class JsxElementContent extends Jsx {
  public content?: JsxElement | Expression | String;

  constructor(content?: JsxElement | Expression | String) {
    super();
    this.content = content;
  }

  public toString(): string {
    return this.content?.toString() ?? "";
  }
}
