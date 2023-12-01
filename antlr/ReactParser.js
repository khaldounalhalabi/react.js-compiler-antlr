// Generated from React.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ReactListener from './ReactListener.js';
import ReactVisitor from './ReactVisitor.js';

const serializedATN = [4,1,28,179,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,4,0,34,8,0,11,0,12,0,35,1,1,1,1,1,1,1,
1,1,1,3,1,43,8,1,1,2,1,2,1,2,1,2,1,2,3,2,50,8,2,1,3,1,3,1,4,1,4,1,4,1,4,
3,4,58,8,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,3,5,67,8,5,1,6,1,6,1,6,3,6,72,8,6,
1,6,1,6,1,6,1,7,1,7,1,7,5,7,80,8,7,10,7,12,7,83,9,7,1,8,1,8,5,8,87,8,8,10,
8,12,8,90,9,8,1,8,1,8,1,9,1,9,3,9,96,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,3,10,108,8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,140,8,10,10,10,12,10,143,9,10,
1,11,1,11,1,11,3,11,148,8,11,1,11,1,11,1,12,1,12,3,12,154,8,12,1,12,1,12,
1,12,1,12,1,13,1,13,1,13,5,13,163,8,13,10,13,12,13,166,9,13,1,14,1,14,1,
14,3,14,171,8,14,1,14,1,14,3,14,175,8,14,1,15,1,15,1,15,0,1,20,16,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,0,1,1,0,3,5,194,0,33,1,0,0,0,2,42,1,
0,0,0,4,44,1,0,0,0,6,51,1,0,0,0,8,53,1,0,0,0,10,62,1,0,0,0,12,68,1,0,0,0,
14,76,1,0,0,0,16,84,1,0,0,0,18,93,1,0,0,0,20,107,1,0,0,0,22,144,1,0,0,0,
24,151,1,0,0,0,26,159,1,0,0,0,28,167,1,0,0,0,30,176,1,0,0,0,32,34,3,2,1,
0,33,32,1,0,0,0,34,35,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,1,1,0,0,0,37,
43,3,4,2,0,38,43,3,8,4,0,39,43,3,18,9,0,40,43,3,30,15,0,41,43,3,10,5,0,42,
37,1,0,0,0,42,38,1,0,0,0,42,39,1,0,0,0,42,40,1,0,0,0,42,41,1,0,0,0,43,3,
1,0,0,0,44,45,3,6,3,0,45,46,5,27,0,0,46,47,5,1,0,0,47,49,3,20,10,0,48,50,
5,2,0,0,49,48,1,0,0,0,49,50,1,0,0,0,50,5,1,0,0,0,51,52,7,0,0,0,52,7,1,0,
0,0,53,54,5,6,0,0,54,55,5,27,0,0,55,57,5,7,0,0,56,58,3,14,7,0,57,56,1,0,
0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,60,5,8,0,0,60,61,3,16,8,0,61,9,1,0,0,
0,62,63,5,27,0,0,63,64,5,1,0,0,64,66,3,20,10,0,65,67,5,2,0,0,66,65,1,0,0,
0,66,67,1,0,0,0,67,11,1,0,0,0,68,69,5,6,0,0,69,71,5,7,0,0,70,72,3,14,7,0,
71,70,1,0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,73,74,5,8,0,0,74,75,3,16,8,0,75,
13,1,0,0,0,76,81,5,27,0,0,77,78,5,9,0,0,78,80,5,27,0,0,79,77,1,0,0,0,80,
83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,15,1,0,0,0,83,81,1,0,0,0,84,88,
5,10,0,0,85,87,3,2,1,0,86,85,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,
0,0,0,89,91,1,0,0,0,90,88,1,0,0,0,91,92,5,11,0,0,92,17,1,0,0,0,93,95,3,20,
10,0,94,96,5,2,0,0,95,94,1,0,0,0,95,96,1,0,0,0,96,19,1,0,0,0,97,98,6,10,
-1,0,98,99,5,7,0,0,99,100,3,20,10,0,100,101,5,8,0,0,101,108,1,0,0,0,102,
108,3,22,11,0,103,108,3,24,12,0,104,108,3,12,6,0,105,108,5,27,0,0,106,108,
5,24,0,0,107,97,1,0,0,0,107,102,1,0,0,0,107,103,1,0,0,0,107,104,1,0,0,0,
107,105,1,0,0,0,107,106,1,0,0,0,108,141,1,0,0,0,109,110,10,16,0,0,110,111,
5,12,0,0,111,140,3,20,10,17,112,113,10,15,0,0,113,114,5,13,0,0,114,140,3,
20,10,16,115,116,10,14,0,0,116,117,5,14,0,0,117,140,3,20,10,15,118,119,10,
13,0,0,119,120,5,15,0,0,120,140,3,20,10,14,121,122,10,12,0,0,122,123,5,16,
0,0,123,140,3,20,10,13,124,125,10,11,0,0,125,126,5,17,0,0,126,140,3,20,10,
12,127,128,10,10,0,0,128,129,5,18,0,0,129,140,3,20,10,11,130,131,10,9,0,
0,131,132,5,19,0,0,132,140,3,20,10,10,133,134,10,8,0,0,134,135,5,20,0,0,
135,140,3,20,10,9,136,137,10,7,0,0,137,138,5,21,0,0,138,140,3,20,10,8,139,
109,1,0,0,0,139,112,1,0,0,0,139,115,1,0,0,0,139,118,1,0,0,0,139,121,1,0,
0,0,139,124,1,0,0,0,139,127,1,0,0,0,139,130,1,0,0,0,139,133,1,0,0,0,139,
136,1,0,0,0,140,143,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,21,1,0,0,
0,143,141,1,0,0,0,144,145,5,27,0,0,145,147,5,7,0,0,146,148,3,26,13,0,147,
146,1,0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,149,150,5,8,0,0,150,23,1,0,0,
0,151,153,5,7,0,0,152,154,3,14,7,0,153,152,1,0,0,0,153,154,1,0,0,0,154,155,
1,0,0,0,155,156,5,8,0,0,156,157,5,22,0,0,157,158,3,16,8,0,158,25,1,0,0,0,
159,164,3,20,10,0,160,161,5,9,0,0,161,163,3,20,10,0,162,160,1,0,0,0,163,
166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,27,1,0,0,0,166,164,1,0,0,
0,167,168,5,23,0,0,168,170,5,7,0,0,169,171,3,26,13,0,170,169,1,0,0,0,170,
171,1,0,0,0,171,172,1,0,0,0,172,174,5,8,0,0,173,175,5,2,0,0,174,173,1,0,
0,0,174,175,1,0,0,0,175,29,1,0,0,0,176,177,3,28,14,0,177,31,1,0,0,0,17,35,
42,49,57,66,71,81,88,95,107,139,141,147,153,164,170,174];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ReactParser extends antlr4.Parser {

    static grammarFileName = "React.g4";
    static literalNames = [ null, "'='", "';'", "'let'", "'var'", "'const'", 
                            "'function'", "'('", "')'", "','", "'{'", "'}'", 
                            "'*'", "'/'", "'+'", "'-'", "'>'", "'>='", "'<='", 
                            "'<'", "'=='", "'!='", "'=>'", "'console.log'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "Literal", "IntegerLiteral", "StringLiteral", 
                             "Identifier", "WS" ];
    static ruleNames = [ "program", "statement", "variableDeclaration", 
                         "variableType", "functionDeclaration", "assignment", 
                         "functionExpression", "parameters", "block", "expressionStatement", 
                         "expression", "functionCall", "arrowFunction", 
                         "arguments", "consoleLogExpression", "consoleLogStatement" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ReactParser.ruleNames;
        this.literalNames = ReactParser.literalNames;
        this.symbolicNames = ReactParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 10:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
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
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ReactParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 32;
	            this.statement();
	            this.state = 35; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 159383800) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ReactParser.RULE_statement);
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.variableDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
	            this.functionDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 39;
	            this.expressionStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 40;
	            this.consoleLogStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 41;
	            this.assignment();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ReactParser.RULE_variableDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
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
	        if(_la===2) {
	            this.state = 48;
	            this.match(ReactParser.T__1);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableType() {
	    let localctx = new VariableTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ReactParser.RULE_variableType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 56) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ReactParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(ReactParser.T__5);
	        this.state = 54;
	        this.match(ReactParser.Identifier);
	        this.state = 55;
	        this.match(ReactParser.T__6);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 56;
	            this.parameters();
	        }

	        this.state = 59;
	        this.match(ReactParser.T__7);
	        this.state = 60;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ReactParser.RULE_assignment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(ReactParser.Identifier);
	        this.state = 63;
	        this.match(ReactParser.T__0);
	        this.state = 64;
	        this.expression(0);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 65;
	            this.match(ReactParser.T__1);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionExpression() {
	    let localctx = new FunctionExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ReactParser.RULE_functionExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(ReactParser.T__5);
	        this.state = 69;
	        this.match(ReactParser.T__6);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 70;
	            this.parameters();
	        }

	        this.state = 73;
	        this.match(ReactParser.T__7);
	        this.state = 74;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameters() {
	    let localctx = new ParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ReactParser.RULE_parameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(ReactParser.Identifier);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 77;
	            this.match(ReactParser.T__8);
	            this.state = 78;
	            this.match(ReactParser.Identifier);
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ReactParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(ReactParser.T__9);
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 159383800) !== 0)) {
	            this.state = 85;
	            this.statement();
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 91;
	        this.match(ReactParser.T__10);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ReactParser.RULE_expressionStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.expression(0);
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 94;
	            this.match(ReactParser.T__1);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, ReactParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 98;
	            this.match(ReactParser.T__6);
	            this.state = 99;
	            this.expression(0);
	            this.state = 100;
	            this.match(ReactParser.T__7);
	            break;

	        case 2:
	            localctx = new FuncCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 102;
	            this.functionCall();
	            break;

	        case 3:
	            localctx = new ArrowFuncContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 103;
	            this.arrowFunction();
	            break;

	        case 4:
	            localctx = new FuncExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 104;
	            this.functionExpression();
	            break;

	        case 5:
	            localctx = new IDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 105;
	            this.match(ReactParser.Identifier);
	            break;

	        case 6:
	            localctx = new LitteralContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 106;
	            this.match(ReactParser.Literal);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 141;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 139;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplicationContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
	                    this.state = 109;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 110;
	                    this.match(ReactParser.T__11);
	                    this.state = 111;
	                    this.expression(17);
	                    break;

	                case 2:
	                    localctx = new DivisionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
	                    this.state = 112;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 113;
	                    this.match(ReactParser.T__12);
	                    this.state = 114;
	                    this.expression(16);
	                    break;

	                case 3:
	                    localctx = new AdditionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
	                    this.state = 115;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 116;
	                    this.match(ReactParser.T__13);
	                    this.state = 117;
	                    this.expression(15);
	                    break;

	                case 4:
	                    localctx = new SubtractionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
	                    this.state = 118;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 119;
	                    this.match(ReactParser.T__14);
	                    this.state = 120;
	                    this.expression(14);
	                    break;

	                case 5:
	                    localctx = new MoreThanContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
	                    this.state = 121;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 122;
	                    this.match(ReactParser.T__15);
	                    this.state = 123;
	                    this.expression(13);
	                    break;

	                case 6:
	                    localctx = new MoreThanOrEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
	                    this.state = 124;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 125;
	                    this.match(ReactParser.T__16);
	                    this.state = 126;
	                    this.expression(12);
	                    break;

	                case 7:
	                    localctx = new LessThanOrEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
	                    this.state = 127;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 128;
	                    this.match(ReactParser.T__17);
	                    this.state = 129;
	                    this.expression(11);
	                    break;

	                case 8:
	                    localctx = new LessThanContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
	                    this.state = 130;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 131;
	                    this.match(ReactParser.T__18);
	                    this.state = 132;
	                    this.expression(10);
	                    break;

	                case 9:
	                    localctx = new EqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
	                    this.state = 133;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 134;
	                    this.match(ReactParser.T__19);
	                    this.state = 135;
	                    this.expression(9);
	                    break;

	                case 10:
	                    localctx = new NotEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expression);
	                    this.state = 136;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 137;
	                    this.match(ReactParser.T__20);
	                    this.state = 138;
	                    this.expression(8);
	                    break;

	                } 
	            }
	            this.state = 143;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ReactParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.match(ReactParser.Identifier);
	        this.state = 145;
	        this.match(ReactParser.T__6);
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 150995136) !== 0)) {
	            this.state = 146;
	            this.arguments();
	        }

	        this.state = 149;
	        this.match(ReactParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrowFunction() {
	    let localctx = new ArrowFunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ReactParser.RULE_arrowFunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(ReactParser.T__6);
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 152;
	            this.parameters();
	        }

	        this.state = 155;
	        this.match(ReactParser.T__7);
	        this.state = 156;
	        this.match(ReactParser.T__21);
	        this.state = 157;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ReactParser.RULE_arguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.expression(0);
	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 160;
	            this.match(ReactParser.T__8);
	            this.state = 161;
	            this.expression(0);
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleLogExpression() {
	    let localctx = new ConsoleLogExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ReactParser.RULE_consoleLogExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(ReactParser.T__22);
	        this.state = 168;
	        this.match(ReactParser.T__6);
	        this.state = 170;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 150995136) !== 0)) {
	            this.state = 169;
	            this.arguments();
	        }

	        this.state = 172;
	        this.match(ReactParser.T__7);
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 173;
	            this.match(ReactParser.T__1);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleLogStatement() {
	    let localctx = new ConsoleLogStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ReactParser.RULE_consoleLogStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.consoleLogExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ReactParser.EOF = antlr4.Token.EOF;
ReactParser.T__0 = 1;
ReactParser.T__1 = 2;
ReactParser.T__2 = 3;
ReactParser.T__3 = 4;
ReactParser.T__4 = 5;
ReactParser.T__5 = 6;
ReactParser.T__6 = 7;
ReactParser.T__7 = 8;
ReactParser.T__8 = 9;
ReactParser.T__9 = 10;
ReactParser.T__10 = 11;
ReactParser.T__11 = 12;
ReactParser.T__12 = 13;
ReactParser.T__13 = 14;
ReactParser.T__14 = 15;
ReactParser.T__15 = 16;
ReactParser.T__16 = 17;
ReactParser.T__17 = 18;
ReactParser.T__18 = 19;
ReactParser.T__19 = 20;
ReactParser.T__20 = 21;
ReactParser.T__21 = 22;
ReactParser.T__22 = 23;
ReactParser.Literal = 24;
ReactParser.IntegerLiteral = 25;
ReactParser.StringLiteral = 26;
ReactParser.Identifier = 27;
ReactParser.WS = 28;

ReactParser.RULE_program = 0;
ReactParser.RULE_statement = 1;
ReactParser.RULE_variableDeclaration = 2;
ReactParser.RULE_variableType = 3;
ReactParser.RULE_functionDeclaration = 4;
ReactParser.RULE_assignment = 5;
ReactParser.RULE_functionExpression = 6;
ReactParser.RULE_parameters = 7;
ReactParser.RULE_block = 8;
ReactParser.RULE_expressionStatement = 9;
ReactParser.RULE_expression = 10;
ReactParser.RULE_functionCall = 11;
ReactParser.RULE_arrowFunction = 12;
ReactParser.RULE_arguments = 13;
ReactParser.RULE_consoleLogExpression = 14;
ReactParser.RULE_consoleLogStatement = 15;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_statement;
    }

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	consoleLogStatement() {
	    return this.getTypedRuleContext(ConsoleLogStatementContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_variableDeclaration;
    }

	variableType() {
	    return this.getTypedRuleContext(VariableTypeContext,0);
	};

	Identifier() {
	    return this.getToken(ReactParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitVariableDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_variableType;
    }


	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterVariableType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitVariableType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitVariableType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_functionDeclaration;
    }

	Identifier() {
	    return this.getToken(ReactParser.Identifier, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	parameters() {
	    return this.getTypedRuleContext(ParametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_assignment;
    }

	Identifier() {
	    return this.getToken(ReactParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_functionExpression;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	parameters() {
	    return this.getTypedRuleContext(ParametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterFunctionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitFunctionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitFunctionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_parameters;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ReactParser.Identifier);
	    } else {
	        return this.getToken(ReactParser.Identifier, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitParameters(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitParameters(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_block;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_expressionStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitExpressionStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitExpressionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MultiplicationContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterMultiplication(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitMultiplication(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitMultiplication(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.MultiplicationContext = MultiplicationContext;

class AdditionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterAddition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitAddition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitAddition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.AdditionContext = AdditionContext;

class NotEqualContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterNotEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitNotEqual(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitNotEqual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.NotEqualContext = NotEqualContext;

class LessThanOrEqualContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterLessThanOrEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitLessThanOrEqual(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitLessThanOrEqual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.LessThanOrEqualContext = LessThanOrEqualContext;

class MoreThanOrEqualContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterMoreThanOrEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitMoreThanOrEqual(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitMoreThanOrEqual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.MoreThanOrEqualContext = MoreThanOrEqualContext;

class ArrowFuncContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arrowFunction() {
	    return this.getTypedRuleContext(ArrowFunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterArrowFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitArrowFunc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitArrowFunc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.ArrowFuncContext = ArrowFuncContext;

class FuncExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionExpression() {
	    return this.getTypedRuleContext(FunctionExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterFuncExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitFuncExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitFuncExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.FuncExprContext = FuncExprContext;

class FuncCallContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterFuncCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitFuncCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitFuncCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.FuncCallContext = FuncCallContext;

class LessThanContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterLessThan(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitLessThan(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitLessThan(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.LessThanContext = LessThanContext;

class SubtractionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterSubtraction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitSubtraction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitSubtraction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.SubtractionContext = SubtractionContext;

class ExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.ExprContext = ExprContext;

class EqualContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitEqual(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitEqual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.EqualContext = EqualContext;

class LitteralContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Literal() {
	    return this.getToken(ReactParser.Literal, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterLitteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitLitteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitLitteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.LitteralContext = LitteralContext;

class DivisionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterDivision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitDivision(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitDivision(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.DivisionContext = DivisionContext;

class IDContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(ReactParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitID(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitID(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.IDContext = IDContext;

class MoreThanContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterMoreThan(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitMoreThan(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitMoreThan(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ReactParser.MoreThanContext = MoreThanContext;

class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_functionCall;
    }

	Identifier() {
	    return this.getToken(ReactParser.Identifier, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrowFunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_arrowFunction;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	parameters() {
	    return this.getTypedRuleContext(ParametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterArrowFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitArrowFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitArrowFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_arguments;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitArguments(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleLogExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_consoleLogExpression;
    }

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterConsoleLogExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitConsoleLogExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitConsoleLogExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleLogStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ReactParser.RULE_consoleLogStatement;
    }

	consoleLogExpression() {
	    return this.getTypedRuleContext(ConsoleLogExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.enterConsoleLogStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ReactListener ) {
	        listener.exitConsoleLogStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ReactVisitor ) {
	        return visitor.visitConsoleLogStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ReactParser.ProgramContext = ProgramContext; 
ReactParser.StatementContext = StatementContext; 
ReactParser.VariableDeclarationContext = VariableDeclarationContext; 
ReactParser.VariableTypeContext = VariableTypeContext; 
ReactParser.FunctionDeclarationContext = FunctionDeclarationContext; 
ReactParser.AssignmentContext = AssignmentContext; 
ReactParser.FunctionExpressionContext = FunctionExpressionContext; 
ReactParser.ParametersContext = ParametersContext; 
ReactParser.BlockContext = BlockContext; 
ReactParser.ExpressionStatementContext = ExpressionStatementContext; 
ReactParser.ExpressionContext = ExpressionContext; 
ReactParser.FunctionCallContext = FunctionCallContext; 
ReactParser.ArrowFunctionContext = ArrowFunctionContext; 
ReactParser.ArgumentsContext = ArgumentsContext; 
ReactParser.ConsoleLogExpressionContext = ConsoleLogExpressionContext; 
ReactParser.ConsoleLogStatementContext = ConsoleLogStatementContext; 
