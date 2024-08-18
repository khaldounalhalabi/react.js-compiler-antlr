import { Expression } from "./Expression.ts";

export abstract class Jsx extends Expression {
  public abstract resolve(): string;
}
