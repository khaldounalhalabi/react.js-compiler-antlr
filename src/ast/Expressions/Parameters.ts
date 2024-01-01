import { Identifier } from "./Identifier.ts";
import {Expression} from "./Expression.ts";

export class Parameter extends Expression{
  identifier: Identifier;

  constructor(identifier: Identifier) {
    super();
    this.identifier = identifier;
  }

  toString(): string {
    return this.identifier.toString();
  }

  public astNode(): string {
    return `Parameter : [\n \t ${this.identifier.astNode()} \n]`;
  }
}
