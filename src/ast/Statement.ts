import { VariableDeclaration } from "./statements/VariableDeclaration.ts";
import { FunctionDeclaration } from "./statements/FunctionDeclaration.ts";
import { Expression } from "./Expressions/Expression.ts";
import { ConsoleLogExpression } from "./statements/ConsoleLogExpression.ts";
import { Assignment } from "./statements/Assignment.ts";
import { UseState } from "./statements/UseState.ts";
import { UseEffect } from "./statements/UseEffect.ts";
import { UseRef } from "./statements/UseRef.ts";

export class Statement {
  public statement:
    | VariableDeclaration
    | FunctionDeclaration
    | Expression
    | ConsoleLogExpression
    | Assignment
    | UseState
    | UseEffect
    | UseRef;

  constructor(
    statement:
      | VariableDeclaration
      | FunctionDeclaration
      | Expression
      | ConsoleLogExpression
      | Assignment
      | UseState
      | UseEffect
      | UseRef,
  ) {
    this.statement = statement;
  }

  public toString() {
    return this.statement.toString();
  }
}
