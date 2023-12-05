// Generated from React.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MultiplicationContext } from "./ReactParser";
import { DivisionContext } from "./ReactParser";
import { AdditionContext } from "./ReactParser";
import { SubtractionContext } from "./ReactParser";
import { MoreThanContext } from "./ReactParser";
import { MoreThanOrEqualContext } from "./ReactParser";
import { LessThanOrEqualContext } from "./ReactParser";
import { LessThanContext } from "./ReactParser";
import { EqualContext } from "./ReactParser";
import { NotEqualContext } from "./ReactParser";
import { ExprContext } from "./ReactParser";
import { FuncCallContext } from "./ReactParser";
import { ArrowFuncContext } from "./ReactParser";
import { FuncExprContext } from "./ReactParser";
import { IDContext } from "./ReactParser";
import { LitteralContext } from "./ReactParser";
import { ProgramContext } from "./ReactParser";
import { StatementContext } from "./ReactParser";
import { VariableDeclarationContext } from "./ReactParser";
import { VariableTypeContext } from "./ReactParser";
import { FunctionDeclarationContext } from "./ReactParser";
import { AssignmentContext } from "./ReactParser";
import { FunctionExpressionContext } from "./ReactParser";
import { ParametersContext } from "./ReactParser";
import { BlockContext } from "./ReactParser";
import { ExpressionStatementContext } from "./ReactParser";
import { ExpressionContext } from "./ReactParser";
import { FunctionCallContext } from "./ReactParser";
import { ArrowFunctionContext } from "./ReactParser";
import { ArgumentsContext } from "./ReactParser";
import { ConsoleLogExpressionContext } from "./ReactParser";
import { ConsoleLogStatementContext } from "./ReactParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ReactParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ReactVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `Multiplication`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplication?: (ctx: MultiplicationContext) => Result;

	/**
	 * Visit a parse tree produced by the `Division`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivision?: (ctx: DivisionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Addition`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddition?: (ctx: AdditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Subtraction`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtraction?: (ctx: SubtractionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MoreThan`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMoreThan?: (ctx: MoreThanContext) => Result;

	/**
	 * Visit a parse tree produced by the `MoreThanOrEqual`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMoreThanOrEqual?: (ctx: MoreThanOrEqualContext) => Result;

	/**
	 * Visit a parse tree produced by the `LessThanOrEqual`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThanOrEqual?: (ctx: LessThanOrEqualContext) => Result;

	/**
	 * Visit a parse tree produced by the `LessThan`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThan?: (ctx: LessThanContext) => Result;

	/**
	 * Visit a parse tree produced by the `Equal`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqual?: (ctx: EqualContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotEqual`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotEqual?: (ctx: NotEqualContext) => Result;

	/**
	 * Visit a parse tree produced by the `Expr`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `FuncCall`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncCall?: (ctx: FuncCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrowFunc`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrowFunc?: (ctx: ArrowFuncContext) => Result;

	/**
	 * Visit a parse tree produced by the `FuncExpr`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncExpr?: (ctx: FuncExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ID`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitID?: (ctx: IDContext) => Result;

	/**
	 * Visit a parse tree produced by the `Litteral`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLitteral?: (ctx: LitteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.variableType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableType?: (ctx: VariableTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.functionExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpression?: (ctx: FunctionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.arrowFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrowFunction?: (ctx: ArrowFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.consoleLogExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConsoleLogExpression?: (ctx: ConsoleLogExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactParser.consoleLogStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConsoleLogStatement?: (ctx: ConsoleLogStatementContext) => Result;
}
