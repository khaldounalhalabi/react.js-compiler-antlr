// Generated from ./src/antlr/React.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
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
	public static readonly IntegerLiteral = 24;
	public static readonly StringLiteral = 25;
	public static readonly Identifier = 26;
	public static readonly WS = 27;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_variableDeclaration = 2;
	public static readonly RULE_variableType = 3;
	public static readonly RULE_functionDeclaration = 4;
	public static readonly RULE_assignment = 5;
	public static readonly RULE_functionExpression = 6;
	public static readonly RULE_parameters = 7;
	public static readonly RULE_block = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_funcExpr = 10;
	public static readonly RULE_functionCall = 11;
	public static readonly RULE_arrowFunction = 12;
	public static readonly RULE_arguments = 13;
	public static readonly RULE_consoleLogExpression = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "variableDeclaration", "variableType", "functionDeclaration", 
		"assignment", "functionExpression", "parameters", "block", "expression", 
		"funcExpr", "functionCall", "arrowFunction", "arguments", "consoleLogExpression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='", "'let'", "'var'", "'const'", "'function'", "'('", 
		"')'", "','", "'{'", "'}'", "'*'", "'/'", "'+'", "'-'", "'>'", "'>='", 
		"'<='", "'<'", "'=='", "'!='", "'=>'", "'console.log'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "IntegerLiteral", "StringLiteral", "Identifier", 
		"WS",
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
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 30;
				this.statement();
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReactParser.T__2) | (1 << ReactParser.T__3) | (1 << ReactParser.T__4) | (1 << ReactParser.T__5) | (1 << ReactParser.T__6) | (1 << ReactParser.T__22) | (1 << ReactParser.IntegerLiteral) | (1 << ReactParser.StringLiteral) | (1 << ReactParser.Identifier))) !== 0));
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
		let _la: number;
		try {
			this.state = 43;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				_localctx = new VariabledeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 35;
				this.variableDeclaration();
				}
				break;

			case 2:
				_localctx = new FunctiondeclerationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 36;
				this.functionDeclaration();
				}
				break;

			case 3:
				_localctx = new ExpressionLableContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 37;
				this.expression(0);
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ReactParser.T__0) {
					{
					this.state = 38;
					this.match(ReactParser.T__0);
					}
				}

				}
				break;

			case 4:
				_localctx = new ConsoleLogexpressionLabelContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 41;
				this.consoleLogExpression();
				}
				break;

			case 5:
				_localctx = new AssignmentLabelContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 42;
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
			this.state = 45;
			this.variableType();
			this.state = 46;
			this.match(ReactParser.Identifier);
			this.state = 47;
			this.match(ReactParser.T__1);
			this.state = 48;
			this.expression(0);
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactParser.T__0) {
				{
				this.state = 49;
				this.match(ReactParser.T__0);
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
			this.state = 52;
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
			this.state = 54;
			this.match(ReactParser.T__5);
			this.state = 55;
			this.match(ReactParser.Identifier);
			this.state = 56;
			this.match(ReactParser.T__6);
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactParser.Identifier) {
				{
				this.state = 57;
				this.parameters();
				}
			}

			this.state = 60;
			this.match(ReactParser.T__7);
			this.state = 61;
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
			this.state = 63;
			this.match(ReactParser.Identifier);
			this.state = 64;
			this.match(ReactParser.T__1);
			this.state = 65;
			this.expression(0);
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactParser.T__0) {
				{
				this.state = 66;
				this.match(ReactParser.T__0);
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
			this.state = 69;
			this.match(ReactParser.T__5);
			this.state = 70;
			this.match(ReactParser.T__6);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactParser.Identifier) {
				{
				this.state = 71;
				this.parameters();
				}
			}

			this.state = 74;
			this.match(ReactParser.T__7);
			this.state = 75;
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
			this.state = 77;
			this.match(ReactParser.Identifier);
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReactParser.T__8) {
				{
				{
				this.state = 78;
				this.match(ReactParser.T__8);
				this.state = 79;
				this.match(ReactParser.Identifier);
				}
				}
				this.state = 84;
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
			this.state = 85;
			this.match(ReactParser.T__9);
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReactParser.T__2) | (1 << ReactParser.T__3) | (1 << ReactParser.T__4) | (1 << ReactParser.T__5) | (1 << ReactParser.T__6) | (1 << ReactParser.T__22) | (1 << ReactParser.IntegerLiteral) | (1 << ReactParser.StringLiteral) | (1 << ReactParser.Identifier))) !== 0)) {
				{
				{
				this.state = 86;
				this.statement();
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 92;
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
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, ReactParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				_localctx = new BracedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 95;
				this.match(ReactParser.T__6);
				this.state = 96;
				this.expression(0);
				this.state = 97;
				this.match(ReactParser.T__7);
				}
				break;

			case 2:
				{
				_localctx = new FunctionalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 99;
				this.funcExpr();
				}
				break;

			case 3:
				{
				_localctx = new IdentifierContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 100;
				this.match(ReactParser.Identifier);
				}
				break;

			case 4:
				{
				_localctx = new NumberContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 101;
				this.match(ReactParser.IntegerLiteral);
				}
				break;

			case 5:
				{
				_localctx = new StringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 102;
				this.match(ReactParser.StringLiteral);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 137;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 135;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 105;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 106;
						this.match(ReactParser.T__11);
						this.state = 107;
						this.expression(16);
						}
						break;

					case 2:
						{
						_localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 108;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 109;
						this.match(ReactParser.T__12);
						this.state = 110;
						this.expression(15);
						}
						break;

					case 3:
						{
						_localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 111;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 112;
						this.match(ReactParser.T__13);
						this.state = 113;
						this.expression(14);
						}
						break;

					case 4:
						{
						_localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 114;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 115;
						this.match(ReactParser.T__14);
						this.state = 116;
						this.expression(13);
						}
						break;

					case 5:
						{
						_localctx = new MoreThanContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 117;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 118;
						this.match(ReactParser.T__15);
						this.state = 119;
						this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new MoreThanOrEqualContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 120;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 121;
						this.match(ReactParser.T__16);
						this.state = 122;
						this.expression(11);
						}
						break;

					case 7:
						{
						_localctx = new LessThanOrEqualContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 123;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 124;
						this.match(ReactParser.T__17);
						this.state = 125;
						this.expression(10);
						}
						break;

					case 8:
						{
						_localctx = new LessThanContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 126;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 127;
						this.match(ReactParser.T__18);
						this.state = 128;
						this.expression(9);
						}
						break;

					case 9:
						{
						_localctx = new EqualContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 129;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 130;
						this.match(ReactParser.T__19);
						this.state = 131;
						this.expression(8);
						}
						break;

					case 10:
						{
						_localctx = new NotEqualContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReactParser.RULE_expression);
						this.state = 132;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 133;
						this.match(ReactParser.T__20);
						this.state = 134;
						this.expression(7);
						}
						break;
					}
					}
				}
				this.state = 139;
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
	public funcExpr(): FuncExprContext {
		let _localctx: FuncExprContext = new FuncExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ReactParser.RULE_funcExpr);
		try {
			this.state = 143;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ReactParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 140;
				this.functionCall();
				}
				break;
			case ReactParser.T__6:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 141;
				this.arrowFunction();
				}
				break;
			case ReactParser.T__5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 142;
				this.functionExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ReactParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(ReactParser.Identifier);
			this.state = 146;
			this.match(ReactParser.T__6);
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReactParser.T__5) | (1 << ReactParser.T__6) | (1 << ReactParser.IntegerLiteral) | (1 << ReactParser.StringLiteral) | (1 << ReactParser.Identifier))) !== 0)) {
				{
				this.state = 147;
				this.arguments();
				}
			}

			this.state = 150;
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
			this.state = 152;
			this.match(ReactParser.T__6);
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactParser.Identifier) {
				{
				this.state = 153;
				this.parameters();
				}
			}

			this.state = 156;
			this.match(ReactParser.T__7);
			this.state = 157;
			this.match(ReactParser.T__21);
			this.state = 158;
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
			this.state = 160;
			this.expression(0);
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReactParser.T__8) {
				{
				{
				this.state = 161;
				this.match(ReactParser.T__8);
				this.state = 162;
				this.expression(0);
				}
				}
				this.state = 167;
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
			this.state = 168;
			this.match(ReactParser.T__22);
			this.state = 169;
			this.match(ReactParser.T__6);
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReactParser.T__5) | (1 << ReactParser.T__6) | (1 << ReactParser.IntegerLiteral) | (1 << ReactParser.StringLiteral) | (1 << ReactParser.Identifier))) !== 0)) {
				{
				this.state = 170;
				this.arguments();
				}
			}

			this.state = 173;
			this.match(ReactParser.T__7);
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactParser.T__0) {
				{
				this.state = 174;
				this.match(ReactParser.T__0);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 15);

		case 1:
			return this.precpred(this._ctx, 14);

		case 2:
			return this.precpred(this._ctx, 13);

		case 3:
			return this.precpred(this._ctx, 12);

		case 4:
			return this.precpred(this._ctx, 11);

		case 5:
			return this.precpred(this._ctx, 10);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 8);

		case 8:
			return this.precpred(this._ctx, 7);

		case 9:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1D\xB4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x06\x02\"\n\x02\r\x02\x0E" +
		"\x02#\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03*\n\x03\x03\x03\x03\x03\x05" +
		"\x03.\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x045\n\x04\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06=\n\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07F\n\x07\x03\b\x03" +
		"\b\x03\b\x05\bK\n\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\tS\n\t\f\t" +
		"\x0E\tV\v\t\x03\n\x03\n\x07\nZ\n\n\f\n\x0E\n]\v\n\x03\n\x03\n\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\vj\n\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x07\v\x8A\n\v\f\v\x0E\v\x8D\v\v\x03\f\x03\f\x03\f" +
		"\x05\f\x92\n\f\x03\r\x03\r\x03\r\x05\r\x97\n\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x05\x0E\x9D\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x07\x0F\xA6\n\x0F\f\x0F\x0E\x0F\xA9\v\x0F\x03\x10\x03\x10\x03" +
		"\x10\x05\x10\xAE\n\x10\x03\x10\x03\x10\x05\x10\xB2\n\x10\x03\x10\x02\x02" +
		"\x03\x14\x11\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02\x02\x03\x03\x02" +
		"\x05\x07\x02\xC5\x02!\x03\x02\x02\x02\x04-\x03\x02\x02\x02\x06/\x03\x02" +
		"\x02\x02\b6\x03\x02\x02\x02\n8\x03\x02\x02\x02\fA\x03\x02\x02\x02\x0E" +
		"G\x03\x02\x02\x02\x10O\x03\x02\x02\x02\x12W\x03\x02\x02\x02\x14i\x03\x02" +
		"\x02\x02\x16\x91\x03\x02\x02\x02\x18\x93\x03\x02\x02\x02\x1A\x9A\x03\x02" +
		"\x02\x02\x1C\xA2\x03\x02\x02\x02\x1E\xAA\x03\x02\x02\x02 \"\x05\x04\x03" +
		"\x02! \x03\x02\x02\x02\"#\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02" +
		"\x02\x02$\x03\x03\x02\x02\x02%.\x05\x06\x04\x02&.\x05\n\x06\x02\')\x05" +
		"\x14\v\x02(*\x07\x03\x02\x02)(\x03\x02\x02\x02)*\x03\x02\x02\x02*.\x03" +
		"\x02\x02\x02+.\x05\x1E\x10\x02,.\x05\f\x07\x02-%\x03\x02\x02\x02-&\x03" +
		"\x02\x02\x02-\'\x03\x02\x02\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02.\x05" +
		"\x03\x02\x02\x02/0\x05\b\x05\x0201\x07\x1C\x02\x0212\x07\x04\x02\x022" +
		"4\x05\x14\v\x0235\x07\x03\x02\x0243\x03\x02\x02\x0245\x03\x02\x02\x02" +
		"5\x07\x03\x02\x02\x0267\t\x02\x02\x027\t\x03\x02\x02\x0289\x07\b\x02\x02" +
		"9:\x07\x1C\x02\x02:<\x07\t\x02\x02;=\x05\x10\t\x02<;\x03\x02\x02\x02<" +
		"=\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x07\n\x02\x02?@\x05\x12\n\x02@\v" +
		"\x03\x02\x02\x02AB\x07\x1C\x02\x02BC\x07\x04\x02\x02CE\x05\x14\v\x02D" +
		"F\x07\x03\x02\x02ED\x03\x02\x02\x02EF\x03\x02\x02\x02F\r\x03\x02\x02\x02" +
		"GH\x07\b\x02\x02HJ\x07\t\x02\x02IK\x05\x10\t\x02JI\x03\x02\x02\x02JK\x03" +
		"\x02\x02\x02KL\x03\x02\x02\x02LM\x07\n\x02\x02MN\x05\x12\n\x02N\x0F\x03" +
		"\x02\x02\x02OT\x07\x1C\x02\x02PQ\x07\v\x02\x02QS\x07\x1C\x02\x02RP\x03" +
		"\x02\x02\x02SV\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02U\x11" +
		"\x03\x02\x02\x02VT\x03\x02\x02\x02W[\x07\f\x02\x02XZ\x05\x04\x03\x02Y" +
		"X\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02" +
		"\\^\x03\x02\x02\x02][\x03\x02\x02\x02^_\x07\r\x02\x02_\x13\x03\x02\x02" +
		"\x02`a\b\v\x01\x02ab\x07\t\x02\x02bc\x05\x14\v\x02cd\x07\n\x02\x02dj\x03" +
		"\x02\x02\x02ej\x05\x16\f\x02fj\x07\x1C\x02\x02gj\x07\x1A\x02\x02hj\x07" +
		"\x1B\x02\x02i`\x03\x02\x02\x02ie\x03\x02\x02\x02if\x03\x02\x02\x02ig\x03" +
		"\x02\x02\x02ih\x03\x02\x02\x02j\x8B\x03\x02\x02\x02kl\f\x11\x02\x02lm" +
		"\x07\x0E\x02\x02m\x8A\x05\x14\v\x12no\f\x10\x02\x02op\x07\x0F\x02\x02" +
		"p\x8A\x05\x14\v\x11qr\f\x0F\x02\x02rs\x07\x10\x02\x02s\x8A\x05\x14\v\x10" +
		"tu\f\x0E\x02\x02uv\x07\x11\x02\x02v\x8A\x05\x14\v\x0Fwx\f\r\x02\x02xy" +
		"\x07\x12\x02\x02y\x8A\x05\x14\v\x0Ez{\f\f\x02\x02{|\x07\x13\x02\x02|\x8A" +
		"\x05\x14\v\r}~\f\v\x02\x02~\x7F\x07\x14\x02\x02\x7F\x8A\x05\x14\v\f\x80" +
		"\x81\f\n\x02\x02\x81\x82\x07\x15\x02\x02\x82\x8A\x05\x14\v\v\x83\x84\f" +
		"\t\x02\x02\x84\x85\x07\x16\x02\x02\x85\x8A\x05\x14\v\n\x86\x87\f\b\x02" +
		"\x02\x87\x88\x07\x17\x02\x02\x88\x8A\x05\x14\v\t\x89k\x03\x02\x02\x02" +
		"\x89n\x03\x02\x02\x02\x89q\x03\x02\x02\x02\x89t\x03\x02\x02\x02\x89w\x03" +
		"\x02\x02\x02\x89z\x03\x02\x02\x02\x89}\x03\x02\x02\x02\x89\x80\x03\x02" +
		"\x02\x02\x89\x83\x03\x02\x02\x02\x89\x86\x03\x02\x02\x02\x8A\x8D\x03\x02" +
		"\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x15\x03\x02" +
		"\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E\x92\x05\x18\r\x02\x8F\x92\x05\x1A" +
		"\x0E\x02\x90\x92\x05\x0E\b\x02\x91\x8E\x03\x02\x02\x02\x91\x8F\x03\x02" +
		"\x02\x02\x91\x90\x03\x02\x02\x02\x92\x17\x03\x02\x02\x02\x93\x94\x07\x1C" +
		"\x02\x02\x94\x96\x07\t\x02\x02\x95\x97\x05\x1C\x0F\x02\x96\x95\x03\x02" +
		"\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x99\x07\n" +
		"\x02\x02\x99\x19\x03\x02\x02\x02\x9A\x9C\x07\t\x02\x02\x9B\x9D\x05\x10" +
		"\t\x02\x9C\x9B\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x03\x02" +
		"\x02\x02\x9E\x9F\x07\n\x02\x02\x9F\xA0\x07\x18\x02\x02\xA0\xA1\x05\x12" +
		"\n\x02\xA1\x1B\x03\x02\x02\x02\xA2\xA7\x05\x14\v\x02\xA3\xA4\x07\v\x02" +
		"\x02\xA4\xA6\x05\x14\v\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA9\x03\x02\x02" +
		"\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\x1D\x03\x02\x02" +
		"\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAB\x07\x19\x02\x02\xAB\xAD\x07\t\x02" +
		"\x02\xAC\xAE\x05\x1C\x0F\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE\x03\x02\x02" +
		"\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB1\x07\n\x02\x02\xB0\xB2\x07\x03\x02" +
		"\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\x1F\x03\x02\x02" +
		"\x02\x14#)-4<EJT[i\x89\x8B\x91\x96\x9C\xA7\xAD\xB1";
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class VariabledeclarationContext extends StatementContext {
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterVariabledeclaration) {
			listener.enterVariabledeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitVariabledeclaration) {
			listener.exitVariabledeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitVariabledeclaration) {
			return visitor.visitVariabledeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctiondeclerationContext extends StatementContext {
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getRuleContext(0, FunctionDeclarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterFunctiondecleration) {
			listener.enterFunctiondecleration(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitFunctiondecleration) {
			listener.exitFunctiondecleration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitFunctiondecleration) {
			return visitor.visitFunctiondecleration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionLableContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterExpressionLable) {
			listener.enterExpressionLable(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitExpressionLable) {
			listener.exitExpressionLable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitExpressionLable) {
			return visitor.visitExpressionLable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConsoleLogexpressionLabelContext extends StatementContext {
	public consoleLogExpression(): ConsoleLogExpressionContext {
		return this.getRuleContext(0, ConsoleLogExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterConsoleLogexpressionLabel) {
			listener.enterConsoleLogexpressionLabel(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitConsoleLogexpressionLabel) {
			listener.exitConsoleLogexpressionLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitConsoleLogexpressionLabel) {
			return visitor.visitConsoleLogexpressionLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentLabelContext extends StatementContext {
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterAssignmentLabel) {
			listener.enterAssignmentLabel(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitAssignmentLabel) {
			listener.exitAssignmentLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitAssignmentLabel) {
			return visitor.visitAssignmentLabel(this);
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
export class BracedExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterBracedExpression) {
			listener.enterBracedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitBracedExpression) {
			listener.exitBracedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitBracedExpression) {
			return visitor.visitBracedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionalExpressionContext extends ExpressionContext {
	public funcExpr(): FuncExprContext {
		return this.getRuleContext(0, FuncExprContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterFunctionalExpression) {
			listener.enterFunctionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitFunctionalExpression) {
			listener.exitFunctionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitFunctionalExpression) {
			return visitor.visitFunctionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(ReactParser.Identifier, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberContext extends ExpressionContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(ReactParser.IntegerLiteral, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringContext extends ExpressionContext {
	public StringLiteral(): TerminalNode { return this.getToken(ReactParser.StringLiteral, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReactListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: ReactListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncExprContext extends ParserRuleContext {
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public arrowFunction(): ArrowFunctionContext | undefined {
		return this.tryGetRuleContext(0, ArrowFunctionContext);
	}
	public functionExpression(): FunctionExpressionContext | undefined {
		return this.tryGetRuleContext(0, FunctionExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactParser.RULE_funcExpr; }
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


