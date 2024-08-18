// Generated from React.g4 by ANTLR 4.13.1
// @ts-ignore
import {ParseTreeVisitor} from "antlr4";

import {
  AdditionContext,
  ArgumentsContext,
  ArrayAccessContext,
  ArrayLiteralContext,
  ArrowFunctionContext,
  AssignmentContext,
  BlockContext,
  BracedExpressionContext,
  ComponentPropsContext,
  ConditionalStatementContext,
  ConsoleLogExpressionContext,
  DivisionContext,
  ElseIfStatementContext,
  ElseStatementContext,
  EqualContext,
  FuncExprContext,
  FunctionalExpressionContext,
  FunctionCallContext,
  FunctionDeclarationContext,
  FunctionExpressionContext,
  IDContext,
  IfStatementContext,
  JsxAttributeContext,
  JsxAttributeNameContext,
  JsxAttributeValueContext,
  JsxComponentFullContext,
  JsxElementContentContext,
  JsxElementContext,
  JsxElementFullContext,
  JsxTagNameContext,
  LessThanContext,
  LessThanOrEqualContext,
  MoreThanContext,
  MoreThanOrEqualContext,
  MultiplicationContext,
  NotEqualContext,
  NullishCoalescingContext,
  NumberContext,
  ParametersContext,
  ProgramContext,
  ReturnContext,
  SelfClosingComponentContext,
  SelfClosingJsxElementContext,
  StatementContext,
  StringContext,
  SubtractionContext,
  TemplateContext,
  TemplateStringContext,
  TernaryConditionContext,
  UseEffectContext,
  UseRefContext,
  UseStateContext,
  VariableDeclarationContext,
  VariableTypeContext
} from "./ReactParser";

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ReactParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class ReactVisitor<Result> extends ParseTreeVisitor<Result> {
  [visit: string]: any;

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
   * Visit a parse tree produced by `ReactParser.return`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReturn?: (ctx: ReturnContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.block`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlock?: (ctx: BlockContext) => Result;
  /**
   * Visit a parse tree produced by the `TemplateString`
   * labeled alternative in `ReactParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTemplateString?: (ctx: TemplateStringContext) => Result;
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
   * Visit a parse tree produced by the `ArrayLiteral`
   * labeled alternative in `ReactParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayLiteral?: (ctx: ArrayLiteralContext) => Result;
  /**
   * Visit a parse tree produced by the `NullishCoalescing`
   * labeled alternative in `ReactParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNullishCoalescing?: (ctx: NullishCoalescingContext) => Result;
  /**
   * Visit a parse tree produced by the `ArrayAccess`
   * labeled alternative in `ReactParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayAccess?: (ctx: ArrayAccessContext) => Result;
  /**
   * Visit a parse tree produced by the `LessThan`
   * labeled alternative in `ReactParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLessThan?: (ctx: LessThanContext) => Result;
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
   * Visit a parse tree produced by the `TernaryCondition`
   * labeled alternative in `ReactParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTernaryCondition?: (ctx: TernaryConditionContext) => Result;
  /**
   * Visit a parse tree produced by the `Division`
   * labeled alternative in `ReactParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDivision?: (ctx: DivisionContext) => Result;
  /**
   * Visit a parse tree produced by the `ID`
   * labeled alternative in `ReactParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitID?: (ctx: IDContext) => Result;
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
   * Visit a parse tree produced by `ReactParser.template`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTemplate?: (ctx: TemplateContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.ifStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfStatement?: (ctx: IfStatementContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.elseStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitElseStatement?: (ctx: ElseStatementContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.elseIfStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitElseIfStatement?: (ctx: ElseIfStatementContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.conditionalStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalStatement?: (ctx: ConditionalStatementContext) => Result;
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
  /**
   * Visit a parse tree produced by `ReactParser.jsxElement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJsxElement?: (ctx: JsxElementContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.jsxElementFull`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJsxElementFull?: (ctx: JsxElementFullContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.selfClosingJsxElement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelfClosingJsxElement?: (ctx: SelfClosingJsxElementContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.jsxTagName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJsxTagName?: (ctx: JsxTagNameContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.jsxAttribute`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJsxAttribute?: (ctx: JsxAttributeContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.jsxAttributeName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJsxAttributeName?: (ctx: JsxAttributeNameContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.jsxAttributeValue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJsxAttributeValue?: (ctx: JsxAttributeValueContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.jsxElementContent`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJsxElementContent?: (ctx: JsxElementContentContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.jsxComponentFull`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJsxComponentFull?: (ctx: JsxComponentFullContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.selfClosingComponent`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelfClosingComponent?: (ctx: SelfClosingComponentContext) => Result;
  /**
   * Visit a parse tree produced by `ReactParser.componentProps`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitComponentProps?: (ctx: ComponentPropsContext) => Result;
}
