import ReactVisitor from "../antlr/ReactVisitor.ts";
import { Program } from "../ast/Program.ts";
import { ProgramContext } from "../antlr/ReactParser.ts";
import { Statement } from "../ast/Statement.ts";
import { StatementVisitor } from "./StatementVisitor.ts";

export class ProgramVisitor extends ReactVisitor<Program> {
  visitProgram: (ctx: ProgramContext) => Program = (ctx: ProgramContext) => {
    console.log("Program Visitor");
    let statementVisitor = new StatementVisitor();
    let statement: Statement = statementVisitor.visit(ctx.children[0]);
    let statements: Statement[] = [statement];
    return new Program(statements);
  };
}
