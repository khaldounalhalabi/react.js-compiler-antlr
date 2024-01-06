// Generated from React.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./ReactParser";
import { StatementContext } from "./ReactParser";
import { VariableDeclarationContext } from "./ReactParser";
import { VariableTypeContext } from "./ReactParser";
import { FunctionDeclarationContext } from "./ReactParser";
import { AssignmentContext } from "./ReactParser";
import { FunctionExpressionContext } from "./ReactParser";
import { ParametersContext } from "./ReactParser";
import { ReturnContext } from "./ReactParser";
import { BlockContext } from "./ReactParser";
import { TemplateStringContext } from "./ReactParser";
import { MultiplicationContext } from "./ReactParser";
import { AdditionContext } from "./ReactParser";
import { NotEqualContext } from "./ReactParser";
import { LessThanOrEqualContext } from "./ReactParser";
import { MoreThanOrEqualContext } from "./ReactParser";
import { StringContext } from "./ReactParser";
import { NullishCoalescingContext } from "./ReactParser";
import { LessThanContext } from "./ReactParser";
import { SubtractionContext } from "./ReactParser";
import { NumberContext } from "./ReactParser";
import { EqualContext } from "./ReactParser";
import { BracedExpressionContext } from "./ReactParser";
import { TernaryConditionContext } from "./ReactParser";
import { DivisionContext } from "./ReactParser";
import { IDContext } from "./ReactParser";
import { MoreThanContext } from "./ReactParser";
import { FunctionalExpressionContext } from "./ReactParser";
import { FuncExprContext } from "./ReactParser";
import { FunctionCallContext } from "./ReactParser";
import { ArrowFunctionContext } from "./ReactParser";
import { ArgumentsContext } from "./ReactParser";
import { ConsoleLogExpressionContext } from "./ReactParser";
import { TemplateContext } from "./ReactParser";
import { IfStatementContext } from "./ReactParser";
import { ElseStatementContext } from "./ReactParser";
import { ElseIfStatementContext } from "./ReactParser";
import { ConditionalStatementContext } from "./ReactParser";
import { UseStateContext } from "./ReactParser";
import { UseEffectContext } from "./ReactParser";
import { UseRefContext } from "./ReactParser";
import { JsxElementContext } from "./ReactParser";
import { JsxElementFullContext } from "./ReactParser";
import { SelfClosingJsxElementContext } from "./ReactParser";
import { JsxTagNameContext } from "./ReactParser";
import { JsxAttributeContext } from "./ReactParser";
import { JsxAttributeNameContext } from "./ReactParser";
import { JsxAttributeValueContext } from "./ReactParser";
import { JsxElementContentContext } from "./ReactParser";
import { JsxComponentFullContext } from "./ReactParser";
import { SelfClosingComponentContext } from "./ReactParser";
import { ComponentPropsContext } from "./ReactParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ReactParser`.
 */
export default class ReactListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `ReactParser.return`.
	 * @param ctx the parse tree
	 */
	enterReturn?: (ctx: ReturnContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.return`.
	 * @param ctx the parse tree
	 */
	exitReturn?: (ctx: ReturnContext) => void;
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
	 * Enter a parse tree produced by the `TemplateString`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTemplateString?: (ctx: TemplateStringContext) => void;
	/**
	 * Exit a parse tree produced by the `TemplateString`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTemplateString?: (ctx: TemplateStringContext) => void;
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
	 * Enter a parse tree produced by the `String`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by the `String`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
	/**
	 * Enter a parse tree produced by the `NullishCoalescing`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNullishCoalescing?: (ctx: NullishCoalescingContext) => void;
	/**
	 * Exit a parse tree produced by the `NullishCoalescing`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNullishCoalescing?: (ctx: NullishCoalescingContext) => void;
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
	 * Enter a parse tree produced by the `Number`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by the `Number`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
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
	 * Enter a parse tree produced by the `TernaryCondition`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTernaryCondition?: (ctx: TernaryConditionContext) => void;
	/**
	 * Exit a parse tree produced by the `TernaryCondition`
	 * labeled alternative in `ReactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTernaryCondition?: (ctx: TernaryConditionContext) => void;
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
	 * Enter a parse tree produced by `ReactParser.template`.
	 * @param ctx the parse tree
	 */
	enterTemplate?: (ctx: TemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.template`.
	 * @param ctx the parse tree
	 */
	exitTemplate?: (ctx: TemplateContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.elseIfStatement`.
	 * @param ctx the parse tree
	 */
	enterElseIfStatement?: (ctx: ElseIfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.elseIfStatement`.
	 * @param ctx the parse tree
	 */
	exitElseIfStatement?: (ctx: ElseIfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.conditionalStatement`.
	 * @param ctx the parse tree
	 */
	enterConditionalStatement?: (ctx: ConditionalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.conditionalStatement`.
	 * @param ctx the parse tree
	 */
	exitConditionalStatement?: (ctx: ConditionalStatementContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.useState`.
	 * @param ctx the parse tree
	 */
	enterUseState?: (ctx: UseStateContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.useState`.
	 * @param ctx the parse tree
	 */
	exitUseState?: (ctx: UseStateContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.useEffect`.
	 * @param ctx the parse tree
	 */
	enterUseEffect?: (ctx: UseEffectContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.useEffect`.
	 * @param ctx the parse tree
	 */
	exitUseEffect?: (ctx: UseEffectContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.useRef`.
	 * @param ctx the parse tree
	 */
	enterUseRef?: (ctx: UseRefContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.useRef`.
	 * @param ctx the parse tree
	 */
	exitUseRef?: (ctx: UseRefContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.jsxElement`.
	 * @param ctx the parse tree
	 */
	enterJsxElement?: (ctx: JsxElementContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.jsxElement`.
	 * @param ctx the parse tree
	 */
	exitJsxElement?: (ctx: JsxElementContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.jsxElementFull`.
	 * @param ctx the parse tree
	 */
	enterJsxElementFull?: (ctx: JsxElementFullContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.jsxElementFull`.
	 * @param ctx the parse tree
	 */
	exitJsxElementFull?: (ctx: JsxElementFullContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.selfClosingJsxElement`.
	 * @param ctx the parse tree
	 */
	enterSelfClosingJsxElement?: (ctx: SelfClosingJsxElementContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.selfClosingJsxElement`.
	 * @param ctx the parse tree
	 */
	exitSelfClosingJsxElement?: (ctx: SelfClosingJsxElementContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.jsxTagName`.
	 * @param ctx the parse tree
	 */
	enterJsxTagName?: (ctx: JsxTagNameContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.jsxTagName`.
	 * @param ctx the parse tree
	 */
	exitJsxTagName?: (ctx: JsxTagNameContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.jsxAttribute`.
	 * @param ctx the parse tree
	 */
	enterJsxAttribute?: (ctx: JsxAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.jsxAttribute`.
	 * @param ctx the parse tree
	 */
	exitJsxAttribute?: (ctx: JsxAttributeContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.jsxAttributeName`.
	 * @param ctx the parse tree
	 */
	enterJsxAttributeName?: (ctx: JsxAttributeNameContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.jsxAttributeName`.
	 * @param ctx the parse tree
	 */
	exitJsxAttributeName?: (ctx: JsxAttributeNameContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.jsxAttributeValue`.
	 * @param ctx the parse tree
	 */
	enterJsxAttributeValue?: (ctx: JsxAttributeValueContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.jsxAttributeValue`.
	 * @param ctx the parse tree
	 */
	exitJsxAttributeValue?: (ctx: JsxAttributeValueContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.jsxElementContent`.
	 * @param ctx the parse tree
	 */
	enterJsxElementContent?: (ctx: JsxElementContentContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.jsxElementContent`.
	 * @param ctx the parse tree
	 */
	exitJsxElementContent?: (ctx: JsxElementContentContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.jsxComponentFull`.
	 * @param ctx the parse tree
	 */
	enterJsxComponentFull?: (ctx: JsxComponentFullContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.jsxComponentFull`.
	 * @param ctx the parse tree
	 */
	exitJsxComponentFull?: (ctx: JsxComponentFullContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.selfClosingComponent`.
	 * @param ctx the parse tree
	 */
	enterSelfClosingComponent?: (ctx: SelfClosingComponentContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.selfClosingComponent`.
	 * @param ctx the parse tree
	 */
	exitSelfClosingComponent?: (ctx: SelfClosingComponentContext) => void;
	/**
	 * Enter a parse tree produced by `ReactParser.componentProps`.
	 * @param ctx the parse tree
	 */
	enterComponentProps?: (ctx: ComponentPropsContext) => void;
	/**
	 * Exit a parse tree produced by `ReactParser.componentProps`.
	 * @param ctx the parse tree
	 */
	exitComponentProps?: (ctx: ComponentPropsContext) => void;
}

