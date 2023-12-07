// Generated from React.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./ReactParser";
import { StatementContext } from "./ReactParser";
import { VariableDeclarationContext } from "./ReactParser";
import { VariableTypeContext } from "./ReactParser";
import { FunctionDeclarationContext } from "./ReactParser";
import { AssignmentContext } from "./ReactParser";
import { FunctionExpressionContext } from "./ReactParser";
import { ParametersContext } from "./ReactParser";
import { BlockContext } from "./ReactParser";
import { MultiplicationContext } from "./ReactParser";
import { AdditionContext } from "./ReactParser";
import { NotEqualContext } from "./ReactParser";
import { LessThanOrEqualContext } from "./ReactParser";
import { MoreThanOrEqualContext } from "./ReactParser";
import { StringContext } from "./ReactParser";
import { LessThanContext } from "./ReactParser";
import { IdentifierContext } from "./ReactParser";
import { SubtractionContext } from "./ReactParser";
import { NumberContext } from "./ReactParser";
import { EqualContext } from "./ReactParser";
import { BracedExpressionContext } from "./ReactParser";
import { DivisionContext } from "./ReactParser";
import { MoreThanContext } from "./ReactParser";
import { FunctionalExpressionContext } from "./ReactParser";
import { FuncExprContext } from "./ReactParser";
import { FunctionCallContext } from "./ReactParser";
import { ArrowFunctionContext } from "./ReactParser";
import { ArgumentsContext } from "./ReactParser";
import { ConsoleLogExpressionContext } from "./ReactParser";
import { UseStateContext } from "./ReactParser";
import { UseEffectContext } from "./ReactParser";
import { UseRefContext } from "./ReactParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ReactParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class ReactVisitor<Result> extends ParseTreeVisitor<Result> {
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
	 * Visit a parse tree produced by the `Multiplication`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplication?: (ctx: MultiplicationContext) => Result;
	/**
	 * Visit a parse tree produced by the `Addition`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddition?: (ctx: AdditionContext) => Result;
	/**
	 * Visit a parse tree produced by the `NotEqual`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotEqual?: (ctx: NotEqualContext) => Result;
	/**
	 * Visit a parse tree produced by the `LessThanOrEqual`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThanOrEqual?: (ctx: LessThanOrEqualContext) => Result;
	/**
	 * Visit a parse tree produced by the `MoreThanOrEqual`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMoreThanOrEqual?: (ctx: MoreThanOrEqualContext) => Result;
	/**
	 * Visit a parse tree produced by the `String`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
	/**
	 * Visit a parse tree produced by the `LessThan`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThan?: (ctx: LessThanContext) => Result;
	/**
	 * Visit a parse tree produced by the `Identifier`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `Subtraction`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtraction?: (ctx: SubtractionContext) => Result;
	/**
	 * Visit a parse tree produced by the `Number`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
	/**
	 * Visit a parse tree produced by the `Equal`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqual?: (ctx: EqualContext) => Result;
	/**
	 * Visit a parse tree produced by the `BracedExpression`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracedExpression?: (ctx: BracedExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `Division`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivision?: (ctx: DivisionContext) => Result;
	/**
	 * Visit a parse tree produced by the `MoreThan`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMoreThan?: (ctx: MoreThanContext) => Result;
	/**
	 * Visit a parse tree produced by the `FunctionalExpression`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionalExpression?: (ctx: FunctionalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `ReactParser.funcExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncExpr?: (ctx: FuncExprContext) => Result;
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
	 * Visit a parse tree produced by `ReactParser.useState`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseState?: (ctx: UseStateContext) => Result;
	/**
	 * Visit a parse tree produced by `ReactParser.useEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseEffect?: (ctx: UseEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `ReactParser.useRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseRef?: (ctx: UseRefContext) => Result;
}

