// Generated from React.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
import { BracedExpressionContext } from "./ReactParser";
import { FunctionalExpressionContext } from "./ReactParser";
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
import { FuncExprContext } from "./ReactParser";
import { FunctionCallContext } from "./ReactParser";
import { ArrowFunctionContext } from "./ReactParser";
import { ArgumentsContext } from "./ReactParser";
import { ConsoleLogExpressionContext } from "./ReactParser";
import { ConsoleLogStatementContext } from "./ReactParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ReactParser`.
 */
export interface ReactListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Multiplication`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplication?: (ctx: MultiplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `Multiplication`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplication?: (ctx: MultiplicationContext) => void;

	/**
	 * Enter a parse tree produced by the `Division`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterDivision?: (ctx: DivisionContext) => void;
	/**
	 * Exit a parse tree produced by the `Division`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitDivision?: (ctx: DivisionContext) => void;

	/**
	 * Enter a parse tree produced by the `Addition`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddition?: (ctx: AdditionContext) => void;
	/**
	 * Exit a parse tree produced by the `Addition`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddition?: (ctx: AdditionContext) => void;

	/**
	 * Enter a parse tree produced by the `Subtraction`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSubtraction?: (ctx: SubtractionContext) => void;
	/**
	 * Exit a parse tree produced by the `Subtraction`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSubtraction?: (ctx: SubtractionContext) => void;

	/**
	 * Enter a parse tree produced by the `MoreThan`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMoreThan?: (ctx: MoreThanContext) => void;
	/**
	 * Exit a parse tree produced by the `MoreThan`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMoreThan?: (ctx: MoreThanContext) => void;

	/**
	 * Enter a parse tree produced by the `MoreThanOrEqual`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMoreThanOrEqual?: (ctx: MoreThanOrEqualContext) => void;
	/**
	 * Exit a parse tree produced by the `MoreThanOrEqual`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMoreThanOrEqual?: (ctx: MoreThanOrEqualContext) => void;

	/**
	 * Enter a parse tree produced by the `LessThanOrEqual`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLessThanOrEqual?: (ctx: LessThanOrEqualContext) => void;
	/**
	 * Exit a parse tree produced by the `LessThanOrEqual`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLessThanOrEqual?: (ctx: LessThanOrEqualContext) => void;

	/**
	 * Enter a parse tree produced by the `LessThan`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLessThan?: (ctx: LessThanContext) => void;
	/**
	 * Exit a parse tree produced by the `LessThan`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLessThan?: (ctx: LessThanContext) => void;

	/**
	 * Enter a parse tree produced by the `Equal`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqual?: (ctx: EqualContext) => void;
	/**
	 * Exit a parse tree produced by the `Equal`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqual?: (ctx: EqualContext) => void;

	/**
	 * Enter a parse tree produced by the `NotEqual`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNotEqual?: (ctx: NotEqualContext) => void;
	/**
	 * Exit a parse tree produced by the `NotEqual`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNotEqual?: (ctx: NotEqualContext) => void;

	/**
	 * Enter a parse tree produced by the `BracedExpression`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBracedExpression?: (ctx: BracedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BracedExpression`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBracedExpression?: (ctx: BracedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `FunctionalExpression`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionalExpression?: (ctx: FunctionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionalExpression`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionalExpression?: (ctx: FunctionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ID`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterID?: (ctx: IDContext) => void;
	/**
	 * Exit a parse tree produced by the `ID`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitID?: (ctx: IDContext) => void;

	/**
	 * Enter a parse tree produced by the `Litteral`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLitteral?: (ctx: LitteralContext) => void;
	/**
	 * Exit a parse tree produced by the `Litteral`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLitteral?: (ctx: LitteralContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.variableType`.
	 * @param ctx the parse tree
	 */
	enterVariableType?: (ctx: VariableTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.variableType`.
	 * @param ctx the parse tree
	 */
	exitVariableType?: (ctx: VariableTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.functionExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpression?: (ctx: FunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.functionExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpression?: (ctx: FunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.funcExpr`.
	 * @param ctx the parse tree
	 */
	enterFuncExpr?: (ctx: FuncExprContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.funcExpr`.
	 * @param ctx the parse tree
	 */
	exitFuncExpr?: (ctx: FuncExprContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.arrowFunction`.
	 * @param ctx the parse tree
	 */
	enterArrowFunction?: (ctx: ArrowFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.arrowFunction`.
	 * @param ctx the parse tree
	 */
	exitArrowFunction?: (ctx: ArrowFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.consoleLogExpression`.
	 * @param ctx the parse tree
	 */
	enterConsoleLogExpression?: (ctx: ConsoleLogExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.consoleLogExpression`.
	 * @param ctx the parse tree
	 */
	exitConsoleLogExpression?: (ctx: ConsoleLogExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactParser.consoleLogStatement`.
	 * @param ctx the parse tree
	 */
	enterConsoleLogStatement?: (ctx: ConsoleLogStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.consoleLogStatement`.
	 * @param ctx the parse tree
	 */
	exitConsoleLogStatement?: (ctx: ConsoleLogStatementContext) => void;
}

