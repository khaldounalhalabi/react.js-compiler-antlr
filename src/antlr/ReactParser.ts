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
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly IntegerLiteral = 46;
	public static readonly StringLiteral = 47;
	public static readonly Identifier = 48;
	public static readonly WS = 49;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_variableDeclaration = 2;
	public static readonly RULE_variableType = 3;
	public static readonly RULE_functionDeclaration = 4;
	public static readonly RULE_assignment = 5;
	public static readonly RULE_functionExpression = 6;
	public static readonly RULE_parameters = 7;
	public static readonly RULE_return = 8;
	public static readonly RULE_block = 9;
	public static readonly RULE_expression = 10;
	public static readonly RULE_funcExpr = 11;
	public static readonly RULE_functionCall = 12;
	public static readonly RULE_arrowFunction = 13;
	public static readonly RULE_arguments = 14;
	public static readonly RULE_consoleLogExpression = 15;
	public static readonly RULE_template = 16;
	public static readonly RULE_useState = 17;
	public static readonly RULE_useEffect = 18;
	public static readonly RULE_useRef = 19;
	public static readonly RULE_jsxElement = 20;
	public static readonly RULE_jsxElementFull = 21;
	public static readonly RULE_selfClosingJsxElement = 22;
	public static readonly RULE_jsxTagName = 23;
	public static readonly RULE_jsxAttribute = 24;
	public static readonly RULE_jsxAttributeName = 25;
	public static readonly RULE_jsxAttributeValue = 26;
	public static readonly RULE_jsxElementContent = 27;
	public static readonly literalNames: (string | null)[] = [ null, "'='", 
                                                            "';'", "'let'", 
                                                            "'var'", "'const'", 
                                                            "'function'", 
                                                            "'('", "')'", 
                                                            "','", "'return'", 
                                                            "'{'", "'}'", 
                                                            "'*'", "'/'", 
                                                            "'+'", "'-'", 
                                                            "'>'", "'>='", 
                                                            "'<='", "'<'", 
                                                            "'=='", "'!='", 
                                                            "'=>'", "'console.log'", 
                                                            "'`'", "'$'", 
                                                            "'['", "']'", 
                                                            "'useState'", 
                                                            "'useEffect'", 
                                                            "'useRef'", 
                                                            "'</'", "'/>'", 
                                                            "'main'", "'div'", 
                                                            "'img'", "'h1'", 
                                                            "'p'", "'a'", 
                                                            "'src'", "'onClick'", 
                                                            "'ref'", "'width'", 
                                                            "'height'", 
                                                            "'className'" ];
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
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "IntegerLiteral", 
                                                             "StringLiteral", 
                                                             "Identifier", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "variableDeclaration", "variableType", "functionDeclaration", 
		"assignment", "functionExpression", "parameters", "return", "block", "expression", 
		"funcExpr", "functionCall", "arrowFunction", "arguments", "consoleLogExpression", 
		"template", "useState", "useEffect", "useRef", "jsxElement", "jsxElementFull", 
		"selfClosingJsxElement", "jsxTagName", "jsxAttribute", "jsxAttributeName", 
		"jsxAttributeValue", "jsxElementContent",
	];
	public get grammarFileName(): string { return "React.g4"; }
	public get literalNames(): (string | null)[] { return ReactParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return ReactParser.symbolicNames; }
	public get ruleNames(): string[] { return ReactParser.ruleNames; }
	public get serializedATN(): number[] { return ReactParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}


	  private assert(b: boolean, msg: string): void {
	    if (!b) {
	      throw new Error(msg);
	    }
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
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 56;
				this.statement();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1090519160) !== 0) || _la===48);
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
		try {
			this.state = 69;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 61;
				this.variableDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 62;
				this.functionDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 63;
				this.consoleLogExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 64;
				this.assignment();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 65;
				this.useState();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 66;
				this.useEffect();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 67;
				this.useRef();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 68;
				this.functionCall();
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
			this.state = 71;
			this.variableType();
			this.state = 72;
			this.match(ReactParser.Identifier);
			this.state = 73;
			this.match(ReactParser.T__0);
			this.state = 74;
			this.expression(0);
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 75;
				this.match(ReactParser.T__1);
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
			this.state = 78;
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
			this.state = 80;
			this.match(ReactParser.T__5);
			this.state = 81;
			this.match(ReactParser.Identifier);
			this.state = 82;
			this.match(ReactParser.T__6);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===48) {
				{
				this.state = 83;
				this.parameters();
				}
			}

			this.state = 86;
			this.match(ReactParser.T__7);
			this.state = 87;
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
			this.state = 89;
			this.match(ReactParser.Identifier);
			this.state = 90;
			this.match(ReactParser.T__0);
			this.state = 91;
			this.expression(0);
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 92;
				this.match(ReactParser.T__1);
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
			this.state = 95;
			this.match(ReactParser.T__5);
			this.state = 96;
			this.match(ReactParser.T__6);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===48) {
				{
				this.state = 97;
				this.parameters();
				}
			}

			this.state = 100;
			this.match(ReactParser.T__7);
			this.state = 101;
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
			this.state = 103;
			this.match(ReactParser.Identifier);
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 104;
				this.match(ReactParser.T__8);
				this.state = 105;
				this.match(ReactParser.Identifier);
				}
				}
				this.state = 110;
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
	public return_(): ReturnContext {
		let localctx: ReturnContext = new ReturnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, ReactParser.RULE_return);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 111;
			this.match(ReactParser.T__9);
			this.state = 117;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 112;
				this.expression(0);
				}
				break;
			case 2:
				{
				this.state = 113;
				this.match(ReactParser.T__6);
				this.state = 114;
				this.jsxElement();
				this.state = 115;
				this.match(ReactParser.T__7);
				}
				break;
			}
			this.state = 119;
			this.match(ReactParser.T__1);
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
		this.enterRule(localctx, 18, ReactParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 121;
			this.match(ReactParser.T__10);
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1090519160) !== 0) || _la===48) {
				{
				{
				this.state = 122;
				this.statement();
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 128;
				this.return_();
				}
			}

			this.state = 131;
			this.match(ReactParser.T__11);
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
		let _startState: number = 20;
		this.enterRecursionRule(localctx, 20, ReactParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 143;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				localctx = new BracedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 134;
				this.match(ReactParser.T__6);
				this.state = 135;
				this.expression(0);
				this.state = 136;
				this.match(ReactParser.T__7);
				}
				break;
			case 2:
				{
				localctx = new FunctionalExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 138;
				this.funcExpr();
				}
				break;
			case 3:
				{
				localctx = new TemplateStringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 139;
				this.template();
				}
				break;
			case 4:
				{
				localctx = new IDContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 140;
				this.match(ReactParser.Identifier);
				}
				break;
			case 5:
				{
				localctx = new NumberContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 141;
				this.match(ReactParser.IntegerLiteral);
				}
				break;
			case 6:
				{
				localctx = new StringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 142;
				this.match(ReactParser.StringLiteral);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 177;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 175;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplicationContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 145;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 146;
						this.match(ReactParser.T__12);
						this.state = 147;
						this.expression(17);
						}
						break;
					case 2:
						{
						localctx = new DivisionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 148;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 149;
						this.match(ReactParser.T__13);
						this.state = 150;
						this.expression(16);
						}
						break;
					case 3:
						{
						localctx = new AdditionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 151;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 152;
						this.match(ReactParser.T__14);
						this.state = 153;
						this.expression(15);
						}
						break;
					case 4:
						{
						localctx = new SubtractionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 154;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 155;
						this.match(ReactParser.T__15);
						this.state = 156;
						this.expression(14);
						}
						break;
					case 5:
						{
						localctx = new MoreThanContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 157;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 158;
						this.match(ReactParser.T__16);
						this.state = 159;
						this.expression(13);
						}
						break;
					case 6:
						{
						localctx = new MoreThanOrEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 160;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 161;
						this.match(ReactParser.T__17);
						this.state = 162;
						this.expression(12);
						}
						break;
					case 7:
						{
						localctx = new LessThanOrEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 163;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 164;
						this.match(ReactParser.T__18);
						this.state = 165;
						this.expression(11);
						}
						break;
					case 8:
						{
						localctx = new LessThanContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 166;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 167;
						this.match(ReactParser.T__19);
						this.state = 168;
						this.expression(10);
						}
						break;
					case 9:
						{
						localctx = new EqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 169;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 170;
						this.match(ReactParser.T__20);
						this.state = 171;
						this.expression(9);
						}
						break;
					case 10:
						{
						localctx = new NotEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 172;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 173;
						this.match(ReactParser.T__21);
						this.state = 174;
						this.expression(8);
						}
						break;
					}
					}
				}
				this.state = 179;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
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
		this.enterRule(localctx, 22, ReactParser.RULE_funcExpr);
		try {
			this.state = 183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 180;
				this.functionCall();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 181;
				this.arrowFunction();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 182;
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
		this.enterRule(localctx, 24, ReactParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 185;
			this.match(ReactParser.Identifier);
			this.state = 186;
			this.match(ReactParser.T__6);
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33554624) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 7) !== 0)) {
				{
				this.state = 187;
				this.arguments();
				}
			}

			this.state = 190;
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
		this.enterRule(localctx, 26, ReactParser.RULE_arrowFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 192;
			this.match(ReactParser.T__6);
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===48) {
				{
				this.state = 193;
				this.parameters();
				}
			}

			this.state = 196;
			this.match(ReactParser.T__7);
			this.state = 197;
			this.match(ReactParser.T__22);
			this.state = 200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
				{
				this.state = 198;
				this.block();
				}
				break;
			case 6:
			case 7:
			case 25:
			case 46:
			case 47:
			case 48:
				{
				this.state = 199;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public arguments(): ArgumentsContext {
		let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, ReactParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 202;
			this.expression(0);
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 203;
				this.match(ReactParser.T__8);
				this.state = 204;
				this.expression(0);
				}
				}
				this.state = 209;
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
		this.enterRule(localctx, 30, ReactParser.RULE_consoleLogExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 210;
			this.match(ReactParser.T__23);
			this.state = 211;
			this.match(ReactParser.T__6);
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33554624) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 7) !== 0)) {
				{
				this.state = 212;
				this.arguments();
				}
			}

			this.state = 215;
			this.match(ReactParser.T__7);
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 216;
				this.match(ReactParser.T__1);
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
	public template(): TemplateContext {
		let localctx: TemplateContext = new TemplateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, ReactParser.RULE_template);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 219;
			this.match(ReactParser.T__24);
			this.state = 220;
			this.match(ReactParser.T__25);
			this.state = 221;
			this.match(ReactParser.T__10);
			this.state = 222;
			this.expression(0);
			this.state = 223;
			this.match(ReactParser.T__11);
			this.state = 224;
			this.match(ReactParser.T__24);
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
		this.enterRule(localctx, 34, ReactParser.RULE_useState);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 226;
			this.match(ReactParser.T__4);
			this.state = 227;
			this.match(ReactParser.T__26);
			this.state = 228;
			this.match(ReactParser.Identifier);
			this.state = 229;
			this.match(ReactParser.T__8);
			this.state = 230;
			this.match(ReactParser.Identifier);
			this.state = 231;
			this.match(ReactParser.T__27);
			this.state = 232;
			this.match(ReactParser.T__0);
			this.state = 233;
			this.match(ReactParser.T__28);
			this.state = 234;
			this.match(ReactParser.T__6);
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33554624) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 7) !== 0)) {
				{
				this.state = 235;
				this.expression(0);
				}
			}

			this.state = 238;
			this.match(ReactParser.T__7);
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 239;
				this.match(ReactParser.T__1);
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
		this.enterRule(localctx, 36, ReactParser.RULE_useEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
			this.match(ReactParser.T__29);
			this.state = 243;
			this.match(ReactParser.T__6);
			this.state = 246;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				{
				this.state = 244;
				this.arrowFunction();
				}
				break;
			case 6:
				{
				this.state = 245;
				this.functionExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 248;
				this.match(ReactParser.T__8);
				}
			}

			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===27) {
				{
				this.state = 251;
				this.match(ReactParser.T__26);
				this.state = 252;
				this.parameters();
				this.state = 253;
				this.match(ReactParser.T__27);
				}
			}

			this.state = 257;
			this.match(ReactParser.T__7);
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 258;
				this.match(ReactParser.T__1);
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
		this.enterRule(localctx, 38, ReactParser.RULE_useRef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 261;
			this.match(ReactParser.T__4);
			this.state = 262;
			this.match(ReactParser.Identifier);
			this.state = 263;
			this.match(ReactParser.T__0);
			this.state = 264;
			this.match(ReactParser.T__30);
			this.state = 265;
			this.match(ReactParser.T__6);
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33554624) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 7) !== 0)) {
				{
				this.state = 266;
				this.expression(0);
				}
			}

			this.state = 269;
			this.match(ReactParser.T__7);
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 270;
				this.match(ReactParser.T__1);
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
	public jsxElement(): JsxElementContext {
		let localctx: JsxElementContext = new JsxElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, ReactParser.RULE_jsxElement);
		try {
			this.state = 275;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 273;
				this.jsxElementFull();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 274;
				this.selfClosingJsxElement();
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
	public jsxElementFull(): JsxElementFullContext {
		let localctx: JsxElementFullContext = new JsxElementFullContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, ReactParser.RULE_jsxElementFull);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 277;
			this.match(ReactParser.T__19);
			this.state = 278;
			this.jsxTagName();
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 63) !== 0)) {
				{
				{
				this.state = 279;
				this.jsxAttribute();
				}
				}
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 285;
			this.match(ReactParser.T__16);
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11 || _la===20) {
				{
				{
				this.state = 286;
				this.jsxElementContent();
				}
				}
				this.state = 291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 292;
			this.match(ReactParser.T__31);
			this.state = 293;
			this.jsxTagName();
			this.state = 294;
			this.match(ReactParser.T__16);
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
	public selfClosingJsxElement(): SelfClosingJsxElementContext {
		let localctx: SelfClosingJsxElementContext = new SelfClosingJsxElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, ReactParser.RULE_selfClosingJsxElement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 296;
			this.match(ReactParser.T__19);
			this.state = 297;
			this.jsxTagName();
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 63) !== 0)) {
				{
				{
				this.state = 298;
				this.jsxAttribute();
				}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 304;
			this.match(ReactParser.T__32);
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
	public jsxTagName(): JsxTagNameContext {
		let localctx: JsxTagNameContext = new JsxTagNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, ReactParser.RULE_jsxTagName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 306;
			_la = this._input.LA(1);
			if(!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 63) !== 0))) {
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
	public jsxAttribute(): JsxAttributeContext {
		let localctx: JsxAttributeContext = new JsxAttributeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, ReactParser.RULE_jsxAttribute);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 308;
			this.jsxAttributeName();
			this.state = 309;
			this.match(ReactParser.T__0);
			this.state = 310;
			this.jsxAttributeValue();
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
	public jsxAttributeName(): JsxAttributeNameContext {
		let localctx: JsxAttributeNameContext = new JsxAttributeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, ReactParser.RULE_jsxAttributeName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 312;
			_la = this._input.LA(1);
			if(!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 63) !== 0))) {
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
	public jsxAttributeValue(): JsxAttributeValueContext {
		let localctx: JsxAttributeValueContext = new JsxAttributeValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, ReactParser.RULE_jsxAttributeValue);
		let _la: number;
		try {
			this.state = 320;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 314;
				this.match(ReactParser.StringLiteral);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 315;
				this.match(ReactParser.T__10);
				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33554624) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 7) !== 0)) {
					{
					this.state = 316;
					this.expression(0);
					}
				}

				this.state = 319;
				this.match(ReactParser.T__11);
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
	public jsxElementContent(): JsxElementContentContext {
		let localctx: JsxElementContentContext = new JsxElementContentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, ReactParser.RULE_jsxElementContent);
		try {
			this.state = 327;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 322;
				this.jsxElement();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 323;
				this.match(ReactParser.T__10);
				this.state = 324;
				this.expression(0);
				this.state = 325;
				this.match(ReactParser.T__11);
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
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

	public static readonly _serializedATN: number[] = [4,1,49,330,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,1,0,4,0,58,8,0,11,0,12,0,59,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,3,1,70,8,1,1,2,1,2,1,2,1,2,1,2,3,2,77,8,2,1,3,1,3,
	1,4,1,4,1,4,1,4,3,4,85,8,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,3,5,94,8,5,1,6,1,
	6,1,6,3,6,99,8,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,107,8,7,10,7,12,7,110,9,7,
	1,8,1,8,1,8,1,8,1,8,1,8,3,8,118,8,8,1,8,1,8,1,9,1,9,5,9,124,8,9,10,9,12,
	9,127,9,9,1,9,3,9,130,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,3,10,144,8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,176,8,10,10,10,12,10,179,9,10,1,11,
	1,11,1,11,3,11,184,8,11,1,12,1,12,1,12,3,12,189,8,12,1,12,1,12,1,13,1,13,
	3,13,195,8,13,1,13,1,13,1,13,1,13,3,13,201,8,13,1,14,1,14,1,14,5,14,206,
	8,14,10,14,12,14,209,9,14,1,15,1,15,1,15,3,15,214,8,15,1,15,1,15,3,15,218,
	8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,
	17,1,17,1,17,1,17,3,17,237,8,17,1,17,1,17,3,17,241,8,17,1,18,1,18,1,18,
	1,18,3,18,247,8,18,1,18,3,18,250,8,18,1,18,1,18,1,18,1,18,3,18,256,8,18,
	1,18,1,18,3,18,260,8,18,1,19,1,19,1,19,1,19,1,19,1,19,3,19,268,8,19,1,19,
	1,19,3,19,272,8,19,1,20,1,20,3,20,276,8,20,1,21,1,21,1,21,5,21,281,8,21,
	10,21,12,21,284,9,21,1,21,1,21,5,21,288,8,21,10,21,12,21,291,9,21,1,21,
	1,21,1,21,1,21,1,22,1,22,1,22,5,22,300,8,22,10,22,12,22,303,9,22,1,22,1,
	22,1,23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,1,26,1,26,1,26,3,26,318,8,26,
	1,26,3,26,321,8,26,1,27,1,27,1,27,1,27,1,27,3,27,328,8,27,1,27,0,1,20,28,
	0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
	52,54,0,3,1,0,3,5,1,0,34,39,1,0,40,45,356,0,57,1,0,0,0,2,69,1,0,0,0,4,71,
	1,0,0,0,6,78,1,0,0,0,8,80,1,0,0,0,10,89,1,0,0,0,12,95,1,0,0,0,14,103,1,
	0,0,0,16,111,1,0,0,0,18,121,1,0,0,0,20,143,1,0,0,0,22,183,1,0,0,0,24,185,
	1,0,0,0,26,192,1,0,0,0,28,202,1,0,0,0,30,210,1,0,0,0,32,219,1,0,0,0,34,
	226,1,0,0,0,36,242,1,0,0,0,38,261,1,0,0,0,40,275,1,0,0,0,42,277,1,0,0,0,
	44,296,1,0,0,0,46,306,1,0,0,0,48,308,1,0,0,0,50,312,1,0,0,0,52,320,1,0,
	0,0,54,327,1,0,0,0,56,58,3,2,1,0,57,56,1,0,0,0,58,59,1,0,0,0,59,57,1,0,
	0,0,59,60,1,0,0,0,60,1,1,0,0,0,61,70,3,4,2,0,62,70,3,8,4,0,63,70,3,30,15,
	0,64,70,3,10,5,0,65,70,3,34,17,0,66,70,3,36,18,0,67,70,3,38,19,0,68,70,
	3,24,12,0,69,61,1,0,0,0,69,62,1,0,0,0,69,63,1,0,0,0,69,64,1,0,0,0,69,65,
	1,0,0,0,69,66,1,0,0,0,69,67,1,0,0,0,69,68,1,0,0,0,70,3,1,0,0,0,71,72,3,
	6,3,0,72,73,5,48,0,0,73,74,5,1,0,0,74,76,3,20,10,0,75,77,5,2,0,0,76,75,
	1,0,0,0,76,77,1,0,0,0,77,5,1,0,0,0,78,79,7,0,0,0,79,7,1,0,0,0,80,81,5,6,
	0,0,81,82,5,48,0,0,82,84,5,7,0,0,83,85,3,14,7,0,84,83,1,0,0,0,84,85,1,0,
	0,0,85,86,1,0,0,0,86,87,5,8,0,0,87,88,3,18,9,0,88,9,1,0,0,0,89,90,5,48,
	0,0,90,91,5,1,0,0,91,93,3,20,10,0,92,94,5,2,0,0,93,92,1,0,0,0,93,94,1,0,
	0,0,94,11,1,0,0,0,95,96,5,6,0,0,96,98,5,7,0,0,97,99,3,14,7,0,98,97,1,0,
	0,0,98,99,1,0,0,0,99,100,1,0,0,0,100,101,5,8,0,0,101,102,3,18,9,0,102,13,
	1,0,0,0,103,108,5,48,0,0,104,105,5,9,0,0,105,107,5,48,0,0,106,104,1,0,0,
	0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,15,1,0,0,0,110,108,
	1,0,0,0,111,117,5,10,0,0,112,118,3,20,10,0,113,114,5,7,0,0,114,115,3,40,
	20,0,115,116,5,8,0,0,116,118,1,0,0,0,117,112,1,0,0,0,117,113,1,0,0,0,117,
	118,1,0,0,0,118,119,1,0,0,0,119,120,5,2,0,0,120,17,1,0,0,0,121,125,5,11,
	0,0,122,124,3,2,1,0,123,122,1,0,0,0,124,127,1,0,0,0,125,123,1,0,0,0,125,
	126,1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,128,130,3,16,8,0,129,128,1,
	0,0,0,129,130,1,0,0,0,130,131,1,0,0,0,131,132,5,12,0,0,132,19,1,0,0,0,133,
	134,6,10,-1,0,134,135,5,7,0,0,135,136,3,20,10,0,136,137,5,8,0,0,137,144,
	1,0,0,0,138,144,3,22,11,0,139,144,3,32,16,0,140,144,5,48,0,0,141,144,5,
	46,0,0,142,144,5,47,0,0,143,133,1,0,0,0,143,138,1,0,0,0,143,139,1,0,0,0,
	143,140,1,0,0,0,143,141,1,0,0,0,143,142,1,0,0,0,144,177,1,0,0,0,145,146,
	10,16,0,0,146,147,5,13,0,0,147,176,3,20,10,17,148,149,10,15,0,0,149,150,
	5,14,0,0,150,176,3,20,10,16,151,152,10,14,0,0,152,153,5,15,0,0,153,176,
	3,20,10,15,154,155,10,13,0,0,155,156,5,16,0,0,156,176,3,20,10,14,157,158,
	10,12,0,0,158,159,5,17,0,0,159,176,3,20,10,13,160,161,10,11,0,0,161,162,
	5,18,0,0,162,176,3,20,10,12,163,164,10,10,0,0,164,165,5,19,0,0,165,176,
	3,20,10,11,166,167,10,9,0,0,167,168,5,20,0,0,168,176,3,20,10,10,169,170,
	10,8,0,0,170,171,5,21,0,0,171,176,3,20,10,9,172,173,10,7,0,0,173,174,5,
	22,0,0,174,176,3,20,10,8,175,145,1,0,0,0,175,148,1,0,0,0,175,151,1,0,0,
	0,175,154,1,0,0,0,175,157,1,0,0,0,175,160,1,0,0,0,175,163,1,0,0,0,175,166,
	1,0,0,0,175,169,1,0,0,0,175,172,1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,
	177,178,1,0,0,0,178,21,1,0,0,0,179,177,1,0,0,0,180,184,3,24,12,0,181,184,
	3,26,13,0,182,184,3,12,6,0,183,180,1,0,0,0,183,181,1,0,0,0,183,182,1,0,
	0,0,184,23,1,0,0,0,185,186,5,48,0,0,186,188,5,7,0,0,187,189,3,28,14,0,188,
	187,1,0,0,0,188,189,1,0,0,0,189,190,1,0,0,0,190,191,5,8,0,0,191,25,1,0,
	0,0,192,194,5,7,0,0,193,195,3,14,7,0,194,193,1,0,0,0,194,195,1,0,0,0,195,
	196,1,0,0,0,196,197,5,8,0,0,197,200,5,23,0,0,198,201,3,18,9,0,199,201,3,
	20,10,0,200,198,1,0,0,0,200,199,1,0,0,0,201,27,1,0,0,0,202,207,3,20,10,
	0,203,204,5,9,0,0,204,206,3,20,10,0,205,203,1,0,0,0,206,209,1,0,0,0,207,
	205,1,0,0,0,207,208,1,0,0,0,208,29,1,0,0,0,209,207,1,0,0,0,210,211,5,24,
	0,0,211,213,5,7,0,0,212,214,3,28,14,0,213,212,1,0,0,0,213,214,1,0,0,0,214,
	215,1,0,0,0,215,217,5,8,0,0,216,218,5,2,0,0,217,216,1,0,0,0,217,218,1,0,
	0,0,218,31,1,0,0,0,219,220,5,25,0,0,220,221,5,26,0,0,221,222,5,11,0,0,222,
	223,3,20,10,0,223,224,5,12,0,0,224,225,5,25,0,0,225,33,1,0,0,0,226,227,
	5,5,0,0,227,228,5,27,0,0,228,229,5,48,0,0,229,230,5,9,0,0,230,231,5,48,
	0,0,231,232,5,28,0,0,232,233,5,1,0,0,233,234,5,29,0,0,234,236,5,7,0,0,235,
	237,3,20,10,0,236,235,1,0,0,0,236,237,1,0,0,0,237,238,1,0,0,0,238,240,5,
	8,0,0,239,241,5,2,0,0,240,239,1,0,0,0,240,241,1,0,0,0,241,35,1,0,0,0,242,
	243,5,30,0,0,243,246,5,7,0,0,244,247,3,26,13,0,245,247,3,12,6,0,246,244,
	1,0,0,0,246,245,1,0,0,0,247,249,1,0,0,0,248,250,5,9,0,0,249,248,1,0,0,0,
	249,250,1,0,0,0,250,255,1,0,0,0,251,252,5,27,0,0,252,253,3,14,7,0,253,254,
	5,28,0,0,254,256,1,0,0,0,255,251,1,0,0,0,255,256,1,0,0,0,256,257,1,0,0,
	0,257,259,5,8,0,0,258,260,5,2,0,0,259,258,1,0,0,0,259,260,1,0,0,0,260,37,
	1,0,0,0,261,262,5,5,0,0,262,263,5,48,0,0,263,264,5,1,0,0,264,265,5,31,0,
	0,265,267,5,7,0,0,266,268,3,20,10,0,267,266,1,0,0,0,267,268,1,0,0,0,268,
	269,1,0,0,0,269,271,5,8,0,0,270,272,5,2,0,0,271,270,1,0,0,0,271,272,1,0,
	0,0,272,39,1,0,0,0,273,276,3,42,21,0,274,276,3,44,22,0,275,273,1,0,0,0,
	275,274,1,0,0,0,276,41,1,0,0,0,277,278,5,20,0,0,278,282,3,46,23,0,279,281,
	3,48,24,0,280,279,1,0,0,0,281,284,1,0,0,0,282,280,1,0,0,0,282,283,1,0,0,
	0,283,285,1,0,0,0,284,282,1,0,0,0,285,289,5,17,0,0,286,288,3,54,27,0,287,
	286,1,0,0,0,288,291,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,0,290,292,1,0,
	0,0,291,289,1,0,0,0,292,293,5,32,0,0,293,294,3,46,23,0,294,295,5,17,0,0,
	295,43,1,0,0,0,296,297,5,20,0,0,297,301,3,46,23,0,298,300,3,48,24,0,299,
	298,1,0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,301,302,1,0,0,0,302,304,1,0,
	0,0,303,301,1,0,0,0,304,305,5,33,0,0,305,45,1,0,0,0,306,307,7,1,0,0,307,
	47,1,0,0,0,308,309,3,50,25,0,309,310,5,1,0,0,310,311,3,52,26,0,311,49,1,
	0,0,0,312,313,7,2,0,0,313,51,1,0,0,0,314,321,5,47,0,0,315,317,5,11,0,0,
	316,318,3,20,10,0,317,316,1,0,0,0,317,318,1,0,0,0,318,319,1,0,0,0,319,321,
	5,12,0,0,320,314,1,0,0,0,320,315,1,0,0,0,321,53,1,0,0,0,322,328,3,40,20,
	0,323,324,5,11,0,0,324,325,3,20,10,0,325,326,5,12,0,0,326,328,1,0,0,0,327,
	322,1,0,0,0,327,323,1,0,0,0,328,55,1,0,0,0,35,59,69,76,84,93,98,108,117,
	125,129,143,175,177,183,188,194,200,207,213,217,236,240,246,249,255,259,
	267,271,275,282,289,301,317,320,327];

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
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
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
    [x: string]: any;
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
  [x: string]: any;
  constructor(
    parser?: ReactParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
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
    if (listener.enterAssignment) {
      listener.enterAssignment(this);
    }
  }
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


export class ReturnContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public jsxElement(): JsxElementContext {
		return this.getTypedRuleContext(JsxElementContext, 0) as JsxElementContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_return;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterReturn) {
	 		listener.enterReturn(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitReturn) {
	 		listener.exitReturn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitReturn) {
			return visitor.visitReturn(this);
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
	public return_(): ReturnContext {
		return this.getTypedRuleContext(ReturnContext, 0) as ReturnContext;
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
export class TemplateStringContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public template(): TemplateContext {
		return this.getTypedRuleContext(TemplateContext, 0) as TemplateContext;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterTemplateString) {
	 		listener.enterTemplateString(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitTemplateString) {
	 		listener.exitTemplateString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitTemplateString) {
			return visitor.visitTemplateString(this);
		} else {
			return visitor.visitChildren(this);
		}
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
export class IDContext extends ExpressionContext {
	constructor(parser: ReactParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Identifier(): TerminalNode {
		return this.getToken(ReactParser.Identifier, 0);
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterID) {
	 		listener.enterID(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitID) {
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
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
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


export class TemplateContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_template;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterTemplate) {
	 		listener.enterTemplate(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitTemplate) {
	 		listener.exitTemplate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitTemplate) {
			return visitor.visitTemplate(this);
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


export class JsxElementContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsxElementFull(): JsxElementFullContext {
		return this.getTypedRuleContext(JsxElementFullContext, 0) as JsxElementFullContext;
	}
	public selfClosingJsxElement(): SelfClosingJsxElementContext {
		return this.getTypedRuleContext(SelfClosingJsxElementContext, 0) as SelfClosingJsxElementContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_jsxElement;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterJsxElement) {
	 		listener.enterJsxElement(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitJsxElement) {
	 		listener.exitJsxElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitJsxElement) {
			return visitor.visitJsxElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxElementFullContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsxTagName_list(): JsxTagNameContext[] {
		return this.getTypedRuleContexts(JsxTagNameContext) as JsxTagNameContext[];
	}
	public jsxTagName(i: number): JsxTagNameContext {
		return this.getTypedRuleContext(JsxTagNameContext, i) as JsxTagNameContext;
	}
	public jsxAttribute_list(): JsxAttributeContext[] {
		return this.getTypedRuleContexts(JsxAttributeContext) as JsxAttributeContext[];
	}
	public jsxAttribute(i: number): JsxAttributeContext {
		return this.getTypedRuleContext(JsxAttributeContext, i) as JsxAttributeContext;
	}
	public jsxElementContent_list(): JsxElementContentContext[] {
		return this.getTypedRuleContexts(JsxElementContentContext) as JsxElementContentContext[];
	}
	public jsxElementContent(i: number): JsxElementContentContext {
		return this.getTypedRuleContext(JsxElementContentContext, i) as JsxElementContentContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_jsxElementFull;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterJsxElementFull) {
	 		listener.enterJsxElementFull(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitJsxElementFull) {
	 		listener.exitJsxElementFull(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitJsxElementFull) {
			return visitor.visitJsxElementFull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelfClosingJsxElementContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsxTagName(): JsxTagNameContext {
		return this.getTypedRuleContext(JsxTagNameContext, 0) as JsxTagNameContext;
	}
	public jsxAttribute_list(): JsxAttributeContext[] {
		return this.getTypedRuleContexts(JsxAttributeContext) as JsxAttributeContext[];
	}
	public jsxAttribute(i: number): JsxAttributeContext {
		return this.getTypedRuleContext(JsxAttributeContext, i) as JsxAttributeContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_selfClosingJsxElement;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterSelfClosingJsxElement) {
	 		listener.enterSelfClosingJsxElement(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitSelfClosingJsxElement) {
	 		listener.exitSelfClosingJsxElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitSelfClosingJsxElement) {
			return visitor.visitSelfClosingJsxElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxTagNameContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_jsxTagName;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterJsxTagName) {
	 		listener.enterJsxTagName(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitJsxTagName) {
	 		listener.exitJsxTagName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitJsxTagName) {
			return visitor.visitJsxTagName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxAttributeContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsxAttributeName(): JsxAttributeNameContext {
		return this.getTypedRuleContext(JsxAttributeNameContext, 0) as JsxAttributeNameContext;
	}
	public jsxAttributeValue(): JsxAttributeValueContext {
		return this.getTypedRuleContext(JsxAttributeValueContext, 0) as JsxAttributeValueContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_jsxAttribute;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterJsxAttribute) {
	 		listener.enterJsxAttribute(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitJsxAttribute) {
	 		listener.exitJsxAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitJsxAttribute) {
			return visitor.visitJsxAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxAttributeNameContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_jsxAttributeName;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterJsxAttributeName) {
	 		listener.enterJsxAttributeName(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitJsxAttributeName) {
	 		listener.exitJsxAttributeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitJsxAttributeName) {
			return visitor.visitJsxAttributeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxAttributeValueContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(ReactParser.StringLiteral, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_jsxAttributeValue;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterJsxAttributeValue) {
	 		listener.enterJsxAttributeValue(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitJsxAttributeValue) {
	 		listener.exitJsxAttributeValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitJsxAttributeValue) {
			return visitor.visitJsxAttributeValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxElementContentContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsxElement(): JsxElementContext {
		return this.getTypedRuleContext(JsxElementContext, 0) as JsxElementContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_jsxElementContent;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterJsxElementContent) {
	 		listener.enterJsxElementContent(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitJsxElementContent) {
	 		listener.exitJsxElementContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitJsxElementContent) {
			return visitor.visitJsxElementContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
