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
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly IntegerLiteral = 51;
	public static readonly StringLiteral = 52;
	public static readonly Identifier = 53;
	public static readonly WS = 54;
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
	public static readonly RULE_ifStatement = 17;
	public static readonly RULE_elseStatement = 18;
	public static readonly RULE_elseIfStatement = 19;
	public static readonly RULE_conditionalStatement = 20;
	public static readonly RULE_useState = 21;
	public static readonly RULE_useEffect = 22;
	public static readonly RULE_useRef = 23;
	public static readonly RULE_jsxElement = 24;
	public static readonly RULE_jsxElementFull = 25;
	public static readonly RULE_selfClosingJsxElement = 26;
	public static readonly RULE_jsxTagName = 27;
	public static readonly RULE_jsxAttribute = 28;
	public static readonly RULE_jsxAttributeName = 29;
	public static readonly RULE_jsxAttributeValue = 30;
	public static readonly RULE_jsxElementContent = 31;
	public static readonly RULE_jsxComponentFull = 32;
	public static readonly RULE_selfClosingComponent = 33;
	public static readonly RULE_componentProps = 34;
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
                                                            "'?'", "':'", 
                                                            "'??'", "'=>'", 
                                                            "'console.log'", 
                                                            "'`'", "'$'", 
                                                            "'if'", "'else'", 
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
                                                             null, null, 
                                                             null, null, 
                                                             null, "IntegerLiteral", 
                                                             "StringLiteral", 
                                                             "Identifier", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "variableDeclaration", "variableType", "functionDeclaration", 
		"assignment", "functionExpression", "parameters", "return", "block", "expression", 
		"funcExpr", "functionCall", "arrowFunction", "arguments", "consoleLogExpression", 
		"template", "ifStatement", "elseStatement", "elseIfStatement", "conditionalStatement", 
		"useState", "useEffect", "useRef", "jsxElement", "jsxElementFull", "selfClosingJsxElement", 
		"jsxTagName", "jsxAttribute", "jsxAttributeName", "jsxAttributeValue", 
		"jsxElementContent", "jsxComponentFull", "selfClosingComponent", "componentProps",
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
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 70;
				this.statement();
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1207959672) !== 0) || _la===35 || _la===53);
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
			this.state = 84;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 75;
				this.variableDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 76;
				this.functionDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 77;
				this.consoleLogExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 78;
				this.assignment();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 79;
				this.useState();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 80;
				this.useEffect();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 81;
				this.useRef();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 82;
				this.functionCall();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 83;
				this.conditionalStatement();
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
			this.state = 86;
			this.variableType();
			this.state = 87;
			this.match(ReactParser.Identifier);
			this.state = 88;
			this.match(ReactParser.T__0);
			this.state = 89;
			this.expression(0);
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 90;
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
			this.state = 93;
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
			this.state = 95;
			this.match(ReactParser.T__5);
			this.state = 96;
			this.match(ReactParser.Identifier);
			this.state = 97;
			this.match(ReactParser.T__6);
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===53) {
				{
				this.state = 98;
				this.parameters();
				}
			}

			this.state = 101;
			this.match(ReactParser.T__7);
			this.state = 102;
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
			this.state = 104;
			this.match(ReactParser.Identifier);
			this.state = 105;
			this.match(ReactParser.T__0);
			this.state = 106;
			this.expression(0);
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 107;
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
			this.state = 110;
			this.match(ReactParser.T__5);
			this.state = 111;
			this.match(ReactParser.T__6);
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===53) {
				{
				this.state = 112;
				this.parameters();
				}
			}

			this.state = 115;
			this.match(ReactParser.T__7);
			this.state = 116;
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
			this.state = 118;
			this.match(ReactParser.Identifier);
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 119;
				this.match(ReactParser.T__8);
				this.state = 120;
				this.match(ReactParser.Identifier);
				}
				}
				this.state = 125;
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
			this.match(ReactParser.T__9);
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 127;
				this.expression(0);
				}
				break;
			case 2:
				{
				this.state = 128;
				this.match(ReactParser.T__6);
				this.state = 129;
				this.jsxElement();
				this.state = 130;
				this.match(ReactParser.T__7);
				}
				break;
			}
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 134;
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
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, ReactParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 137;
			this.match(ReactParser.T__10);
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1207959672) !== 0) || _la===35 || _la===53) {
				{
				{
				this.state = 138;
				this.statement();
				}
				}
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 144;
				this.return_();
				}
			}

			this.state = 147;
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
			this.state = 159;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				localctx = new BracedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 150;
				this.match(ReactParser.T__6);
				this.state = 151;
				this.expression(0);
				this.state = 152;
				this.match(ReactParser.T__7);
				}
				break;
			case 2:
				{
				localctx = new FunctionalExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 154;
				this.funcExpr();
				}
				break;
			case 3:
				{
				localctx = new TemplateStringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 155;
				this.template();
				}
				break;
			case 4:
				{
				localctx = new IDContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 156;
				this.match(ReactParser.Identifier);
				}
				break;
			case 5:
				{
				localctx = new NumberContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 157;
				this.match(ReactParser.IntegerLiteral);
				}
				break;
			case 6:
				{
				localctx = new StringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 158;
				this.match(ReactParser.StringLiteral);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 202;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 200;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplicationContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 161;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 162;
						this.match(ReactParser.T__12);
						this.state = 163;
						this.expression(19);
						}
						break;
					case 2:
						{
						localctx = new DivisionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 164;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 165;
						this.match(ReactParser.T__13);
						this.state = 166;
						this.expression(18);
						}
						break;
					case 3:
						{
						localctx = new AdditionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 167;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 168;
						this.match(ReactParser.T__14);
						this.state = 169;
						this.expression(17);
						}
						break;
					case 4:
						{
						localctx = new SubtractionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 170;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 171;
						this.match(ReactParser.T__15);
						this.state = 172;
						this.expression(16);
						}
						break;
					case 5:
						{
						localctx = new MoreThanContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 173;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 174;
						this.match(ReactParser.T__16);
						this.state = 175;
						this.expression(15);
						}
						break;
					case 6:
						{
						localctx = new MoreThanOrEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 176;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 177;
						this.match(ReactParser.T__17);
						this.state = 178;
						this.expression(14);
						}
						break;
					case 7:
						{
						localctx = new LessThanOrEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 179;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 180;
						this.match(ReactParser.T__18);
						this.state = 181;
						this.expression(13);
						}
						break;
					case 8:
						{
						localctx = new LessThanContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 182;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 183;
						this.match(ReactParser.T__19);
						this.state = 184;
						this.expression(12);
						}
						break;
					case 9:
						{
						localctx = new EqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 185;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 186;
						this.match(ReactParser.T__20);
						this.state = 187;
						this.expression(11);
						}
						break;
					case 10:
						{
						localctx = new NotEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 188;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 189;
						this.match(ReactParser.T__21);
						this.state = 190;
						this.expression(10);
						}
						break;
					case 11:
						{
						localctx = new TernaryConditionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 191;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 192;
						this.match(ReactParser.T__22);
						this.state = 193;
						this.expression(0);
						this.state = 194;
						this.match(ReactParser.T__23);
						this.state = 195;
						this.expression(6);
						}
						break;
					case 12:
						{
						localctx = new NullishCoalescingContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
						this.state = 197;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 198;
						this.match(ReactParser.T__24);
						this.state = 199;
						this.expression(5);
						}
						break;
					}
					}
				}
				this.state = 204;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
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
			this.state = 208;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 53:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 205;
				this.functionCall();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 206;
				this.arrowFunction();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 207;
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
			this.state = 210;
			this.match(ReactParser.Identifier);
			this.state = 211;
			this.match(ReactParser.T__6);
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268435648) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 7) !== 0)) {
				{
				this.state = 212;
				this.arguments();
				}
			}

			this.state = 215;
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
			this.state = 217;
			this.match(ReactParser.T__6);
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===53) {
				{
				this.state = 218;
				this.parameters();
				}
			}

			this.state = 221;
			this.match(ReactParser.T__7);
			this.state = 222;
			this.match(ReactParser.T__25);
			this.state = 225;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
				{
				this.state = 223;
				this.block();
				}
				break;
			case 6:
			case 7:
			case 28:
			case 51:
			case 52:
			case 53:
				{
				this.state = 224;
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
			this.state = 227;
			this.expression(0);
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 228;
				this.match(ReactParser.T__8);
				this.state = 229;
				this.expression(0);
				}
				}
				this.state = 234;
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
			this.state = 235;
			this.match(ReactParser.T__26);
			this.state = 236;
			this.match(ReactParser.T__6);
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268435648) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 7) !== 0)) {
				{
				this.state = 237;
				this.arguments();
				}
			}

			this.state = 240;
			this.match(ReactParser.T__7);
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 241;
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
			this.state = 244;
			this.match(ReactParser.T__27);
			this.state = 245;
			this.match(ReactParser.T__28);
			this.state = 246;
			this.match(ReactParser.T__10);
			this.state = 247;
			this.expression(0);
			this.state = 248;
			this.match(ReactParser.T__11);
			this.state = 249;
			this.match(ReactParser.T__27);
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
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, ReactParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 251;
			this.match(ReactParser.T__29);
			this.state = 252;
			this.match(ReactParser.T__6);
			this.state = 253;
			this.expression(0);
			this.state = 254;
			this.match(ReactParser.T__7);
			this.state = 255;
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
	public elseStatement(): ElseStatementContext {
		let localctx: ElseStatementContext = new ElseStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, ReactParser.RULE_elseStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 257;
			this.match(ReactParser.T__30);
			this.state = 258;
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
	public elseIfStatement(): ElseIfStatementContext {
		let localctx: ElseIfStatementContext = new ElseIfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, ReactParser.RULE_elseIfStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 260;
			this.match(ReactParser.T__30);
			this.state = 261;
			this.match(ReactParser.T__29);
			this.state = 262;
			this.match(ReactParser.T__6);
			this.state = 263;
			this.expression(0);
			this.state = 264;
			this.match(ReactParser.T__7);
			this.state = 265;
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
	public conditionalStatement(): ConditionalStatementContext {
		let localctx: ConditionalStatementContext = new ConditionalStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, ReactParser.RULE_conditionalStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 267;
			this.ifStatement();
			this.state = 271;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 268;
					this.elseIfStatement();
					}
					}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 274;
				this.elseStatement();
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
		this.enterRule(localctx, 42, ReactParser.RULE_useState);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 277;
			this.match(ReactParser.T__4);
			this.state = 278;
			this.match(ReactParser.T__31);
			this.state = 279;
			this.match(ReactParser.Identifier);
			this.state = 280;
			this.match(ReactParser.T__8);
			this.state = 281;
			this.match(ReactParser.Identifier);
			this.state = 282;
			this.match(ReactParser.T__32);
			this.state = 283;
			this.match(ReactParser.T__0);
			this.state = 284;
			this.match(ReactParser.T__33);
			this.state = 285;
			this.match(ReactParser.T__6);
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268435648) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 7) !== 0)) {
				{
				this.state = 286;
				this.expression(0);
				}
			}

			this.state = 289;
			this.match(ReactParser.T__7);
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 290;
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
		this.enterRule(localctx, 44, ReactParser.RULE_useEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 293;
			this.match(ReactParser.T__34);
			this.state = 294;
			this.match(ReactParser.T__6);
			this.state = 297;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				{
				this.state = 295;
				this.arrowFunction();
				}
				break;
			case 6:
				{
				this.state = 296;
				this.functionExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 299;
				this.match(ReactParser.T__8);
				}
			}

			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 302;
				this.match(ReactParser.T__31);
				this.state = 303;
				this.parameters();
				this.state = 304;
				this.match(ReactParser.T__32);
				}
			}

			this.state = 308;
			this.match(ReactParser.T__7);
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 309;
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
		this.enterRule(localctx, 46, ReactParser.RULE_useRef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 312;
			this.match(ReactParser.T__4);
			this.state = 313;
			this.match(ReactParser.Identifier);
			this.state = 314;
			this.match(ReactParser.T__0);
			this.state = 315;
			this.match(ReactParser.T__35);
			this.state = 316;
			this.match(ReactParser.T__6);
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268435648) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 7) !== 0)) {
				{
				this.state = 317;
				this.expression(0);
				}
			}

			this.state = 320;
			this.match(ReactParser.T__7);
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 321;
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
		this.enterRule(localctx, 48, ReactParser.RULE_jsxElement);
		try {
			this.state = 328;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 324;
				this.jsxElementFull();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 325;
				this.selfClosingJsxElement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 326;
				this.jsxComponentFull();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 327;
				this.selfClosingComponent();
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
		this.enterRule(localctx, 50, ReactParser.RULE_jsxElementFull);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 330;
			this.match(ReactParser.T__19);
			this.state = 331;
			this.jsxTagName();
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 63) !== 0)) {
				{
				{
				this.state = 332;
				this.jsxAttribute();
				}
				}
				this.state = 337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 338;
			this.match(ReactParser.T__16);
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11 || _la===20) {
				{
				{
				this.state = 339;
				this.jsxElementContent();
				}
				}
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 345;
			this.match(ReactParser.T__36);
			this.state = 346;
			this.jsxTagName();
			this.state = 347;
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
		this.enterRule(localctx, 52, ReactParser.RULE_selfClosingJsxElement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 349;
			this.match(ReactParser.T__19);
			this.state = 350;
			this.jsxTagName();
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 63) !== 0)) {
				{
				{
				this.state = 351;
				this.jsxAttribute();
				}
				}
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 357;
			this.match(ReactParser.T__37);
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
		this.enterRule(localctx, 54, ReactParser.RULE_jsxTagName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 359;
			_la = this._input.LA(1);
			if(!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 63) !== 0))) {
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
		this.enterRule(localctx, 56, ReactParser.RULE_jsxAttribute);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 361;
			this.jsxAttributeName();
			this.state = 362;
			this.match(ReactParser.T__0);
			this.state = 363;
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
		this.enterRule(localctx, 58, ReactParser.RULE_jsxAttributeName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 365;
			_la = this._input.LA(1);
			if(!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 63) !== 0))) {
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
		this.enterRule(localctx, 60, ReactParser.RULE_jsxAttributeValue);
		let _la: number;
		try {
			this.state = 373;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 52:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 367;
				this.match(ReactParser.StringLiteral);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 368;
				this.match(ReactParser.T__10);
				this.state = 370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268435648) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 7) !== 0)) {
					{
					this.state = 369;
					this.expression(0);
					}
				}

				this.state = 372;
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
		this.enterRule(localctx, 62, ReactParser.RULE_jsxElementContent);
		try {
			this.state = 380;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 375;
				this.jsxElement();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 376;
				this.match(ReactParser.T__10);
				this.state = 377;
				this.expression(0);
				this.state = 378;
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
	public jsxComponentFull(): JsxComponentFullContext {
		let localctx: JsxComponentFullContext = new JsxComponentFullContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, ReactParser.RULE_jsxComponentFull);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 382;
			this.match(ReactParser.T__19);
			this.state = 383;
			this.match(ReactParser.Identifier);
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 63) !== 0)) {
				{
				{
				this.state = 384;
				this.jsxAttribute();
				}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===53) {
				{
				{
				this.state = 390;
				this.componentProps();
				}
				}
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 396;
			this.match(ReactParser.T__16);
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11 || _la===20) {
				{
				{
				this.state = 397;
				this.jsxElementContent();
				}
				}
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 403;
			this.match(ReactParser.T__36);
			this.state = 404;
			this.match(ReactParser.Identifier);
			this.state = 405;
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
	public selfClosingComponent(): SelfClosingComponentContext {
		let localctx: SelfClosingComponentContext = new SelfClosingComponentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, ReactParser.RULE_selfClosingComponent);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 407;
			this.match(ReactParser.T__19);
			this.state = 408;
			this.match(ReactParser.Identifier);
			this.state = 412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 63) !== 0)) {
				{
				{
				this.state = 409;
				this.jsxAttribute();
				}
				}
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===53) {
				{
				{
				this.state = 415;
				this.componentProps();
				}
				}
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 421;
			this.match(ReactParser.T__37);
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
	public componentProps(): ComponentPropsContext {
		let localctx: ComponentPropsContext = new ComponentPropsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, ReactParser.RULE_componentProps);
		let _la: number;
		try {
			this.state = 433;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 423;
				this.match(ReactParser.Identifier);
				this.state = 424;
				this.match(ReactParser.T__0);
				this.state = 425;
				this.match(ReactParser.StringLiteral);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 426;
				this.match(ReactParser.Identifier);
				this.state = 427;
				this.match(ReactParser.T__0);
				this.state = 428;
				this.match(ReactParser.T__10);
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268435648) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 7) !== 0)) {
					{
					this.state = 429;
					this.expression(0);
					}
				}

				this.state = 432;
				this.match(ReactParser.T__11);
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
			return this.precpred(this._ctx, 18);
		case 1:
			return this.precpred(this._ctx, 17);
		case 2:
			return this.precpred(this._ctx, 16);
		case 3:
			return this.precpred(this._ctx, 15);
		case 4:
			return this.precpred(this._ctx, 14);
		case 5:
			return this.precpred(this._ctx, 13);
		case 6:
			return this.precpred(this._ctx, 12);
		case 7:
			return this.precpred(this._ctx, 11);
		case 8:
			return this.precpred(this._ctx, 10);
		case 9:
			return this.precpred(this._ctx, 9);
		case 10:
			return this.precpred(this._ctx, 5);
		case 11:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,54,436,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,1,0,4,0,72,8,0,11,0,12,0,73,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,3,1,85,8,1,1,2,1,2,1,2,1,2,1,2,3,2,92,8,2,1,3,1,3,
	1,4,1,4,1,4,1,4,3,4,100,8,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,3,5,109,8,5,1,6,
	1,6,1,6,3,6,114,8,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,122,8,7,10,7,12,7,125,9,
	7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,133,8,8,1,8,3,8,136,8,8,1,9,1,9,5,9,140,8,
	9,10,9,12,9,143,9,9,1,9,3,9,146,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,3,10,160,8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,5,10,201,8,10,10,10,12,10,204,9,10,1,11,1,11,1,11,3,11,209,
	8,11,1,12,1,12,1,12,3,12,214,8,12,1,12,1,12,1,13,1,13,3,13,220,8,13,1,13,
	1,13,1,13,1,13,3,13,226,8,13,1,14,1,14,1,14,5,14,231,8,14,10,14,12,14,234,
	9,14,1,15,1,15,1,15,3,15,239,8,15,1,15,1,15,3,15,243,8,15,1,16,1,16,1,16,
	1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,
	19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,5,20,270,8,20,10,20,12,20,273,9,20,
	1,20,3,20,276,8,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,
	21,288,8,21,1,21,1,21,3,21,292,8,21,1,22,1,22,1,22,1,22,3,22,298,8,22,1,
	22,3,22,301,8,22,1,22,1,22,1,22,1,22,3,22,307,8,22,1,22,1,22,3,22,311,8,
	22,1,23,1,23,1,23,1,23,1,23,1,23,3,23,319,8,23,1,23,1,23,3,23,323,8,23,
	1,24,1,24,1,24,1,24,3,24,329,8,24,1,25,1,25,1,25,5,25,334,8,25,10,25,12,
	25,337,9,25,1,25,1,25,5,25,341,8,25,10,25,12,25,344,9,25,1,25,1,25,1,25,
	1,25,1,26,1,26,1,26,5,26,353,8,26,10,26,12,26,356,9,26,1,26,1,26,1,27,1,
	27,1,28,1,28,1,28,1,28,1,29,1,29,1,30,1,30,1,30,3,30,371,8,30,1,30,3,30,
	374,8,30,1,31,1,31,1,31,1,31,1,31,3,31,381,8,31,1,32,1,32,1,32,5,32,386,
	8,32,10,32,12,32,389,9,32,1,32,5,32,392,8,32,10,32,12,32,395,9,32,1,32,
	1,32,5,32,399,8,32,10,32,12,32,402,9,32,1,32,1,32,1,32,1,32,1,33,1,33,1,
	33,5,33,411,8,33,10,33,12,33,414,9,33,1,33,5,33,417,8,33,10,33,12,33,420,
	9,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,431,8,34,1,34,3,
	34,434,8,34,1,34,0,1,20,35,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
	34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,0,3,1,0,3,5,1,0,39,
	44,1,0,45,50,470,0,71,1,0,0,0,2,84,1,0,0,0,4,86,1,0,0,0,6,93,1,0,0,0,8,
	95,1,0,0,0,10,104,1,0,0,0,12,110,1,0,0,0,14,118,1,0,0,0,16,126,1,0,0,0,
	18,137,1,0,0,0,20,159,1,0,0,0,22,208,1,0,0,0,24,210,1,0,0,0,26,217,1,0,
	0,0,28,227,1,0,0,0,30,235,1,0,0,0,32,244,1,0,0,0,34,251,1,0,0,0,36,257,
	1,0,0,0,38,260,1,0,0,0,40,267,1,0,0,0,42,277,1,0,0,0,44,293,1,0,0,0,46,
	312,1,0,0,0,48,328,1,0,0,0,50,330,1,0,0,0,52,349,1,0,0,0,54,359,1,0,0,0,
	56,361,1,0,0,0,58,365,1,0,0,0,60,373,1,0,0,0,62,380,1,0,0,0,64,382,1,0,
	0,0,66,407,1,0,0,0,68,433,1,0,0,0,70,72,3,2,1,0,71,70,1,0,0,0,72,73,1,0,
	0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,1,1,0,0,0,75,85,3,4,2,0,76,85,3,8,4,
	0,77,85,3,30,15,0,78,85,3,10,5,0,79,85,3,42,21,0,80,85,3,44,22,0,81,85,
	3,46,23,0,82,85,3,24,12,0,83,85,3,40,20,0,84,75,1,0,0,0,84,76,1,0,0,0,84,
	77,1,0,0,0,84,78,1,0,0,0,84,79,1,0,0,0,84,80,1,0,0,0,84,81,1,0,0,0,84,82,
	1,0,0,0,84,83,1,0,0,0,85,3,1,0,0,0,86,87,3,6,3,0,87,88,5,53,0,0,88,89,5,
	1,0,0,89,91,3,20,10,0,90,92,5,2,0,0,91,90,1,0,0,0,91,92,1,0,0,0,92,5,1,
	0,0,0,93,94,7,0,0,0,94,7,1,0,0,0,95,96,5,6,0,0,96,97,5,53,0,0,97,99,5,7,
	0,0,98,100,3,14,7,0,99,98,1,0,0,0,99,100,1,0,0,0,100,101,1,0,0,0,101,102,
	5,8,0,0,102,103,3,18,9,0,103,9,1,0,0,0,104,105,5,53,0,0,105,106,5,1,0,0,
	106,108,3,20,10,0,107,109,5,2,0,0,108,107,1,0,0,0,108,109,1,0,0,0,109,11,
	1,0,0,0,110,111,5,6,0,0,111,113,5,7,0,0,112,114,3,14,7,0,113,112,1,0,0,
	0,113,114,1,0,0,0,114,115,1,0,0,0,115,116,5,8,0,0,116,117,3,18,9,0,117,
	13,1,0,0,0,118,123,5,53,0,0,119,120,5,9,0,0,120,122,5,53,0,0,121,119,1,
	0,0,0,122,125,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,15,1,0,0,0,125,
	123,1,0,0,0,126,132,5,10,0,0,127,133,3,20,10,0,128,129,5,7,0,0,129,130,
	3,48,24,0,130,131,5,8,0,0,131,133,1,0,0,0,132,127,1,0,0,0,132,128,1,0,0,
	0,132,133,1,0,0,0,133,135,1,0,0,0,134,136,5,2,0,0,135,134,1,0,0,0,135,136,
	1,0,0,0,136,17,1,0,0,0,137,141,5,11,0,0,138,140,3,2,1,0,139,138,1,0,0,0,
	140,143,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,145,1,0,0,0,143,141,
	1,0,0,0,144,146,3,16,8,0,145,144,1,0,0,0,145,146,1,0,0,0,146,147,1,0,0,
	0,147,148,5,12,0,0,148,19,1,0,0,0,149,150,6,10,-1,0,150,151,5,7,0,0,151,
	152,3,20,10,0,152,153,5,8,0,0,153,160,1,0,0,0,154,160,3,22,11,0,155,160,
	3,32,16,0,156,160,5,53,0,0,157,160,5,51,0,0,158,160,5,52,0,0,159,149,1,
	0,0,0,159,154,1,0,0,0,159,155,1,0,0,0,159,156,1,0,0,0,159,157,1,0,0,0,159,
	158,1,0,0,0,160,202,1,0,0,0,161,162,10,18,0,0,162,163,5,13,0,0,163,201,
	3,20,10,19,164,165,10,17,0,0,165,166,5,14,0,0,166,201,3,20,10,18,167,168,
	10,16,0,0,168,169,5,15,0,0,169,201,3,20,10,17,170,171,10,15,0,0,171,172,
	5,16,0,0,172,201,3,20,10,16,173,174,10,14,0,0,174,175,5,17,0,0,175,201,
	3,20,10,15,176,177,10,13,0,0,177,178,5,18,0,0,178,201,3,20,10,14,179,180,
	10,12,0,0,180,181,5,19,0,0,181,201,3,20,10,13,182,183,10,11,0,0,183,184,
	5,20,0,0,184,201,3,20,10,12,185,186,10,10,0,0,186,187,5,21,0,0,187,201,
	3,20,10,11,188,189,10,9,0,0,189,190,5,22,0,0,190,201,3,20,10,10,191,192,
	10,5,0,0,192,193,5,23,0,0,193,194,3,20,10,0,194,195,5,24,0,0,195,196,3,
	20,10,6,196,201,1,0,0,0,197,198,10,4,0,0,198,199,5,25,0,0,199,201,3,20,
	10,5,200,161,1,0,0,0,200,164,1,0,0,0,200,167,1,0,0,0,200,170,1,0,0,0,200,
	173,1,0,0,0,200,176,1,0,0,0,200,179,1,0,0,0,200,182,1,0,0,0,200,185,1,0,
	0,0,200,188,1,0,0,0,200,191,1,0,0,0,200,197,1,0,0,0,201,204,1,0,0,0,202,
	200,1,0,0,0,202,203,1,0,0,0,203,21,1,0,0,0,204,202,1,0,0,0,205,209,3,24,
	12,0,206,209,3,26,13,0,207,209,3,12,6,0,208,205,1,0,0,0,208,206,1,0,0,0,
	208,207,1,0,0,0,209,23,1,0,0,0,210,211,5,53,0,0,211,213,5,7,0,0,212,214,
	3,28,14,0,213,212,1,0,0,0,213,214,1,0,0,0,214,215,1,0,0,0,215,216,5,8,0,
	0,216,25,1,0,0,0,217,219,5,7,0,0,218,220,3,14,7,0,219,218,1,0,0,0,219,220,
	1,0,0,0,220,221,1,0,0,0,221,222,5,8,0,0,222,225,5,26,0,0,223,226,3,18,9,
	0,224,226,3,20,10,0,225,223,1,0,0,0,225,224,1,0,0,0,226,27,1,0,0,0,227,
	232,3,20,10,0,228,229,5,9,0,0,229,231,3,20,10,0,230,228,1,0,0,0,231,234,
	1,0,0,0,232,230,1,0,0,0,232,233,1,0,0,0,233,29,1,0,0,0,234,232,1,0,0,0,
	235,236,5,27,0,0,236,238,5,7,0,0,237,239,3,28,14,0,238,237,1,0,0,0,238,
	239,1,0,0,0,239,240,1,0,0,0,240,242,5,8,0,0,241,243,5,2,0,0,242,241,1,0,
	0,0,242,243,1,0,0,0,243,31,1,0,0,0,244,245,5,28,0,0,245,246,5,29,0,0,246,
	247,5,11,0,0,247,248,3,20,10,0,248,249,5,12,0,0,249,250,5,28,0,0,250,33,
	1,0,0,0,251,252,5,30,0,0,252,253,5,7,0,0,253,254,3,20,10,0,254,255,5,8,
	0,0,255,256,3,18,9,0,256,35,1,0,0,0,257,258,5,31,0,0,258,259,3,18,9,0,259,
	37,1,0,0,0,260,261,5,31,0,0,261,262,5,30,0,0,262,263,5,7,0,0,263,264,3,
	20,10,0,264,265,5,8,0,0,265,266,3,18,9,0,266,39,1,0,0,0,267,271,3,34,17,
	0,268,270,3,38,19,0,269,268,1,0,0,0,270,273,1,0,0,0,271,269,1,0,0,0,271,
	272,1,0,0,0,272,275,1,0,0,0,273,271,1,0,0,0,274,276,3,36,18,0,275,274,1,
	0,0,0,275,276,1,0,0,0,276,41,1,0,0,0,277,278,5,5,0,0,278,279,5,32,0,0,279,
	280,5,53,0,0,280,281,5,9,0,0,281,282,5,53,0,0,282,283,5,33,0,0,283,284,
	5,1,0,0,284,285,5,34,0,0,285,287,5,7,0,0,286,288,3,20,10,0,287,286,1,0,
	0,0,287,288,1,0,0,0,288,289,1,0,0,0,289,291,5,8,0,0,290,292,5,2,0,0,291,
	290,1,0,0,0,291,292,1,0,0,0,292,43,1,0,0,0,293,294,5,35,0,0,294,297,5,7,
	0,0,295,298,3,26,13,0,296,298,3,12,6,0,297,295,1,0,0,0,297,296,1,0,0,0,
	298,300,1,0,0,0,299,301,5,9,0,0,300,299,1,0,0,0,300,301,1,0,0,0,301,306,
	1,0,0,0,302,303,5,32,0,0,303,304,3,14,7,0,304,305,5,33,0,0,305,307,1,0,
	0,0,306,302,1,0,0,0,306,307,1,0,0,0,307,308,1,0,0,0,308,310,5,8,0,0,309,
	311,5,2,0,0,310,309,1,0,0,0,310,311,1,0,0,0,311,45,1,0,0,0,312,313,5,5,
	0,0,313,314,5,53,0,0,314,315,5,1,0,0,315,316,5,36,0,0,316,318,5,7,0,0,317,
	319,3,20,10,0,318,317,1,0,0,0,318,319,1,0,0,0,319,320,1,0,0,0,320,322,5,
	8,0,0,321,323,5,2,0,0,322,321,1,0,0,0,322,323,1,0,0,0,323,47,1,0,0,0,324,
	329,3,50,25,0,325,329,3,52,26,0,326,329,3,64,32,0,327,329,3,66,33,0,328,
	324,1,0,0,0,328,325,1,0,0,0,328,326,1,0,0,0,328,327,1,0,0,0,329,49,1,0,
	0,0,330,331,5,20,0,0,331,335,3,54,27,0,332,334,3,56,28,0,333,332,1,0,0,
	0,334,337,1,0,0,0,335,333,1,0,0,0,335,336,1,0,0,0,336,338,1,0,0,0,337,335,
	1,0,0,0,338,342,5,17,0,0,339,341,3,62,31,0,340,339,1,0,0,0,341,344,1,0,
	0,0,342,340,1,0,0,0,342,343,1,0,0,0,343,345,1,0,0,0,344,342,1,0,0,0,345,
	346,5,37,0,0,346,347,3,54,27,0,347,348,5,17,0,0,348,51,1,0,0,0,349,350,
	5,20,0,0,350,354,3,54,27,0,351,353,3,56,28,0,352,351,1,0,0,0,353,356,1,
	0,0,0,354,352,1,0,0,0,354,355,1,0,0,0,355,357,1,0,0,0,356,354,1,0,0,0,357,
	358,5,38,0,0,358,53,1,0,0,0,359,360,7,1,0,0,360,55,1,0,0,0,361,362,3,58,
	29,0,362,363,5,1,0,0,363,364,3,60,30,0,364,57,1,0,0,0,365,366,7,2,0,0,366,
	59,1,0,0,0,367,374,5,52,0,0,368,370,5,11,0,0,369,371,3,20,10,0,370,369,
	1,0,0,0,370,371,1,0,0,0,371,372,1,0,0,0,372,374,5,12,0,0,373,367,1,0,0,
	0,373,368,1,0,0,0,374,61,1,0,0,0,375,381,3,48,24,0,376,377,5,11,0,0,377,
	378,3,20,10,0,378,379,5,12,0,0,379,381,1,0,0,0,380,375,1,0,0,0,380,376,
	1,0,0,0,381,63,1,0,0,0,382,383,5,20,0,0,383,387,5,53,0,0,384,386,3,56,28,
	0,385,384,1,0,0,0,386,389,1,0,0,0,387,385,1,0,0,0,387,388,1,0,0,0,388,393,
	1,0,0,0,389,387,1,0,0,0,390,392,3,68,34,0,391,390,1,0,0,0,392,395,1,0,0,
	0,393,391,1,0,0,0,393,394,1,0,0,0,394,396,1,0,0,0,395,393,1,0,0,0,396,400,
	5,17,0,0,397,399,3,62,31,0,398,397,1,0,0,0,399,402,1,0,0,0,400,398,1,0,
	0,0,400,401,1,0,0,0,401,403,1,0,0,0,402,400,1,0,0,0,403,404,5,37,0,0,404,
	405,5,53,0,0,405,406,5,17,0,0,406,65,1,0,0,0,407,408,5,20,0,0,408,412,5,
	53,0,0,409,411,3,56,28,0,410,409,1,0,0,0,411,414,1,0,0,0,412,410,1,0,0,
	0,412,413,1,0,0,0,413,418,1,0,0,0,414,412,1,0,0,0,415,417,3,68,34,0,416,
	415,1,0,0,0,417,420,1,0,0,0,418,416,1,0,0,0,418,419,1,0,0,0,419,421,1,0,
	0,0,420,418,1,0,0,0,421,422,5,38,0,0,422,67,1,0,0,0,423,424,5,53,0,0,424,
	425,5,1,0,0,425,434,5,52,0,0,426,427,5,53,0,0,427,428,5,1,0,0,428,430,5,
	11,0,0,429,431,3,20,10,0,430,429,1,0,0,0,430,431,1,0,0,0,431,432,1,0,0,
	0,432,434,5,12,0,0,433,423,1,0,0,0,433,426,1,0,0,0,434,69,1,0,0,0,45,73,
	84,91,99,108,113,123,132,135,141,145,159,200,202,208,213,219,225,232,238,
	242,271,275,287,291,297,300,306,310,318,322,328,335,342,354,370,373,380,
	387,393,400,412,418,430,433];

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
	public conditionalStatement(): ConditionalStatementContext {
		return this.getTypedRuleContext(ConditionalStatementContext, 0) as ConditionalStatementContext;
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
export class NullishCoalescingContext extends ExpressionContext {
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
	    if(listener.enterNullishCoalescing) {
	 		listener.enterNullishCoalescing(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitNullishCoalescing) {
	 		listener.exitNullishCoalescing(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitNullishCoalescing) {
			return visitor.visitNullishCoalescing(this);
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
export class TernaryConditionContext extends ExpressionContext {
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
	    if(listener.enterTernaryCondition) {
	 		listener.enterTernaryCondition(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitTernaryCondition) {
	 		listener.exitTernaryCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitTernaryCondition) {
			return visitor.visitTernaryCondition(this);
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


export class IfStatementContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_ifStatement;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseStatementContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_elseStatement;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterElseStatement) {
	 		listener.enterElseStatement(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitElseStatement) {
	 		listener.exitElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitElseStatement) {
			return visitor.visitElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseIfStatementContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_elseIfStatement;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterElseIfStatement) {
	 		listener.enterElseIfStatement(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitElseIfStatement) {
	 		listener.exitElseIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitElseIfStatement) {
			return visitor.visitElseIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalStatementContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
	public elseIfStatement_list(): ElseIfStatementContext[] {
		return this.getTypedRuleContexts(ElseIfStatementContext) as ElseIfStatementContext[];
	}
	public elseIfStatement(i: number): ElseIfStatementContext {
		return this.getTypedRuleContext(ElseIfStatementContext, i) as ElseIfStatementContext;
	}
	public elseStatement(): ElseStatementContext {
		return this.getTypedRuleContext(ElseStatementContext, 0) as ElseStatementContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_conditionalStatement;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterConditionalStatement) {
	 		listener.enterConditionalStatement(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitConditionalStatement) {
	 		listener.exitConditionalStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitConditionalStatement) {
			return visitor.visitConditionalStatement(this);
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
	public jsxComponentFull(): JsxComponentFullContext {
		return this.getTypedRuleContext(JsxComponentFullContext, 0) as JsxComponentFullContext;
	}
	public selfClosingComponent(): SelfClosingComponentContext {
		return this.getTypedRuleContext(SelfClosingComponentContext, 0) as SelfClosingComponentContext;
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


export class JsxComponentFullContext extends ParserRuleContext {
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
	public jsxAttribute_list(): JsxAttributeContext[] {
		return this.getTypedRuleContexts(JsxAttributeContext) as JsxAttributeContext[];
	}
	public jsxAttribute(i: number): JsxAttributeContext {
		return this.getTypedRuleContext(JsxAttributeContext, i) as JsxAttributeContext;
	}
	public componentProps_list(): ComponentPropsContext[] {
		return this.getTypedRuleContexts(ComponentPropsContext) as ComponentPropsContext[];
	}
	public componentProps(i: number): ComponentPropsContext {
		return this.getTypedRuleContext(ComponentPropsContext, i) as ComponentPropsContext;
	}
	public jsxElementContent_list(): JsxElementContentContext[] {
		return this.getTypedRuleContexts(JsxElementContentContext) as JsxElementContentContext[];
	}
	public jsxElementContent(i: number): JsxElementContentContext {
		return this.getTypedRuleContext(JsxElementContentContext, i) as JsxElementContentContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_jsxComponentFull;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterJsxComponentFull) {
	 		listener.enterJsxComponentFull(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitJsxComponentFull) {
	 		listener.exitJsxComponentFull(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitJsxComponentFull) {
			return visitor.visitJsxComponentFull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelfClosingComponentContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(ReactParser.Identifier, 0);
	}
	public jsxAttribute_list(): JsxAttributeContext[] {
		return this.getTypedRuleContexts(JsxAttributeContext) as JsxAttributeContext[];
	}
	public jsxAttribute(i: number): JsxAttributeContext {
		return this.getTypedRuleContext(JsxAttributeContext, i) as JsxAttributeContext;
	}
	public componentProps_list(): ComponentPropsContext[] {
		return this.getTypedRuleContexts(ComponentPropsContext) as ComponentPropsContext[];
	}
	public componentProps(i: number): ComponentPropsContext {
		return this.getTypedRuleContext(ComponentPropsContext, i) as ComponentPropsContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_selfClosingComponent;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterSelfClosingComponent) {
	 		listener.enterSelfClosingComponent(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitSelfClosingComponent) {
	 		listener.exitSelfClosingComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitSelfClosingComponent) {
			return visitor.visitSelfClosingComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentPropsContext extends ParserRuleContext {
	constructor(parser?: ReactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(ReactParser.Identifier, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(ReactParser.StringLiteral, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ReactParser.RULE_componentProps;
	}
	public enterRule(listener: ReactListener): void {
	    if(listener.enterComponentProps) {
	 		listener.enterComponentProps(this);
		}
	}
	public exitRule(listener: ReactListener): void {
	    if(listener.exitComponentProps) {
	 		listener.exitComponentProps(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactVisitor<Result>): Result {
		if (visitor.visitComponentProps) {
			return visitor.visitComponentProps(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
