import { Expression } from "../Expression.ts";

export abstract class FunctionalExpression extends Expression {
  public abstract astNode(): string;

  public abstract toString(): string;
}
