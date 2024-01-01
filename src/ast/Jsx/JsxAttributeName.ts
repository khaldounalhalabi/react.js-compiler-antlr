import { Jsx } from "./Jsx.ts";

export class JsxAttributeName extends Jsx {
  public name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public toString() {
    return this.name;
  }

  public astNode(): string {
    return `JsxAttributeName : [\n \t ${this.name} \n]`;
  }
}
