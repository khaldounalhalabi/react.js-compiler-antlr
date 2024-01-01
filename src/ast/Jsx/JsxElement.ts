import { JsxElementFull } from "./JsxElementFull.ts";
import { SelfClosingJsxElement } from "./SelfClosingJsxElement.ts";
import { Jsx } from "./Jsx.ts";

export class JsxElement extends Jsx {
  public element: JsxElementFull | SelfClosingJsxElement;

  constructor(element: JsxElementFull | SelfClosingJsxElement) {
    super();
    this.element = element;
  }

  public toString() {
    return this.element.toString();
  }

  public astNode(): string {
    return `JsxElement : [\n \t ${this.element.astNode()} \n]`;
  }
}
