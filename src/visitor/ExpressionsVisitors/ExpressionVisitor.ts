import { NumberContext } from "../../antlr/ReactParser.ts";
import { NumberVisitor } from "./NumberVisitor.ts";
import { Expression } from "../../ast/Expressions/Expression.ts";
import { String as AntlrString } from "../../ast/Expressions/String.ts";

export class ExpressionVisitor {
  public visitExpression(context: any): Expression {
    if (context instanceof NumberContext) {
      console.log('it worked')
      return new NumberVisitor().visitNumber(context);
    }

    return new AntlrString("null");
  }
}
