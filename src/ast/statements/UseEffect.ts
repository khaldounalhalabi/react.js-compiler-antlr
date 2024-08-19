import { ArrowFunction } from "../Expressions/FunctionalExpression/ArrowFunction.ts";
import { Parameter } from "../Expressions/Parameters.ts";
import { TreeNode } from "../../Types/TreeNode.ts";
import { FunctionalExpression } from "../Expressions/FunctionalExpression/FunctionalExpression.ts";
import { AbstractStatement } from "../abstracts/AbstractStatement.ts";

export class UseEffect extends AbstractStatement {
  public functional: FunctionalExpression | ArrowFunction;

  public parameters?: Parameter[];

  constructor(
    functional: FunctionalExpression | ArrowFunction,
    parameters?: Parameter[],
  ) {
    super();
    this.functional = functional;
    this.parameters = parameters;
  }

  public toString() {
    const params =
      this.parameters?.map((param) => param.toString()).join(", ") ?? "";

    if (params.length > 0) {
      return `useEffect(${this.functional.toString} , [${params}]);`;
    } else return `useEffect(${this.functional.toString});`;
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

  resolve(): string {
    if (!this.parameters || this.parameters.length <= 0) {
      return `document.addEventListener('state_changed' , function(event){
                (${this.functional.resolve()})();
            })`;
    } else {
      return this.parameters
        ?.map(
          (
            param,
          ) => `document.addEventListener('state_changed_${param.resolve()}' , function(event){
                (${this.functional.resolve()})();
            })`,
        )
        .join("\n");
    }
  }
}
