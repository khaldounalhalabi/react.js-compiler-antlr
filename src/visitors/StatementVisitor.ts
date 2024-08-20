// @ts-ignore
import { TerminalNode } from "antlr4";
import ReactVisitor from "../antlr/ReactVisitor.ts";
import {
  AssignmentContext,
  ConditionalStatementContext,
  ConsoleLogExpressionContext,
  ElseIfStatementContext,
  ElseStatementContext,
  FunctionCallContext,
  FunctionDeclarationContext,
  IfStatementContext,
  ParametersContext,
  StatementContext,
  UseEffectContext,
  UseRefContext,
  UseStateContext,
  VariableDeclarationContext,
  VariableTypeContext,
} from "../antlr/ReactParser.ts";
import { VariableDeclaration } from "../ast/statements/VariableDeclaration.ts";
import { VariableType } from "../ast/Expressions/VariableType.ts";
import { FunctionalExpressionVisitor } from "./FunctionalExpressionVisitor.ts";
import { Identifier } from "../ast/Expressions/Identifier.ts";
import { Expression } from "../ast/abstracts/Expression.ts";
import { Assignment } from "../ast/statements/Assignment.ts";
import { ExpressionVisitor } from "./ExpressionVisitor.ts";
import { ConsoleLogExpression } from "../ast/statements/ConsoleLogExpression.ts";
import { FunctionDeclaration } from "../ast/statements/FunctionDeclaration.ts";
import { ParameterVisitor } from "./ParameterVisitor.ts";
import { BlockVisitor } from "./BlockVisitor.ts";
import { UseEffect } from "../ast/statements/UseEffect.ts";
import { UseRef } from "../ast/statements/UseRef.ts";
import { UseState } from "../ast/statements/UseState.ts";
import { FunctionCall } from "../ast/Expressions/FunctionalExpression/FunctionCall.ts";
import { Arguments } from "../ast/Expressions/Arguments.ts";
import { ConditionalStatement } from "../ast/statements/ConditionalStatement.ts";
import { ElseIfStatement } from "../ast/statements/ElseIfStatement.ts";
import { IfStatement } from "../ast/statements/IfStatement.ts";
import { ElseStatement } from "../ast/statements/ElseStatement.ts";
import { Parameter } from "../ast/Expressions/Parameters.ts";
import { AbstractStatement } from "../ast/abstracts/AbstractStatement.ts";
import { Statement } from "../ast/statements/Statement.ts";
import { SymbolTable } from "../libs/SymbolTable.ts";

export class StatementVisitor extends ReactVisitor<AbstractStatement> {
  public exprVisitor: ExpressionVisitor;

  public blockVisitor: BlockVisitor;

  public funcExprVisitor: FunctionalExpressionVisitor;

  public parameterVisitor: ParameterVisitor;

  public symbolTable: SymbolTable;

  constructor(
    exprVisitor: ExpressionVisitor,
    blockVisitor: BlockVisitor,
    funcExprVisitor: FunctionalExpressionVisitor,
    parameterVisitor: ParameterVisitor,
    symbolTable: SymbolTable,
  ) {
    super();
    this.exprVisitor = exprVisitor;
    this.blockVisitor = blockVisitor;
    this.funcExprVisitor = funcExprVisitor;
    this.parameterVisitor = parameterVisitor;
    this.symbolTable = symbolTable;
  }

  visitVariableDeclaration: (
    ctx: VariableDeclarationContext,
  ) => VariableDeclaration = (ctx: VariableDeclarationContext) => {
    let varType: VariableType = this.visitVariableType(ctx.variableType());
    let id: Identifier = this.funcExprVisitor.visitID(ctx.Identifier());
    let expression: Expression = this.funcExprVisitor.visit(ctx.expression());
    new VariableDeclaration(varType, id, expression);
    this.symbolTable.add(
      id.name,
      ctx.start.line,
      ctx.start.column,
      false,
      varType.toString(),
    );
    return new VariableDeclaration(varType, id, expression);
  };

  visitVariableType: (ctx: VariableTypeContext) => VariableType = (
    ctx: VariableTypeContext,
  ) => {
    // @ts-ignore
    let varType: string = ctx.getText();
    return new VariableType(varType);
  };

  visitAssignment: (ctx: AssignmentContext) => Assignment = (
    ctx: AssignmentContext,
  ) => {
    const idCtx = ctx.Identifier();
    const id = this.funcExprVisitor.visitID(idCtx);
    const expression = this.funcExprVisitor.visit(ctx.expression());

    if (!this.symbolTable.has(id.name)) {
      console.error(
        `${id.name} is undefined line : ${ctx.start.line} column : ${ctx.start.column}`,
      );
    } else {
      const record = this.symbolTable.get(id.name);
      if (record?.idType == "const") {
        console.error(
          `${id.name} is constant you cannot change its value line : ${ctx.start.line} column : ${ctx.start.column}`,
        );
      }
    }

    return new Assignment(id, expression);
  };

  visitConsoleLogExpression: (
    ctx: ConsoleLogExpressionContext,
  ) => ConsoleLogExpression = (ctx: ConsoleLogExpressionContext) => {
    let args = undefined;
    if (ctx.arguments()) {
      args = this.funcExprVisitor.visitArguments(ctx.arguments());
    }

    return new ConsoleLogExpression(args);
  };

  visitFunctionDeclaration: (
    ctx: FunctionDeclarationContext,
  ) => FunctionDeclaration = (ctx: FunctionDeclarationContext) => {
    const id = this.exprVisitor.visitID(ctx.Identifier());
    let parameters = undefined;
    if (ctx.parameters()) {
      parameters = this.parameterVisitor.visitParameters(ctx.parameters());
    }
    const block = this.blockVisitor.visit(ctx.block());

    this.symbolTable.add(
      id.name,
      ctx?.Identifier().start?.line ?? 0,
      ctx?.Identifier()?.column ?? 0,
      true,
    );

    return new FunctionDeclaration(id, block, parameters);
  };

  visitUseEffect: (ctx: UseEffectContext) => UseEffect = (
    ctx: UseEffectContext,
  ) => {
    let funcCtx = ctx.arrowFunction() ?? ctx.functionExpression();
    if (!funcCtx) {
      console.error("useEffect cannot must have a callback function");
    }
    let func = this.funcExprVisitor.visit(funcCtx);

    let paramCtx:
      | ParametersContext
      | { start: { column: string } }[]
      | undefined = undefined;
    let params: Parameter[] | undefined = undefined;

    if (ctx.parameters()) {
      paramCtx = ctx.parameters();
      params = this.parameterVisitor.visitParameters(paramCtx);
      paramCtx.Identifier_list().forEach((param) => {
        if (!this.symbolTable.has(param.getText())) {
          console.error(
            `${param.getText()} is undefined line : ${
              param?.symbol.start?.line ?? 0
            } column : ${param?.symbol.start?.column ?? 0}`,
          );
        }
      });
    }
    return new UseEffect(func, params);
  };

  visitUseRef: (ctx: UseRefContext) => UseRef = (ctx: UseRefContext) => {
    let idCtx = ctx.Identifier();
    let id = this.exprVisitor.visitID(idCtx);

    let exprCtx = undefined;
    let expr = undefined;

    if (ctx.expression()) {
      exprCtx = ctx.expression();
      expr = this.exprVisitor.visit(exprCtx);
    }

    return new UseRef(id, expr);
  };

  visitUseState: (ctx: UseStateContext) => UseState = (
    ctx: UseStateContext,
  ) => {
    const idCtx: TerminalNode[] = ctx.Identifier_list();
    const ids: Identifier[] = [];

    for (let i = 0; i < idCtx.length; i++) {
      ids.push(this.exprVisitor.visitID(idCtx[i]));
    }

    let expression = undefined;
    if (ctx.expression()) {
      expression = this.exprVisitor.visit(ctx.expression());
    }

    return new UseState(ids[0], ids[1], expression);
  };

  visitFunctionCall: (ctx: FunctionCallContext) => FunctionCall = (
    ctx: FunctionCallContext,
  ) => {
    let id = this.exprVisitor.visitID(ctx.Identifier());
    let args: Arguments | undefined = undefined;
    if (ctx.arguments()) {
      args = this.funcExprVisitor.visitArguments(ctx.arguments());
    }

    if (!this.symbolTable.has(id.name)) {
      console.error(`Undefined function ${id.name}`);
    }

    return new FunctionCall(id, args);
  };
  visitConditionalStatement: (
    ctx: ConditionalStatementContext,
  ) => ConditionalStatement = (
    ctx: ConditionalStatementContext,
  ): ConditionalStatement => {
    let ifsts = this.visit(ctx.ifStatement());
    let elseif: ElseIfStatement[] = [];
    if (ctx.elseIfStatement_list().length > 0) {
      ctx.elseIfStatement_list().forEach((st) => {
        elseif.push(this.visit(st));
      });
    }
    let els = undefined;
    if (ctx.elseStatement()) {
      els = this.visit(ctx.elseStatement());
    }
    return new ConditionalStatement(ifsts, elseif, els);
  };

  visitIfStatement: (ctx: IfStatementContext) => IfStatement = (
    ctx: IfStatementContext,
  ): IfStatement => {
    let cond = this.exprVisitor.visit(ctx.expression());
    let block = this.blockVisitor.visitBlock(ctx.block());
    return new IfStatement(cond, block);
  };

  visitElseIfStatement: (ctx: ElseIfStatementContext) => ElseIfStatement = (
    ctx: ElseIfStatementContext,
  ): ElseIfStatement => {
    let cond = this.exprVisitor.visit(ctx.expression());
    let block = this.blockVisitor.visitBlock(ctx.block());
    return new ElseIfStatement(cond, block);
  };

  visitElseStatement: (ctx: ElseStatementContext) => ElseStatement = (
    ctx: ElseStatementContext,
  ): ElseStatement => {
    let block = this.blockVisitor.visitBlock(ctx.block());
    return new ElseStatement(block);
  };

  visitStatement: (ctx: StatementContext) => Statement = (
    ctx: StatementContext,
  ) => {
    return new Statement(
      this.visit(
        ctx.assignment() ??
          ctx.conditionalStatement() ??
          ctx.consoleLogExpression() ??
          ctx.functionCall() ??
          ctx.functionDeclaration() ??
          ctx.useEffect() ??
          ctx.useRef() ??
          ctx.useState() ??
          ctx.variableDeclaration(),
      ),
    );
  };
}
