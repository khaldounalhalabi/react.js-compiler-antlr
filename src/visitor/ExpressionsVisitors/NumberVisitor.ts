import ReactVisitor from "../../antlr/ReactVisitor.ts";
import {Number as AntlrNumber} from "../../ast/Expressions/Number.ts";
import {NumberContext} from "../../antlr/ReactParser.ts";

export class NumberVisitor extends ReactVisitor<AntlrNumber> {
    visitNumber: (ctx: NumberContext) => AntlrNumber = (ctx: NumberContext) => {
        console.log(ctx);
        let strNum = ctx.IntegerLiteral().getText();
        let num = parseInt(strNum);

        return new AntlrNumber(num);
    }
}