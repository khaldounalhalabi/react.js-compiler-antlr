import { Expression } from "../Expressions/Expression.ts";

export abstract class Jsx extends Expression {
  public abstract astNode(): string;

  public abstract toString(): string;
}
