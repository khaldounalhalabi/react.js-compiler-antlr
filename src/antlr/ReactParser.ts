// Generated from React.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import ReactListener from "./ReactListener.js";
import ReactVisitor from "./ReactVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class ReactParser extends Parser {
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
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly IntegerLiteral = 29;
	public static readonly StringLiteral = 30;
	public static readonly Identifier = 31;
	public static readonly WS = 32;
	public static readonly EOF = Token.EOF;
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
	public static readonly RULE_useState = 15;
	public static readonly RULE_useEffect = 16;
	public static readonly RULE_useRef = 17;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'='", "'let'", 
                                                            "'var'", "'const'", 
                                                            "'function'", 
                                                            "'('", "')'", 
                                                            "','", "'{'", 
                                                            "'}'", "'*'", 
                                                            "'/'", "'+'", 
                                                            "'-'", "'>'", 
                                                            "'>='", "'<='", 
                                                            "'<'", "'=='", 
                                                            "'!='", "'=>'", 
                                                            "'console.log'", 
                                                            "'['", "']'", 
                                                            "'useState'", 
                                                            "'useEffect'", 
                                                            "'useRef'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "IntegerLiteral", 
                                                             "StringLiteral", 
                                                             "Identifier", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "variableDeclaration", "variableType", "functionDeclaration", 
		"assignment", "functionExpression", "parameters", "block", "expression", 
		"funcExpr", "functionCall", "arrowFunction", "arguments", "consoleLogExpression", 
		"useState", "useEffect", "useRef",
	];
	public get grammarFileName(): string { return "React.g4"; }
	public get literalNames(): (string | null)[] { return ReactParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return ReactParser.symbolicNames; }
	public get ruleNames(): string[] { return ReactParser.ruleNames; }
	public get serializedATN(): number[] { return ReactParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, ReactParser._ATN, ReactParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, ReactParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 36;
				this.statement();
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3900702968) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, ReactParser.RULE_statement);
		let _la: number;
		try {
			this.state = 52;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 41;
				this.variableDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 42;
				this.functionDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 43;
				this.expression(0);
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 44;
					this.match(ReactParser.T__0);
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 47;
				this.consoleLogExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 48;
				this.assignment();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 49;
				this.useState();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 50;
				this.useEffect();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 51;
				this.useRef();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, ReactParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 54;
			this.variableType();
			this.state = 55;
			this.match(ReactParser.Identifier);
			this.state = 56;
			this.match(ReactParser.T__1);
			this.state = 57;
			this.expression(0);
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 58;
				this.match(ReactParser.T__0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableType(): VariableTypeContext {
		let localctx: VariableTypeContext = new VariableTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, ReactParser.RULE_variableType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 61;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 56) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, ReactParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 63;
			this.match(ReactParser.T__5);
			this.state = 64;
			this.match(ReactParser.Identifier);
			this.state = 65;
			this.match(ReactParser.T__6);
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 66;
				this.parameters();
				}
			}

			this.state = 69;
			this.match(ReactParser.T__7);
			this.state = 70;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, ReactParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 72;
			this.match(ReactParser.Identifier);
			this.state = 73;
			this.match(ReactParser.T__1);
			this.state = 74;
			this.expression(0);
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 75;
				this.match(ReactParser.T__0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionExpression(): FunctionExpressionContext {
		let localctx: FunctionExpressionContext = new FunctionExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, ReactParser.RULE_functionExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 78;
			this.match(ReactParser.T__5);
			this.state = 79;
			this.match(ReactParser.T__6);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 80;
				this.parameters();
				}
			}

			this.state = 83;
			this.match(ReactParser.T__7);
			this.state = 84;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let localctx: ParametersContext = new ParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, ReactParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			this.match(ReactParser.Identifier);
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 87;
				this.match(ReactParser.T__8);
				this.state = 88;
				this.match(ReactParser.Identifier);
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, ReactParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 94;
			this.match(ReactParser.T__9);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3900702968) !== 0)) {
				{
				{
				this.state = 95;
				this.statement();
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 101;
			this.match(ReactParser.T__10);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
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
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 18;
		this.enterRecursionRule(localctx, 18, ReactParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 112;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				localctx = new BracedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 104;
				this.match(ReactParser.T__6);
				this.state = 105;
				this.expression(0);
				this.state = 106;
				this.match(ReactParser.T__7);
				}
				break;
			case 2:
				{
				localctx = new FunctionalExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 108;
				this.funcExpr();
				}
				break;
			case 3:
				{
				localctx = new IdentifierContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 109;
				this.match(ReactParser.Identifier);
				}
				break;
			case 4:
				{
				localctx = new NumberContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 110;
				this.match(ReactParser.IntegerLiteral);
				}
				break;
			case 5:
				{
				localctx = new StringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 111;
				this.match(ReactParser.StringLiteral);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 146;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 144;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplicationContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 114;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 115;
						this.match(ReactParser.T__11);
						this.state = 116;
						this.expression(16);
						}
						break;
					case 2:
						{
						localctx = new DivisionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 117;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 118;
						this.match(ReactParser.T__12);
						this.state = 119;
						this.expression(15);
						}
						break;
					case 3:
						{
						localctx = new AdditionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 120;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 121;
						this.match(ReactParser.T__13);
						this.state = 122;
						this.expression(14);
						}
						break;
					case 4:
						{
						localctx = new SubtractionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 123;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 124;
						this.match(ReactParser.T__14);
						this.state = 125;
						this.expression(13);
						}
						break;
					case 5:
						{
						localctx = new MoreThanContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 126;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 127;
						this.match(ReactParser.T__15);
						this.state = 128;
						this.expression(12);
						}
						break;
					case 6:
						{
						localctx = new MoreThanOrEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 129;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 130;
						this.match(ReactParser.T__16);
						this.state = 131;
						this.expression(11);
						}
						break;
					case 7:
						{
						localctx = new LessThanOrEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 132;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 133;
						this.match(ReactParser.T__17);
						this.state = 134;
						this.expression(10);
						}
						break;
					case 8:
						{
						localctx = new LessThanContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 135;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 136;
						this.match(ReactParser.T__18);
						this.state = 137;
						this.expression(9);
						}
						break;
					case 9:
						{
						localctx = new EqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 138;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 139;
						this.match(ReactParser.T__19);
						this.state = 140;
						this.expression(8);
						}
						break;
					case 10:
						{
						localctx = new NotEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 141;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 142;
						this.match(ReactParser.T__20);
						this.state = 143;
						this.expression(7);
						}
						break;
					}
					}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcExpr(): FuncExprContext {
		let localctx: FuncExprContext = new FuncExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, ReactParser.RULE_funcExpr);
		try {
			this.state = 152;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 31:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 149;
				this.functionCall();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 150;
				this.arrowFunction();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 151;
				this.functionExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, ReactParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 154;
			this.match(ReactParser.Identifier);
			this.state = 155;
			this.match(ReactParser.T__6);
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3758096576) !== 0)) {
				{
				this.state = 156;
				this.arguments();
				}
			}

			this.state = 159;
			this.match(ReactParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrowFunction(): ArrowFunctionContext {
		let localctx: ArrowFunctionContext = new ArrowFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, ReactParser.RULE_arrowFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 161;
			this.match(ReactParser.T__6);
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 162;
				this.parameters();
				}
			}

			this.state = 165;
			this.match(ReactParser.T__7);
			this.state = 166;
			this.match(ReactParser.T__21);
			this.state = 167;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, ReactParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 169;
			this.expression(0);
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 170;
				this.match(ReactParser.T__8);
				this.state = 171;
				this.expression(0);
				}
				}
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public consoleLogExpression(): ConsoleLogExpressionContext {
		let localctx: ConsoleLogExpressionContext = new ConsoleLogExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, ReactParser.RULE_consoleLogExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 177;
			this.match(ReactParser.T__22);
			this.state = 178;
			this.match(ReactParser.T__6);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3758096576) !== 0)) {
				{
				this.state = 179;
				this.arguments();
				}
			}

			this.state = 182;
			this.match(ReactParser.T__7);
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 183;
				this.match(ReactParser.T__0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public useState(): UseStateContext {
		let localctx: UseStateContext = new UseStateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, ReactParser.RULE_useState);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 186;
			this.match(ReactParser.T__4);
			this.state = 187;
			this.match(ReactParser.T__23);
			this.state = 188;
			this.match(ReactParser.Identifier);
			this.state = 189;
			this.match(ReactParser.T__8);
			this.state = 190;
			this.match(ReactParser.Identifier);
			this.state = 191;
			this.match(ReactParser.T__24);
			this.state = 192;
			this.match(ReactParser.T__1);
			this.state = 193;
			this.match(ReactParser.T__25);
			this.state = 194;
			this.match(ReactParser.T__6);
			this.state = 195;
			this.expression(0);
			this.state = 196;
			this.match(ReactParser.T__7);
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 197;
				this.match(ReactParser.T__0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public useEffect(): UseEffectContext {
		let localctx: UseEffectContext = new UseEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, ReactParser.RULE_useEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 200;
			this.match(ReactParser.T__26);
			this.state = 201;
			this.match(ReactParser.T__6);
			this.state = 204;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				{
				this.state = 202;
				this.arrowFunction();
				}
				break;
			case 6:
				{
				this.state = 203;
				this.functionExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 206;
				this.match(ReactParser.T__8);
				}
			}

			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 209;
				this.match(ReactParser.T__23);
				this.state = 210;
				this.parameters();
				this.state = 211;
				this.match(ReactParser.T__24);
				}
			}

			this.state = 215;
			this.match(ReactParser.T__7);
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 216;
				this.match(ReactParser.T__0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public useRef(): UseRefContext {
		let localctx: UseRefContext = new UseRefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, ReactParser.RULE_useRef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 219;
			this.match(ReactParser.T__4);
			this.state = 220;
			this.match(ReactParser.Identifier);
			this.state = 221;
			this.match(ReactParser.T__1);
			this.state = 222;
			this.match(ReactParser.T__27);
			this.state = 223;
			this.match(ReactParser.T__6);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3758096576) !== 0)) {
				{
				this.state = 224;
				this.expression(0);
				}
			}

			this.state = 227;
			this.match(ReactParser.T__7);
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 228;
				this.match(ReactParser.T__0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
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

	public static readonly _serializedATN: number[] = [4,1,32,232,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,1,0,4,0,38,8,0,11,0,12,0,39,1,1,1,1,1,1,1,1,3,1,46,8,1,1,1,1,1,1,1,
	1,1,1,1,3,1,53,8,1,1,2,1,2,1,2,1,2,1,2,3,2,60,8,2,1,3,1,3,1,4,1,4,1,4,1,
	4,3,4,68,8,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,3,5,77,8,5,1,6,1,6,1,6,3,6,82,
	8,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,90,8,7,10,7,12,7,93,9,7,1,8,1,8,5,8,97,
	8,8,10,8,12,8,100,9,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,113,
	8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,145,8,9,10,9,12,
	9,148,9,9,1,10,1,10,1,10,3,10,153,8,10,1,11,1,11,1,11,3,11,158,8,11,1,11,
	1,11,1,12,1,12,3,12,164,8,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,5,13,173,
	8,13,10,13,12,13,176,9,13,1,14,1,14,1,14,3,14,181,8,14,1,14,1,14,3,14,185,
	8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,199,
	8,15,1,16,1,16,1,16,1,16,3,16,205,8,16,1,16,3,16,208,8,16,1,16,1,16,1,16,
	1,16,3,16,214,8,16,1,16,1,16,3,16,218,8,16,1,17,1,17,1,17,1,17,1,17,1,17,
	3,17,226,8,17,1,17,1,17,3,17,230,8,17,1,17,0,1,18,18,0,2,4,6,8,10,12,14,
	16,18,20,22,24,26,28,30,32,34,0,1,1,0,3,5,256,0,37,1,0,0,0,2,52,1,0,0,0,
	4,54,1,0,0,0,6,61,1,0,0,0,8,63,1,0,0,0,10,72,1,0,0,0,12,78,1,0,0,0,14,86,
	1,0,0,0,16,94,1,0,0,0,18,112,1,0,0,0,20,152,1,0,0,0,22,154,1,0,0,0,24,161,
	1,0,0,0,26,169,1,0,0,0,28,177,1,0,0,0,30,186,1,0,0,0,32,200,1,0,0,0,34,
	219,1,0,0,0,36,38,3,2,1,0,37,36,1,0,0,0,38,39,1,0,0,0,39,37,1,0,0,0,39,
	40,1,0,0,0,40,1,1,0,0,0,41,53,3,4,2,0,42,53,3,8,4,0,43,45,3,18,9,0,44,46,
	5,1,0,0,45,44,1,0,0,0,45,46,1,0,0,0,46,53,1,0,0,0,47,53,3,28,14,0,48,53,
	3,10,5,0,49,53,3,30,15,0,50,53,3,32,16,0,51,53,3,34,17,0,52,41,1,0,0,0,
	52,42,1,0,0,0,52,43,1,0,0,0,52,47,1,0,0,0,52,48,1,0,0,0,52,49,1,0,0,0,52,
	50,1,0,0,0,52,51,1,0,0,0,53,3,1,0,0,0,54,55,3,6,3,0,55,56,5,31,0,0,56,57,
	5,2,0,0,57,59,3,18,9,0,58,60,5,1,0,0,59,58,1,0,0,0,59,60,1,0,0,0,60,5,1,
	0,0,0,61,62,7,0,0,0,62,7,1,0,0,0,63,64,5,6,0,0,64,65,5,31,0,0,65,67,5,7,
	0,0,66,68,3,14,7,0,67,66,1,0,0,0,67,68,1,0,0,0,68,69,1,0,0,0,69,70,5,8,
	0,0,70,71,3,16,8,0,71,9,1,0,0,0,72,73,5,31,0,0,73,74,5,2,0,0,74,76,3,18,
	9,0,75,77,5,1,0,0,76,75,1,0,0,0,76,77,1,0,0,0,77,11,1,0,0,0,78,79,5,6,0,
	0,79,81,5,7,0,0,80,82,3,14,7,0,81,80,1,0,0,0,81,82,1,0,0,0,82,83,1,0,0,
	0,83,84,5,8,0,0,84,85,3,16,8,0,85,13,1,0,0,0,86,91,5,31,0,0,87,88,5,9,0,
	0,88,90,5,31,0,0,89,87,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,
	0,92,15,1,0,0,0,93,91,1,0,0,0,94,98,5,10,0,0,95,97,3,2,1,0,96,95,1,0,0,
	0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,98,1,0,
	0,0,101,102,5,11,0,0,102,17,1,0,0,0,103,104,6,9,-1,0,104,105,5,7,0,0,105,
	106,3,18,9,0,106,107,5,8,0,0,107,113,1,0,0,0,108,113,3,20,10,0,109,113,
	5,31,0,0,110,113,5,29,0,0,111,113,5,30,0,0,112,103,1,0,0,0,112,108,1,0,
	0,0,112,109,1,0,0,0,112,110,1,0,0,0,112,111,1,0,0,0,113,146,1,0,0,0,114,
	115,10,15,0,0,115,116,5,12,0,0,116,145,3,18,9,16,117,118,10,14,0,0,118,
	119,5,13,0,0,119,145,3,18,9,15,120,121,10,13,0,0,121,122,5,14,0,0,122,145,
	3,18,9,14,123,124,10,12,0,0,124,125,5,15,0,0,125,145,3,18,9,13,126,127,
	10,11,0,0,127,128,5,16,0,0,128,145,3,18,9,12,129,130,10,10,0,0,130,131,
	5,17,0,0,131,145,3,18,9,11,132,133,10,9,0,0,133,134,5,18,0,0,134,145,3,
	18,9,10,135,136,10,8,0,0,136,137,5,19,0,0,137,145,3,18,9,9,138,139,10,7,
	0,0,139,140,5,20,0,0,140,145,3,18,9,8,141,142,10,6,0,0,142,143,5,21,0,0,
	143,145,3,18,9,7,144,114,1,0,0,0,144,117,1,0,0,0,144,120,1,0,0,0,144,123,
	1,0,0,0,144,126,1,0,0,0,144,129,1,0,0,0,144,132,1,0,0,0,144,135,1,0,0,0,
	144,138,1,0,0,0,144,141,1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,146,147,
	1,0,0,0,147,19,1,0,0,0,148,146,1,0,0,0,149,153,3,22,11,0,150,153,3,24,12,
	0,151,153,3,12,6,0,152,149,1,0,0,0,152,150,1,0,0,0,152,151,1,0,0,0,153,
	21,1,0,0,0,154,155,5,31,0,0,155,157,5,7,0,0,156,158,3,26,13,0,157,156,1,
	0,0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,160,5,8,0,0,160,23,1,0,0,0,161,
	163,5,7,0,0,162,164,3,14,7,0,163,162,1,0,0,0,163,164,1,0,0,0,164,165,1,
	0,0,0,165,166,5,8,0,0,166,167,5,22,0,0,167,168,3,16,8,0,168,25,1,0,0,0,
	169,174,3,18,9,0,170,171,5,9,0,0,171,173,3,18,9,0,172,170,1,0,0,0,173,176,
	1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,175,27,1,0,0,0,176,174,1,0,0,0,
	177,178,5,23,0,0,178,180,5,7,0,0,179,181,3,26,13,0,180,179,1,0,0,0,180,
	181,1,0,0,0,181,182,1,0,0,0,182,184,5,8,0,0,183,185,5,1,0,0,184,183,1,0,
	0,0,184,185,1,0,0,0,185,29,1,0,0,0,186,187,5,5,0,0,187,188,5,24,0,0,188,
	189,5,31,0,0,189,190,5,9,0,0,190,191,5,31,0,0,191,192,5,25,0,0,192,193,
	5,2,0,0,193,194,5,26,0,0,194,195,5,7,0,0,195,196,3,18,9,0,196,198,5,8,0,
	0,197,199,5,1,0,0,198,197,1,0,0,0,198,199,1,0,0,0,199,31,1,0,0,0,200,201,
	5,27,0,0,201,204,5,7,0,0,202,205,3,24,12,0,203,205,3,12,6,0,204,202,1,0,
	0,0,204,203,1,0,0,0,205,207,1,0,0,0,206,208,5,9,0,0,207,206,1,0,0,0,207,
	208,1,0,0,0,208,213,1,0,0,0,209,210,5,24,0,0,210,211,3,14,7,0,211,212,5,
	25,0,0,212,214,1,0,0,0,213,209,1,0,0,0,213,214,1,0,0,0,214,215,1,0,0,0,
	215,217,5,8,0,0,216,218,5,1,0,0,217,216,1,0,0,0,217,218,1,0,0,0,218,33,
	1,0,0,0,219,220,5,5,0,0,220,221,5,31,0,0,221,222,5,2,0,0,222,223,5,28,0,
	0,223,225,5,7,0,0,224,226,3,18,9,0,225,224,1,0,0,0,225,226,1,0,0,0,226,
	227,1,0,0,0,227,229,5,8,0,0,228,230,5,1,0,0,229,228,1,0,0,0,229,230,1,0,
	0,0,230,35,1,0,0,0,25,39,45,52,59,67,76,81,91,98,112,144,146,152,157,163,
	174,180,184,198,204,207,213,217,225,229];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ReactParser.__ATN) {
			ReactParser.__ATN = new ATNDeserializer().deserialize(ReactParser._serializedATN);
		}

		return ReactParser.__ATN;
	}


	static DecisionsToDFA = ReactParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_program;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitProgram) {
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
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public consoleLogExpression(): ConsoleLogExpressionContext {
		return this.getTypedRuleContext(ConsoleLogExpressionContext, 0) as ConsoleLogExpressionContext;
	}
	public assignment(): AssignmentContext {
		return this.getTypedRuleContext(AssignmentContext, 0) as AssignmentContext;
	}
	public useState(): UseStateContext {
		return this.getTypedRuleContext(UseStateContext, 0) as UseStateContext;
	}
	public useEffect(): UseEffectContext {
		return this.getTypedRuleContext(UseEffectContext, 0) as UseEffectContext;
	}
	public useRef(): UseRefContext {
		return this.getTypedRuleContext(UseRefContext, 0) as UseRefContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_statement;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitStatement) {
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
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableType(): VariableTypeContext {
		return this.getTypedRuleContext(VariableTypeContext, 0) as VariableTypeContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(ReactParser.Identifier, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_variableDeclaration;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterVariableDeclaration) {
	 		listener.enterVariableDeclaration(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitVariableDeclaration) {
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
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_variableType;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterVariableType) {
	 		listener.enterVariableType(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitVariableType) {
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
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(ReactParser.Identifier, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_functionDeclaration;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitFunctionDeclaration) {
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
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(ReactParser.Identifier, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_assignment;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterAssignment) {
	 		listener.enterAssignment(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitAssignment) {
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
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_functionExpression;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterFunctionExpression) {
	 		listener.enterFunctionExpression(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitFunctionExpression) {
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
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(ReactParser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(ReactParser.Identifier, i);
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_parameters;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterParameters) {
	 		listener.enterParameters(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitParameters) {
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
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_block;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitBlock) {
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
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_expression;
	}
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MultiplicationContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterMultiplication) {
	 		listener.enterMultiplication(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitMultiplication) {
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
export class AdditionContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterAddition) {
	 		listener.enterAddition(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitAddition) {
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
export class NotEqualContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterNotEqual) {
	 		listener.enterNotEqual(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitNotEqual) {
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
export class LessThanOrEqualContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterLessThanOrEqual) {
	 		listener.enterLessThanOrEqual(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitLessThanOrEqual) {
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
export class MoreThanOrEqualContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterMoreThanOrEqual) {
	 		listener.enterMoreThanOrEqual(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitMoreThanOrEqual) {
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
export class StringContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(ReactParser.StringLiteral, 0);
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterString) {
	 		listener.enterString(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitString) {
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
export class LessThanContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterLessThan) {
	 		listener.enterLessThan(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitLessThan) {
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
export class IdentifierContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Identifier(): TerminalNode {
		return this.getToken(ReactParser.Identifier, 0);
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitIdentifier) {
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
export class SubtractionContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterSubtraction) {
	 		listener.enterSubtraction(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitSubtraction) {
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
export class NumberContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IntegerLiteral(): TerminalNode {
		return this.getToken(ReactParser.IntegerLiteral, 0);
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterNumber) {
	 		listener.enterNumber(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitNumber) {
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
export class EqualContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterEqual) {
	 		listener.enterEqual(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitEqual) {
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
export class BracedExpressionContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterBracedExpression) {
	 		listener.enterBracedExpression(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitBracedExpression) {
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
export class DivisionContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterDivision) {
	 		listener.enterDivision(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitDivision) {
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
export class MoreThanContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterMoreThan) {
	 		listener.enterMoreThan(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitMoreThan) {
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
export class FunctionalExpressionContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public funcExpr(): FuncExprContext {
		return this.getTypedRuleContext(FuncExprContext, 0) as FuncExprContext;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterFunctionalExpression) {
	 		listener.enterFunctionalExpression(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitFunctionalExpression) {
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


export class FuncExprContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public arrowFunction(): ArrowFunctionContext {
		return this.getTypedRuleContext(ArrowFunctionContext, 0) as ArrowFunctionContext;
	}
	public functionExpression(): FunctionExpressionContext {
		return this.getTypedRuleContext(FunctionExpressionContext, 0) as FunctionExpressionContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_funcExpr;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterFuncExpr) {
	 		listener.enterFuncExpr(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitFuncExpr) {
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
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(ReactParser.Identifier, 0);
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_functionCall;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitFunctionCall) {
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
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_arrowFunction;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterArrowFunction) {
	 		listener.enterArrowFunction(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitArrowFunction) {
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
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_arguments;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterArguments) {
	 		listener.enterArguments(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitArguments) {
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
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_consoleLogExpression;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterConsoleLogExpression) {
	 		listener.enterConsoleLogExpression(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitConsoleLogExpression) {
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


export class UseStateContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(ReactParser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(ReactParser.Identifier, i);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_useState;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterUseState) {
	 		listener.enterUseState(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitUseState) {
	 		listener.exitUseState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitUseState) {
			return visitor.visitUseState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseEffectContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arrowFunction(): ArrowFunctionContext {
		return this.getTypedRuleContext(ArrowFunctionContext, 0) as ArrowFunctionContext;
	}
	public functionExpression(): FunctionExpressionContext {
		return this.getTypedRuleContext(FunctionExpressionContext, 0) as FunctionExpressionContext;
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_useEffect;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterUseEffect) {
	 		listener.enterUseEffect(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitUseEffect) {
	 		listener.exitUseEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitUseEffect) {
			return visitor.visitUseEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseRefContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(ReactParser.Identifier, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_useRef;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterUseRef) {
	 		listener.enterUseRef(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitUseRef) {
	 		listener.exitUseRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitUseRef) {
			return visitor.visitUseRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
