import { Expression } from "./Expression.ts";

export class String extends Expression {
  public str: string;

  constructor(str: string) {
    super();
    this.str = str;
  }

  public toString(): string {
    return this.str;
  }

  public astNode(): string {
    return `String : [\n \t ${this.toString()} \n]`;
  }
}
