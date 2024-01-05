import { Statement } from "../abstracts/Statement.ts";
import { FunctionalExpression } from "../FunctionalExpression.ts";
import { ArrowFunction } from "../Expressions/FunctionalExpression/ArrowFunction.ts";
import { Parameter } from "../Expressions/Parameters.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

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
      this.parameters?.map((param) => param.astNode()).join(" , ") ?? undefined;
    return `UseEffect -> ${this.functional.astNode()} ${
      parametersAst ? `UseEffect -> ${parametersAst}` : ""
    }`;
  }

  treeObject(): TreeNode {
    let params: TreeNode[] = [];
    this.parameters?.forEach((p) => {
      params.push(p.treeObject());
    });

    return this.parameters
      ? {
          name: "Use Effect",
          children: [this.functional.treeObject(), ...params],
        }
      : {
          name: "Use Effect",
          children: [this.functional.treeObject()],
        };
  }
}
