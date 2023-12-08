import ReactVisitor from "../../antlr/ReactVisitor.ts";
import {String as AntlrString} from "../../ast/Expressions/String.ts";
import {StringContext} from "../../antlr/ReactParser.ts";

export class StringVisitor extends ReactVisitor<AntlrString> {
    visitString: (ctx: StringContext) => AntlrString = (ctx: StringContext) => {
        let str = ctx.StringLiteral().getText();
        return new AntlrString(str);
    }
}