// Generated from React.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class ReactLexer extends Lexer {
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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
                                                            "'console.log'" ];
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
                                                             "IntegerLiteral", 
                                                             "StringLiteral", 
                                                             "Identifier", 
                                                             "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "IntegerLiteral", 
		"StringLiteral", "EscapeSequence", "Identifier", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, ReactLexer._ATN, ReactLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "React.g4"; }

	public get literalNames(): (string | null)[] { return ReactLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return ReactLexer.symbolicNames; }
	public get ruleNames(): string[] { return ReactLexer.ruleNames; }

	public get serializedATN(): number[] { return ReactLexer._serializedATN; }

	public get channelNames(): string[] { return ReactLexer.channelNames; }

	public get modeNames(): string[] { return ReactLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,27,165,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,
	1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
	1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,
	1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,19,1,
	19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
	1,22,1,22,1,22,1,22,1,22,1,23,4,23,135,8,23,11,23,12,23,136,1,24,1,24,1,
	24,5,24,142,8,24,10,24,12,24,145,9,24,1,24,1,24,1,25,1,25,1,25,1,26,1,26,
	5,26,154,8,26,10,26,12,26,157,9,26,1,27,4,27,160,8,27,11,27,12,27,161,1,
	27,1,27,0,0,28,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,
	25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,
	49,25,51,0,53,26,55,27,1,0,6,1,0,48,57,2,0,34,34,92,92,6,0,34,34,39,39,
	92,92,110,110,114,114,116,116,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,
	95,97,122,3,0,9,10,13,13,32,32,168,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,
	0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,
	0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,
	29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,
	0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,
	53,1,0,0,0,0,55,1,0,0,0,1,57,1,0,0,0,3,59,1,0,0,0,5,61,1,0,0,0,7,65,1,0,
	0,0,9,69,1,0,0,0,11,75,1,0,0,0,13,84,1,0,0,0,15,86,1,0,0,0,17,88,1,0,0,
	0,19,90,1,0,0,0,21,92,1,0,0,0,23,94,1,0,0,0,25,96,1,0,0,0,27,98,1,0,0,0,
	29,100,1,0,0,0,31,102,1,0,0,0,33,104,1,0,0,0,35,107,1,0,0,0,37,110,1,0,
	0,0,39,112,1,0,0,0,41,115,1,0,0,0,43,118,1,0,0,0,45,121,1,0,0,0,47,134,
	1,0,0,0,49,138,1,0,0,0,51,148,1,0,0,0,53,151,1,0,0,0,55,159,1,0,0,0,57,
	58,5,59,0,0,58,2,1,0,0,0,59,60,5,61,0,0,60,4,1,0,0,0,61,62,5,108,0,0,62,
	63,5,101,0,0,63,64,5,116,0,0,64,6,1,0,0,0,65,66,5,118,0,0,66,67,5,97,0,
	0,67,68,5,114,0,0,68,8,1,0,0,0,69,70,5,99,0,0,70,71,5,111,0,0,71,72,5,110,
	0,0,72,73,5,115,0,0,73,74,5,116,0,0,74,10,1,0,0,0,75,76,5,102,0,0,76,77,
	5,117,0,0,77,78,5,110,0,0,78,79,5,99,0,0,79,80,5,116,0,0,80,81,5,105,0,
	0,81,82,5,111,0,0,82,83,5,110,0,0,83,12,1,0,0,0,84,85,5,40,0,0,85,14,1,
	0,0,0,86,87,5,41,0,0,87,16,1,0,0,0,88,89,5,44,0,0,89,18,1,0,0,0,90,91,5,
	123,0,0,91,20,1,0,0,0,92,93,5,125,0,0,93,22,1,0,0,0,94,95,5,42,0,0,95,24,
	1,0,0,0,96,97,5,47,0,0,97,26,1,0,0,0,98,99,5,43,0,0,99,28,1,0,0,0,100,101,
	5,45,0,0,101,30,1,0,0,0,102,103,5,62,0,0,103,32,1,0,0,0,104,105,5,62,0,
	0,105,106,5,61,0,0,106,34,1,0,0,0,107,108,5,60,0,0,108,109,5,61,0,0,109,
	36,1,0,0,0,110,111,5,60,0,0,111,38,1,0,0,0,112,113,5,61,0,0,113,114,5,61,
	0,0,114,40,1,0,0,0,115,116,5,33,0,0,116,117,5,61,0,0,117,42,1,0,0,0,118,
	119,5,61,0,0,119,120,5,62,0,0,120,44,1,0,0,0,121,122,5,99,0,0,122,123,5,
	111,0,0,123,124,5,110,0,0,124,125,5,115,0,0,125,126,5,111,0,0,126,127,5,
	108,0,0,127,128,5,101,0,0,128,129,5,46,0,0,129,130,5,108,0,0,130,131,5,
	111,0,0,131,132,5,103,0,0,132,46,1,0,0,0,133,135,7,0,0,0,134,133,1,0,0,
	0,135,136,1,0,0,0,136,134,1,0,0,0,136,137,1,0,0,0,137,48,1,0,0,0,138,143,
	5,34,0,0,139,142,3,51,25,0,140,142,8,1,0,0,141,139,1,0,0,0,141,140,1,0,
	0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,146,1,0,0,0,145,
	143,1,0,0,0,146,147,5,34,0,0,147,50,1,0,0,0,148,149,5,92,0,0,149,150,7,
	2,0,0,150,52,1,0,0,0,151,155,7,3,0,0,152,154,7,4,0,0,153,152,1,0,0,0,154,
	157,1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,54,1,0,0,0,157,155,1,0,
	0,0,158,160,7,5,0,0,159,158,1,0,0,0,160,161,1,0,0,0,161,159,1,0,0,0,161,
	162,1,0,0,0,162,163,1,0,0,0,163,164,6,27,0,0,164,56,1,0,0,0,6,0,136,141,
	143,155,161,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ReactLexer.__ATN) {
			ReactLexer.__ATN = new ATNDeserializer().deserialize(ReactLexer._serializedATN);
		}

		return ReactLexer.__ATN;
	}


	static DecisionsToDFA = ReactLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}