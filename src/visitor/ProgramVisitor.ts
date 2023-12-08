import ReactVisitor from "../antlr/ReactVisitor.ts";
import {Program} from "../ast/Program.ts";
import {ProgramContext} from "../antlr/ReactParser.ts";

export class ProgramVisitor extends ReactVisitor<Program>{
    visitProgram: (ctx: ProgramContext) => Program = (ctx: ProgramContext) => {
        console.log(ctx.children[0]);
        return new Program(this.visitStatement(ctx.children[0]));
    }
}