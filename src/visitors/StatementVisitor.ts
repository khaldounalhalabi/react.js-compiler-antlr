import ReactVisitor from "../antlr/ReactVisitor.ts";
import { Statement } from "../ast/abstracts/Statement.ts";
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
// @ts-ignore
import { TerminalNode } from "antlr4";
import { FunctionExpression } from "../ast/Expressions/FunctionalExpression/FunctionExpression.ts";
import { FunctionCall } from "../ast/Expressions/FunctionalExpression/FunctionCall.ts";
import { Arguments } from "../ast/Expressions/Arguments.ts";
import { ConditionalStatement } from "../ast/statements/ConditionalStatement.ts";
import { ElseIfStatement } from "../ast/statements/ElseIfStatement.ts";
import { IfStatement } from "../ast/statements/IfStatement.ts";
import { ElseStatement } from "../ast/statements/ElseStatement.ts";
import { SymbolTable, SymbolTableEntry } from "../libs/SymbolTable.ts";
import { ArrowFunction } from "../ast/Expressions/FunctionalExpression/ArrowFunction.ts";
import { Parameter } from "../ast/Expressions/Parameters.ts";

export class StatementVisitor extends ReactVisitor<Statement> {
  [x: string]: any;

  public symbolTable: SymbolTable;
  public semanticErrors: string[];

  public exprVisitor: ExpressionVisitor;

  public blockVisitor: BlockVisitor;

  public funcExprVisitor: FunctionalExpressionVisitor;

  public parameterVisitor: ParameterVisitor;

  constructor(
    exprVisitor: ExpressionVisitor,
    blockVisitor: BlockVisitor,
    funcExprVisitor: FunctionalExpressionVisitor,
    parameterVisitor: ParameterVisitor,
    semanticErrors: string[],
    identifiers: SymbolTable,
  ) {
    super();
    this.exprVisitor = exprVisitor;
    this.blockVisitor = blockVisitor;
    this.funcExprVisitor = funcExprVisitor;
    this.parameterVisitor = parameterVisitor;
    this.semanticErrors = semanticErrors;
    this.symbolTable = identifiers;
  }

  visitVariableDeclaration: (
    ctx: VariableDeclarationContext,
  ) => VariableDeclaration = (ctx: VariableDeclarationContext) => {
    let varType: VariableType = this.visitVariableType(ctx.variableType());
    let id: Identifier = this.funcExprVisitor.visitID(ctx.Identifier());
    let expression: Expression = this.funcExprVisitor.visit(ctx.expression());
    new VariableDeclaration(varType, id, expression);
    if (this.symbolTable.hasEntry(id.name)) {
      this.semanticErrors.push(
        "Error : Variable " +
          id.name +
          " Already Declared (" +
          this.symbolTable.getEntry(id.name)?.line +
          " , " +
          this.symbolTable.getEntry(id.name)?.column +
          ")",
      );
    } else if (
      expression instanceof FunctionExpression ||
      expression instanceof ArrowFunction
    ) {
      console.log('asdasdasdasdasdasdasdasdasdaddddddddddddddddddddddddd');
      this.symbolTable.addEntry(
        id.name,
        ctx.start.line,
        ctx.start.column,
        true,
        expression.toString(),
        this.blockVisitor.symbolTable,
        varType.varType,
        undefined,
      );
      this.blockVisitor.symbolTable = new SymbolTable();
    } else {
      this.symbolTable.addEntry(
        id.name,
        ctx.start.line,
        ctx.start.column,
        false,
        undefined,
        undefined,
        varType.varType,
        expression.toString(),
      );
    }

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

    if (!this.symbolTable.hasEntry(id.name)) {
      this.semanticErrors.push(
        "Error : Variable " +
          id.name +
          " Doesn't Declared (" +
          ctx.start.line +
          " , " +
          ctx.start.column +
          ")",
      );
    } else {
      let entry = this.symbolTable.getEntry(id.name);
      if (
        expression instanceof FunctionExpression ||
        expression instanceof ArrowFunction
      ) {
        entry = new SymbolTableEntry(
          id.name,
          ctx.start.line,
          ctx.start.column,
          true,
          this.blockVisitor.symbolTable,
          expression.toString(),
          entry?.idType,
          undefined,
        );
        this.blockVisitor.symbolTable = new SymbolTable();
      } else {
        entry = new SymbolTableEntry(
          id.name,
          ctx.start.line,
          ctx.start.column,
          false,
          undefined,
          undefined,
          entry?.idType,
          expression.toString(),
        );
      }

      this.symbolTable.setEntry(id.name, entry);
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

    let funcDecl = new FunctionDeclaration(id, block, parameters);

    if (this.symbolTable.hasEntry(id.name)) {
      this.semanticErrors.push(
        "Error : Function " +
          id.name +
          " Already Declared (" +
          this.symbolTable.getEntry(id.name)?.line +
          " , " +
          this.symbolTable.getEntry(id.name)?.column +
          ")",
      );
    } else {
      this.symbolTable.addEntry(
        id.name,
        ctx.start.line,
        ctx.start.column,
        true,
        funcDecl.toString(),
        block.symbolTable,
        undefined,
        undefined,
      );
    }

    return funcDecl;
  };

  visitUseEffect: (ctx: UseEffectContext) => UseEffect = (
    ctx: UseEffectContext,
  ) => {
    let funcCtx = ctx.functionExpression();
    let func = this.funcExprVisitor.visit(funcCtx);

    let paramCtx:
      | ParametersContext
      | { start: { column: string } }[]
      | undefined = undefined;
    let params: Parameter[] | undefined = undefined;

    if (ctx.parameters()) {
      paramCtx = ctx.parameters();
      params = this.parameterVisitor.visitParameters(paramCtx);
      params.forEach((param) => {
        if (!this.symbolTable.hasEntry(param.identifier.name)) {
          this.semanticErrors.push(
            "Error : Variable " +
              param.identifier.name +
              "Don't has declaration (" +
              paramCtx[0].start.line +
              " , " +
              paramCtx[0].start.column +
              ")",
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

    let useRef = new UseRef(id, expr);

    if (this.symbolTable.hasEntry(id.name)) {
      this.semanticErrors.push(
        "Error : Variable " +
          id.name +
          "Don't has declaration (" +
          idCtx.start.line +
          " , " +
          idCtx.start.column +
          ")",
      );
    } else {
      this.symbolTable.addEntry(
        id.name,
        ctx.start.line,
        ctx.start.column,
        false,
        useRef.toString(),
        undefined,
        "const",
        expr?.toString(),
      );
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

    if (this.symbolTable.hasEntry(ids[0].name)) {
      this.semanticErrors.push(
        "Error : Variable " +
          ids[0].name +
          "Already Declared (" +
          this.symbolTable.getEntry(ids[0].name)?.line +
          " , " +
          this.symbolTable.getEntry(ids[0].name)?.column +
          ")",
      );
    } else if (this.symbolTable.hasEntry(ids[1].name)) {
      this.semanticErrors.push(
        "Error : Variable " +
          ids[0].name +
          "Already Declared (" +
          this.symbolTable.getEntry(ids[0].name)?.line +
          " , " +
          this.symbolTable.getEntry(ids[0].name)?.column +
          ")",
      );
    } else {
      this.symbolTable.addEntry(
        ids[0].name,
        ctx.start.line,
        ctx.start.column,
        false,
        undefined,
        undefined,
        undefined,
        expression?.toString(),
      );

      this.symbolTable.addEntry(
        ids[1].name,
        ctx.start.line,
        ctx.start.column,
        true,
        undefined,
        undefined,
        "setState",
        expression?.toString(),
      );
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

    if (!this.symbolTable.hasEntry(id.name)) {
      this.semanticErrors.push(
        "Error : Variable " +
          id.name +
          " Doesn't has a Declaration (" +
          ctx.start.line +
          " , " +
          ctx.start.column +
          ")",
      );
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
}
