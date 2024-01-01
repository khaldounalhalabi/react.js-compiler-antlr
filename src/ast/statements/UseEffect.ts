import { Statement } from "../Statement.ts";
import { FunctionalExpression } from "../Expressions/FunctionalExpression/FunctionalExpression.ts";
import { ArrowFunction } from "../Expressions/FunctionalExpression/ArrowFunction.ts";
import { Parameter } from "../Expressions/Parameters.ts";

export class UseEffect extends Statement {
  public functional: FunctionalExpression | ArrowFunction;

  public parameters?: Parameter[];

  constructor(
    functional: FunctionalExpression | ArrowFunction,
    parameters?: Parameter[],
  ) {
    super();
    this.functional = functional;
    if (this.parameters) this.parameters = parameters;
  }

  public toString() {
    const params =
      this.parameters?.map((param) => param.toString()).join(", ") ?? "";

    if (params.length > 0) {
      return `useEffect(${this.functional.toString} , [${params}]);`;
    } else return `useEffect(${this.functional.toString});`;
  }

  public astNode(): string {
    const parametersAst =
      this.parameters?.map((param) => param.astNode()).join(", \n \t") ?? "";
    return `UseEffect : [\n \t ${this.functional.astNode()} , \n \t Dependencies : [\n \t ${parametersAst} \n] \n]`;
  }
}
