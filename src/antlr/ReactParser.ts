// Generated from React.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
// @ts-ignore
import { NotNull } from "antlr4ts/Decorators";
// @ts-ignore
import { NoViableAltException } from "antlr4ts/NoViableAltException";
// @ts-ignore
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
// @ts-ignore
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
// @ts-ignore
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ReactListener } from "./ReactListener";
import { ReactVisitor } from "./ReactVisitor";


export class ReactParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly Literal = 24;
	public static readonly IntegerLiteral = 25;
	public static readonly StringLiteral = 26;
	public static readonly Identifier = 27;
	public static readonly WS = 28;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_variableDeclaration = 2;
	public static readonly RULE_variableType = 3;
	public static readonly RULE_functionDeclaration = 4;
	public static readonly RULE_assignment = 5;
	public static readonly RULE_functionExpression = 6;
	public static readonly RULE_parameters = 7;
	public static readonly RULE_block = 8;
	public static readonly RULE_expressionStatement = 9;
	public static readonly RULE_expression = 10;
	public static readonly RULE_functionCall = 11;
	public static readonly RULE_arrowFunction = 12;
	public static readonly RULE_arguments = 13;
	public static readonly RULE_consoleLogExpression = 14;
	public static readonly RULE_consoleLogStatement = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "variableDeclaration", "variableType", "functionDeclaration", 
		"assignment", "functionExpression", "parameters", "block", "expressionStatement", 
		"expression", "functionCall", "arrowFunction", "arguments", "consoleLogExpression", 
		"consoleLogStatement",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "';'", "'let'", "'var'", "'const'", "'function'", "'('", 
		"')'", "','", "'{'", "'}'", "'*'", "'/'", "'+'", "'-'", "'>'", "'>='", 
		"'<='", "'<'", "'=='", "'!='", "'=>'", "'console.log'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "Literal", "IntegerLiteral", "StringLiteral", 
		"Identifier", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ReactParser._LITERAL_NAMES, ReactParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ReactParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "React.g4"; }

	// @Override
	public get ruleNames(): string[] { return ReactParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ReactParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ReactParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ReactParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 32;
				this.statement();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReactParser.T__2) | (1 << ReactParser.T__3) | (1 << ReactParser.T__4) | (1 << ReactParser.T__5) | (1 << ReactParser.T__6) | (1 << ReactParser.T__22) | (1 << ReactParser.Literal) | (1 << ReactParser.Identifier))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ReactParser.RULE_statement);
		try {
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 37;
				this.variableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 38;
				this.functionDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 39;
				this.expressionStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 40;
				this.consoleLogStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 41;
				this.assignment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ReactParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.variableType();
			this.state = 45;
			this.match(ReactParser.Identifier);
			this.state = 46;
			this.match(ReactParser.T__0);
			this.state = 47;
			this.expression(0);
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactParser.T__1) {
				{
				this.state = 48;
				this.match(ReactParser.T__1);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableType(): VariableTypeContext {
		let _localctx: VariableTypeContext = new VariableTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ReactParser.RULE_variableType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReactParser.T__2) | (1 << ReactParser.T__3) | (1 << ReactParser.T__4))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ReactParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(ReactParser.T__5);
			this.state = 54;
			this.match(ReactParser.Identifier);
			this.state = 55;
			this.match(ReactParser.T__6);
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactParser.Identifier) {
				{
				this.state = 56;
				this.parameters();
				}
			}

			this.state = 59;
			this.match(ReactParser.T__7);
			this.state = 60;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ReactParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(ReactParser.Identifier);
			this.state = 63;
			this.match(ReactParser.T__0);
			this.state = 64;
			this.expression(0);
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactParser.T__1) {
				{
				this.state = 65;
				this.match(ReactParser.T__1);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpression(): FunctionExpressionContext {
		let _localctx: FunctionExpressionContext = new FunctionExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ReactParser.RULE_functionExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(ReactParser.T__5);
			this.state = 69;
			this.match(ReactParser.T__6);
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactParser.Identifier) {
				{
				this.state = 70;
				this.parameters();
				}
			}

			this.state = 73;
			this.match(ReactParser.T__7);
			this.state = 74;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ReactParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.match(ReactParser.Identifier);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReactParser.T__8) {
				{
				{
				this.state = 77;
				this.match(ReactParser.T__8);
				this.state = 78;
				this.match(ReactParser.Identifier);
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ReactParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(ReactParser.T__9);
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReactParser.T__2) | (1 << ReactParser.T__3) | (1 << ReactParser.T__4) | (1 << ReactParser.T__5) | (1 << ReactParser.T__6) | (1 << ReactParser.T__22) | (1 << ReactParser.Literal) | (1 << ReactParser.Identifier))) !== 0)) {
				{
				{
				this.state = 85;
				this.statement();
				}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 91;
			this.match(ReactParser.T__10);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ReactParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.expression(0);
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactParser.T__1) {
				{
				this.state = 94;
				this.match(ReactParser.T__1);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		// @ts-ignore
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, ReactParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				_localctx = new ExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 98;
				this.match(ReactParser.T__6);
				this.state = 99;
				this.expression(0);
				this.state = 100;
				this.match(ReactParser.T__7);
				}
				break;

			case 2:
				{
				_localctx = new FuncCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 102;
				this.functionCall();
				}
				break;

			case 3:
				{
				_localctx = new ArrowFuncContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 103;
				this.arrowFunction();
				}
				break;

			case 4:
				{
				_localctx = new FuncExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 104;
				this.functionExpression();
				}
				break;

			case 5:
				{
				_localctx = new IDContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 105;
				this.match(ReactParser.Identifier);
				}
				break;

			case 6:
				{
				_localctx = new LitteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 106;
				this.match(ReactParser.Literal);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 141;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 139;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 109;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 110;
						this.match(ReactParser.T__11);
						this.state = 111;
						this.expression(17);
						}
						break;

					case 2:
						{
						_localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 112;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 113;
						this.match(ReactParser.T__12);
						this.state = 114;
						this.expression(16);
						}
						break;

					case 3:
						{
						_localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 115;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 116;
						this.match(ReactParser.T__13);
						this.state = 117;
						this.expression(15);
						}
						break;

					case 4:
						{
						_localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 118;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 119;
						this.match(ReactParser.T__14);
						this.state = 120;
						this.expression(14);
						}
						break;

					case 5:
						{
						_localctx = new MoreThanContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 121;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 122;
						this.match(ReactParser.T__15);
						this.state = 123;
						this.expression(13);
						}
						break;

					case 6:
						{
						_localctx = new MoreThanOrEqualContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 124;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 125;
						this.match(ReactParser.T__16);
						this.state = 126;
						this.expression(12);
						}
						break;

					case 7:
						{
						_localctx = new LessThanOrEqualContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 127;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 128;
						this.match(ReactParser.T__17);
						this.state = 129;
						this.expression(11);
						}
						break;

					case 8:
						{
						_localctx = new LessThanContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 130;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 131;
						this.match(ReactParser.T__18);
						this.state = 132;
						this.expression(10);
						}
						break;

					case 9:
						{
						_localctx = new EqualContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 133;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 134;
						this.match(ReactParser.T__19);
						this.state = 135;
						this.expression(9);
						}
						break;

					case 10:
						{
						_localctx = new NotEqualContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 136;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 137;
						this.match(ReactParser.T__20);
						this.state = 138;
						this.expression(8);
						}
						break;
					}
					}
				}
				this.state = 143;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ReactParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(ReactParser.Identifier);
			this.state = 145;
			this.match(ReactParser.T__6);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReactParser.T__5) | (1 << ReactParser.T__6) | (1 << ReactParser.Literal) | (1 << ReactParser.Identifier))) !== 0)) {
				{
				this.state = 146;
				this.arguments();
				}
			}

			this.state = 149;
			this.match(ReactParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowFunction(): ArrowFunctionContext {
		let _localctx: ArrowFunctionContext = new ArrowFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ReactParser.RULE_arrowFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(ReactParser.T__6);
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactParser.Identifier) {
				{
				this.state = 152;
				this.parameters();
				}
			}

			this.state = 155;
			this.match(ReactParser.T__7);
			this.state = 156;
			this.match(ReactParser.T__21);
			this.state = 157;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ReactParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.expression(0);
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReactParser.T__8) {
				{
				{
				this.state = 160;
				this.match(ReactParser.T__8);
				this.state = 161;
				this.expression(0);
				}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public consoleLogExpression(): ConsoleLogExpressionContext {
		let _localctx: ConsoleLogExpressionContext = new ConsoleLogExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ReactParser.RULE_consoleLogExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(ReactParser.T__22);
			this.state = 168;
			this.match(ReactParser.T__6);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReactParser.T__5) | (1 << ReactParser.T__6) | (1 << ReactParser.Literal) | (1 << ReactParser.Identifier))) !== 0)) {
				{
				this.state = 169;
				this.arguments();
				}
			}

			this.state = 172;
			this.match(ReactParser.T__7);
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactParser.T__1) {
				{
				this.state = 173;
				this.match(ReactParser.T__1);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public consoleLogStatement(): ConsoleLogStatementContext {
		let _localctx: ConsoleLogStatementContext = new ConsoleLogStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ReactParser.RULE_consoleLogStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.consoleLogExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 16);

		case 1:
			return this.precpred(this._ctx, 15);

		case 2:
			return this.precpred(this._ctx, 14);

		case 3:
			return this.precpred(this._ctx, 13);

		case 4:
			return this.precpred(this._ctx, 12);

		case 5:
			return this.precpred(this._ctx, 11);

		case 6:
			return this.precpred(this._ctx, 10);

		case 7:
			return this.precpred(this._ctx, 9);

		case 8:
			return this.precpred(this._ctx, 8);

		case 9:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1E\xB5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x06\x02$" +
		"\n\x02\r\x02\x0E\x02%\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"-\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x044\n\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06<\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07E\n\x07\x03\b\x03\b\x03" +
		"\b\x05\bJ\n\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\tR\n\t\f\t\x0E\t" +
		"U\v\t\x03\n\x03\n\x07\nY\n\n\f\n\x0E\n\\\v\n\x03\n\x03\n\x03\v\x03\v\x05" +
		"\vb\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\fn\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\x8E\n\f\f\f\x0E\f\x91" +
		"\v\f\x03\r\x03\r\x03\r\x05\r\x96\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E" +
		"\x9C\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07" +
		"\x0F\xA5\n\x0F\f\x0F\x0E\x0F\xA8\v\x0F\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\xAD\n\x10\x03\x10\x03\x10\x05\x10\xB1\n\x10\x03\x11\x03\x11\x03\x11\x02" +
		"\x02\x03\x16\x12\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\x02" +
		"\x03\x03\x02\x05\x07\x02\xC4\x02#\x03\x02\x02\x02\x04,\x03\x02\x02\x02" +
		"\x06.\x03\x02\x02\x02\b5\x03\x02\x02\x02\n7\x03\x02\x02\x02\f@\x03\x02" +
		"\x02\x02\x0EF\x03\x02\x02\x02\x10N\x03\x02\x02\x02\x12V\x03\x02\x02\x02" +
		"\x14_\x03\x02\x02\x02\x16m\x03\x02\x02\x02\x18\x92\x03\x02\x02\x02\x1A" +
		"\x99\x03\x02\x02\x02\x1C\xA1\x03\x02\x02\x02\x1E\xA9\x03\x02\x02\x02 " +
		"\xB2\x03\x02\x02\x02\"$\x05\x04\x03\x02#\"\x03\x02\x02\x02$%\x03\x02\x02" +
		"\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&\x03\x03\x02\x02\x02\'-\x05\x06" +
		"\x04\x02(-\x05\n\x06\x02)-\x05\x14\v\x02*-\x05 \x11\x02+-\x05\f\x07\x02" +
		",\'\x03\x02\x02\x02,(\x03\x02\x02\x02,)\x03\x02\x02\x02,*\x03\x02\x02" +
		"\x02,+\x03\x02\x02\x02-\x05\x03\x02\x02\x02./\x05\b\x05\x02/0\x07\x1D" +
		"\x02\x0201\x07\x03\x02\x0213\x05\x16\f\x0224\x07\x04\x02\x0232\x03\x02" +
		"\x02\x0234\x03\x02\x02\x024\x07\x03\x02\x02\x0256\t\x02\x02\x026\t\x03" +
		"\x02\x02\x0278\x07\b\x02\x0289\x07\x1D\x02\x029;\x07\t\x02\x02:<\x05\x10" +
		"\t\x02;:\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02\x02\x02=>\x07\n\x02" +
		"\x02>?\x05\x12\n\x02?\v\x03\x02\x02\x02@A\x07\x1D\x02\x02AB\x07\x03\x02" +
		"\x02BD\x05\x16\f\x02CE\x07\x04\x02\x02DC\x03\x02\x02\x02DE\x03\x02\x02" +
		"\x02E\r\x03\x02\x02\x02FG\x07\b\x02\x02GI\x07\t\x02\x02HJ\x05\x10\t\x02" +
		"IH\x03\x02\x02\x02IJ\x03\x02\x02\x02JK\x03\x02\x02\x02KL\x07\n\x02\x02" +
		"LM\x05\x12\n\x02M\x0F\x03\x02\x02\x02NS\x07\x1D\x02\x02OP\x07\v\x02\x02" +
		"PR\x07\x1D\x02\x02QO\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
		"ST\x03\x02\x02\x02T\x11\x03\x02\x02\x02US\x03\x02\x02\x02VZ\x07\f\x02" +
		"\x02WY\x05\x04\x03\x02XW\x03\x02\x02\x02Y\\\x03\x02\x02\x02ZX\x03\x02" +
		"\x02\x02Z[\x03\x02\x02\x02[]\x03\x02\x02\x02\\Z\x03\x02\x02\x02]^\x07" +
		"\r\x02\x02^\x13\x03\x02\x02\x02_a\x05\x16\f\x02`b\x07\x04\x02\x02a`\x03" +
		"\x02\x02\x02ab\x03\x02\x02\x02b\x15\x03\x02\x02\x02cd\b\f\x01\x02de\x07" +
		"\t\x02\x02ef\x05\x16\f\x02fg\x07\n\x02\x02gn\x03\x02\x02\x02hn\x05\x18" +
		"\r\x02in\x05\x1A\x0E\x02jn\x05\x0E\b\x02kn\x07\x1D\x02\x02ln\x07\x1A\x02" +
		"\x02mc\x03\x02\x02\x02mh\x03\x02\x02\x02mi\x03\x02\x02\x02mj\x03\x02\x02" +
		"\x02mk\x03\x02\x02\x02ml\x03\x02\x02\x02n\x8F\x03\x02\x02\x02op\f\x12" +
		"\x02\x02pq\x07\x0E\x02\x02q\x8E\x05\x16\f\x13rs\f\x11\x02\x02st\x07\x0F" +
		"\x02\x02t\x8E\x05\x16\f\x12uv\f\x10\x02\x02vw\x07\x10\x02\x02w\x8E\x05" +
		"\x16\f\x11xy\f\x0F\x02\x02yz\x07\x11\x02\x02z\x8E\x05\x16\f\x10{|\f\x0E" +
		"\x02\x02|}\x07\x12\x02\x02}\x8E\x05\x16\f\x0F~\x7F\f\r\x02\x02\x7F\x80" +
		"\x07\x13\x02\x02\x80\x8E\x05\x16\f\x0E\x81\x82\f\f\x02\x02\x82\x83\x07" +
		"\x14\x02\x02\x83\x8E\x05\x16\f\r\x84\x85\f\v\x02\x02\x85\x86\x07\x15\x02" +
		"\x02\x86\x8E\x05\x16\f\f\x87\x88\f\n\x02\x02\x88\x89\x07\x16\x02\x02\x89" +
		"\x8E\x05\x16\f\v\x8A\x8B\f\t\x02\x02\x8B\x8C\x07\x17\x02\x02\x8C\x8E\x05" +
		"\x16\f\n\x8Do\x03\x02\x02\x02\x8Dr\x03\x02\x02\x02\x8Du\x03\x02\x02\x02" +
		"\x8Dx\x03\x02\x02\x02\x8D{\x03\x02\x02\x02\x8D~\x03\x02\x02\x02\x8D\x81" +
		"\x03\x02\x02\x02\x8D\x84\x03\x02\x02\x02\x8D\x87\x03\x02\x02\x02\x8D\x8A" +
		"\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90" +
		"\x03\x02\x02\x02\x90\x17\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x92\x93" +
		"\x07\x1D\x02\x02\x93\x95\x07\t\x02\x02\x94\x96\x05\x1C\x0F\x02\x95\x94" +
		"\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98" +
		"\x07\n\x02\x02\x98\x19\x03\x02\x02\x02\x99\x9B\x07\t\x02\x02\x9A\x9C\x05" +
		"\x10\t\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x03" +
		"\x02\x02\x02\x9D\x9E\x07\n\x02\x02\x9E\x9F\x07\x18\x02\x02\x9F\xA0\x05" +
		"\x12\n\x02\xA0\x1B\x03\x02\x02\x02\xA1\xA6\x05\x16\f\x02\xA2\xA3\x07\v" +
		"\x02\x02\xA3\xA5\x05\x16\f\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA8\x03\x02" +
		"\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\x1D\x03\x02" +
		"\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAA\x07\x19\x02\x02\xAA\xAC\x07\t" +
		"\x02\x02\xAB\xAD\x05\x1C\x0F\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02" +
		"\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB0\x07\n\x02\x02\xAF\xB1\x07\x04" +
		"\x02\x02\xB0\xAF\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\x1F\x03\x02" +
		"\x02\x02\xB2\xB3\x05\x1E\x10\x02\xB3!\x03\x02\x02\x02\x13%,3;DISZam\x8D" +
		"\x8F\x95\x9B\xA6\xAC\xB0";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ReactParser.__ATN) {
			ReactParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ReactParser._serializedATN));
		}

		return ReactParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_program; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public consoleLogStatement(): ConsoleLogStatementContext | undefined {
		return this.tryGetRuleContext(0, ConsoleLogStatementContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_statement; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public variableType(): VariableTypeContext {
		return this.getRuleContext(0, VariableTypeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(ReactParser.Identifier, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_variableType; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterVariableType) {
			listener.enterVariableType(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitVariableType) {
			listener.exitVariableType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitVariableType) {
			return visitor.visitVariableType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(ReactParser.Identifier, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(ReactParser.Identifier, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_assignment; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_functionExpression; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterFunctionExpression) {
			listener.enterFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitFunctionExpression) {
			listener.exitFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitFunctionExpression) {
			return visitor.visitFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReactParser.Identifier);
		} else {
			return this.getToken(ReactParser.Identifier, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_parameters; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_block; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MultiplicationContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterMultiplication) {
			listener.enterMultiplication(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitMultiplication) {
			listener.exitMultiplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitMultiplication) {
			return visitor.visitMultiplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivisionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterDivision) {
			listener.enterDivision(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitDivision) {
			listener.exitDivision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitDivision) {
			return visitor.visitDivision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterAddition) {
			listener.enterAddition(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitAddition) {
			listener.exitAddition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitAddition) {
			return visitor.visitAddition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterSubtraction) {
			listener.enterSubtraction(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitSubtraction) {
			listener.exitSubtraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitSubtraction) {
			return visitor.visitSubtraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MoreThanContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterMoreThan) {
			listener.enterMoreThan(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitMoreThan) {
			listener.exitMoreThan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitMoreThan) {
			return visitor.visitMoreThan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MoreThanOrEqualContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterMoreThanOrEqual) {
			listener.enterMoreThanOrEqual(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitMoreThanOrEqual) {
			listener.exitMoreThanOrEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitMoreThanOrEqual) {
			return visitor.visitMoreThanOrEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LessThanOrEqualContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterLessThanOrEqual) {
			listener.enterLessThanOrEqual(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitLessThanOrEqual) {
			listener.exitLessThanOrEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitLessThanOrEqual) {
			return visitor.visitLessThanOrEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LessThanContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterLessThan) {
			listener.enterLessThan(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitLessThan) {
			listener.exitLessThan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitLessThan) {
			return visitor.visitLessThan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterEqual) {
			listener.enterEqual(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitEqual) {
			listener.exitEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitEqual) {
			return visitor.visitEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotEqualContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterNotEqual) {
			listener.enterNotEqual(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitNotEqual) {
			listener.exitNotEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitNotEqual) {
			return visitor.visitNotEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FuncCallContext extends ExpressionContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterFuncCall) {
			listener.enterFuncCall(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitFuncCall) {
			listener.exitFuncCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitFuncCall) {
			return visitor.visitFuncCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrowFuncContext extends ExpressionContext {
	public arrowFunction(): ArrowFunctionContext {
		return this.getRuleContext(0, ArrowFunctionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterArrowFunc) {
			listener.enterArrowFunc(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitArrowFunc) {
			listener.exitArrowFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitArrowFunc) {
			return visitor.visitArrowFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FuncExprContext extends ExpressionContext {
	public functionExpression(): FunctionExpressionContext {
		return this.getRuleContext(0, FunctionExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterFuncExpr) {
			listener.enterFuncExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitFuncExpr) {
			listener.exitFuncExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitFuncExpr) {
			return visitor.visitFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IDContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(ReactParser.Identifier, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterID) {
			listener.enterID(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitID) {
			listener.exitID(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitID) {
			return visitor.visitID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LitteralContext extends ExpressionContext {
	public Literal(): TerminalNode { return this.getToken(ReactParser.Literal, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterLitteral) {
			listener.enterLitteral(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitLitteral) {
			listener.exitLitteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitLitteral) {
			return visitor.visitLitteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(ReactParser.Identifier, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowFunctionContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_arrowFunction; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterArrowFunction) {
			listener.enterArrowFunction(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitArrowFunction) {
			listener.exitArrowFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitArrowFunction) {
			return visitor.visitArrowFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_arguments; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConsoleLogExpressionContext extends ParserRuleContext {
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_consoleLogExpression; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterConsoleLogExpression) {
			listener.enterConsoleLogExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitConsoleLogExpression) {
			listener.exitConsoleLogExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitConsoleLogExpression) {
			return visitor.visitConsoleLogExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConsoleLogStatementContext extends ParserRuleContext {
	public consoleLogExpression(): ConsoleLogExpressionContext {
		return this.getRuleContext(0, ConsoleLogExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_consoleLogStatement; }
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterConsoleLogStatement) {
			listener.enterConsoleLogStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitConsoleLogStatement) {
			listener.exitConsoleLogStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitConsoleLogStatement) {
			return visitor.visitConsoleLogStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


