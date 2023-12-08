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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'='", "'let'", 
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
		"T__41", "T__42", "T__43", "T__44", "IntegerLiteral", "StringLiteral", 
		"EscapeSequence", "Identifier", "WS",
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

	public static readonly _serializedATN: number[] = [4,0,49,326,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,
	7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,
	45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,1,0,1,0,1,1,1,1,1,2,1,2,1,2,
	1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
	1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,
	11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,17,
	1,18,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,
	23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,25,
	1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,
	29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,
	1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,34,1,
	34,1,34,1,34,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,37,1,37,1,38,1,38,1,39,
	1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,
	41,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,44,
	1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,45,4,45,285,8,45,11,45,12,
	45,286,1,46,1,46,1,46,5,46,292,8,46,10,46,12,46,295,9,46,1,46,1,46,1,46,
	1,46,1,46,5,46,302,8,46,10,46,12,46,305,9,46,1,46,3,46,308,8,46,1,47,1,
	47,1,47,1,48,1,48,5,48,315,8,48,10,48,12,48,318,9,48,1,49,4,49,321,8,49,
	11,49,12,49,322,1,49,1,49,0,0,50,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,
	9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,
	21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,
	33,67,34,69,35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,87,44,89,
	45,91,46,93,47,95,0,97,48,99,49,1,0,7,1,0,48,57,2,0,34,34,92,92,1,0,39,
	39,6,0,34,34,39,39,92,92,110,110,114,114,116,116,3,0,65,90,95,95,97,122,
	4,0,48,57,65,90,95,95,97,122,3,0,9,10,13,13,32,32,332,0,1,1,0,0,0,0,3,1,
	0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,
	1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,
	0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,
	1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,
	0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,
	1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,
	0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,
	1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,
	0,0,93,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,1,101,1,0,0,0,3,103,1,0,0,0,5,
	105,1,0,0,0,7,109,1,0,0,0,9,113,1,0,0,0,11,119,1,0,0,0,13,128,1,0,0,0,15,
	130,1,0,0,0,17,132,1,0,0,0,19,134,1,0,0,0,21,141,1,0,0,0,23,143,1,0,0,0,
	25,145,1,0,0,0,27,147,1,0,0,0,29,149,1,0,0,0,31,151,1,0,0,0,33,153,1,0,
	0,0,35,155,1,0,0,0,37,158,1,0,0,0,39,161,1,0,0,0,41,163,1,0,0,0,43,166,
	1,0,0,0,45,169,1,0,0,0,47,172,1,0,0,0,49,184,1,0,0,0,51,186,1,0,0,0,53,
	188,1,0,0,0,55,190,1,0,0,0,57,192,1,0,0,0,59,201,1,0,0,0,61,211,1,0,0,0,
	63,218,1,0,0,0,65,221,1,0,0,0,67,224,1,0,0,0,69,229,1,0,0,0,71,233,1,0,
	0,0,73,237,1,0,0,0,75,240,1,0,0,0,77,242,1,0,0,0,79,244,1,0,0,0,81,248,
	1,0,0,0,83,256,1,0,0,0,85,260,1,0,0,0,87,266,1,0,0,0,89,273,1,0,0,0,91,
	284,1,0,0,0,93,307,1,0,0,0,95,309,1,0,0,0,97,312,1,0,0,0,99,320,1,0,0,0,
	101,102,5,59,0,0,102,2,1,0,0,0,103,104,5,61,0,0,104,4,1,0,0,0,105,106,5,
	108,0,0,106,107,5,101,0,0,107,108,5,116,0,0,108,6,1,0,0,0,109,110,5,118,
	0,0,110,111,5,97,0,0,111,112,5,114,0,0,112,8,1,0,0,0,113,114,5,99,0,0,114,
	115,5,111,0,0,115,116,5,110,0,0,116,117,5,115,0,0,117,118,5,116,0,0,118,
	10,1,0,0,0,119,120,5,102,0,0,120,121,5,117,0,0,121,122,5,110,0,0,122,123,
	5,99,0,0,123,124,5,116,0,0,124,125,5,105,0,0,125,126,5,111,0,0,126,127,
	5,110,0,0,127,12,1,0,0,0,128,129,5,40,0,0,129,14,1,0,0,0,130,131,5,41,0,
	0,131,16,1,0,0,0,132,133,5,44,0,0,133,18,1,0,0,0,134,135,5,114,0,0,135,
	136,5,101,0,0,136,137,5,116,0,0,137,138,5,117,0,0,138,139,5,114,0,0,139,
	140,5,110,0,0,140,20,1,0,0,0,141,142,5,123,0,0,142,22,1,0,0,0,143,144,5,
	125,0,0,144,24,1,0,0,0,145,146,5,42,0,0,146,26,1,0,0,0,147,148,5,47,0,0,
	148,28,1,0,0,0,149,150,5,43,0,0,150,30,1,0,0,0,151,152,5,45,0,0,152,32,
	1,0,0,0,153,154,5,62,0,0,154,34,1,0,0,0,155,156,5,62,0,0,156,157,5,61,0,
	0,157,36,1,0,0,0,158,159,5,60,0,0,159,160,5,61,0,0,160,38,1,0,0,0,161,162,
	5,60,0,0,162,40,1,0,0,0,163,164,5,61,0,0,164,165,5,61,0,0,165,42,1,0,0,
	0,166,167,5,33,0,0,167,168,5,61,0,0,168,44,1,0,0,0,169,170,5,61,0,0,170,
	171,5,62,0,0,171,46,1,0,0,0,172,173,5,99,0,0,173,174,5,111,0,0,174,175,
	5,110,0,0,175,176,5,115,0,0,176,177,5,111,0,0,177,178,5,108,0,0,178,179,
	5,101,0,0,179,180,5,46,0,0,180,181,5,108,0,0,181,182,5,111,0,0,182,183,
	5,103,0,0,183,48,1,0,0,0,184,185,5,96,0,0,185,50,1,0,0,0,186,187,5,36,0,
	0,187,52,1,0,0,0,188,189,5,91,0,0,189,54,1,0,0,0,190,191,5,93,0,0,191,56,
	1,0,0,0,192,193,5,117,0,0,193,194,5,115,0,0,194,195,5,101,0,0,195,196,5,
	83,0,0,196,197,5,116,0,0,197,198,5,97,0,0,198,199,5,116,0,0,199,200,5,101,
	0,0,200,58,1,0,0,0,201,202,5,117,0,0,202,203,5,115,0,0,203,204,5,101,0,
	0,204,205,5,69,0,0,205,206,5,102,0,0,206,207,5,102,0,0,207,208,5,101,0,
	0,208,209,5,99,0,0,209,210,5,116,0,0,210,60,1,0,0,0,211,212,5,117,0,0,212,
	213,5,115,0,0,213,214,5,101,0,0,214,215,5,82,0,0,215,216,5,101,0,0,216,
	217,5,102,0,0,217,62,1,0,0,0,218,219,5,60,0,0,219,220,5,47,0,0,220,64,1,
	0,0,0,221,222,5,47,0,0,222,223,5,62,0,0,223,66,1,0,0,0,224,225,5,109,0,
	0,225,226,5,97,0,0,226,227,5,105,0,0,227,228,5,110,0,0,228,68,1,0,0,0,229,
	230,5,100,0,0,230,231,5,105,0,0,231,232,5,118,0,0,232,70,1,0,0,0,233,234,
	5,105,0,0,234,235,5,109,0,0,235,236,5,103,0,0,236,72,1,0,0,0,237,238,5,
	104,0,0,238,239,5,49,0,0,239,74,1,0,0,0,240,241,5,112,0,0,241,76,1,0,0,
	0,242,243,5,97,0,0,243,78,1,0,0,0,244,245,5,115,0,0,245,246,5,114,0,0,246,
	247,5,99,0,0,247,80,1,0,0,0,248,249,5,111,0,0,249,250,5,110,0,0,250,251,
	5,67,0,0,251,252,5,108,0,0,252,253,5,105,0,0,253,254,5,99,0,0,254,255,5,
	107,0,0,255,82,1,0,0,0,256,257,5,114,0,0,257,258,5,101,0,0,258,259,5,102,
	0,0,259,84,1,0,0,0,260,261,5,119,0,0,261,262,5,105,0,0,262,263,5,100,0,
	0,263,264,5,116,0,0,264,265,5,104,0,0,265,86,1,0,0,0,266,267,5,104,0,0,
	267,268,5,101,0,0,268,269,5,105,0,0,269,270,5,103,0,0,270,271,5,104,0,0,
	271,272,5,116,0,0,272,88,1,0,0,0,273,274,5,99,0,0,274,275,5,108,0,0,275,
	276,5,97,0,0,276,277,5,115,0,0,277,278,5,115,0,0,278,279,5,78,0,0,279,280,
	5,97,0,0,280,281,5,109,0,0,281,282,5,101,0,0,282,90,1,0,0,0,283,285,7,0,
	0,0,284,283,1,0,0,0,285,286,1,0,0,0,286,284,1,0,0,0,286,287,1,0,0,0,287,
	92,1,0,0,0,288,293,5,34,0,0,289,292,3,95,47,0,290,292,8,1,0,0,291,289,1,
	0,0,0,291,290,1,0,0,0,292,295,1,0,0,0,293,291,1,0,0,0,293,294,1,0,0,0,294,
	296,1,0,0,0,295,293,1,0,0,0,296,308,5,34,0,0,297,303,5,39,0,0,298,299,5,
	92,0,0,299,302,5,34,0,0,300,302,8,2,0,0,301,298,1,0,0,0,301,300,1,0,0,0,
	302,305,1,0,0,0,303,301,1,0,0,0,303,304,1,0,0,0,304,306,1,0,0,0,305,303,
	1,0,0,0,306,308,5,39,0,0,307,288,1,0,0,0,307,297,1,0,0,0,308,94,1,0,0,0,
	309,310,5,92,0,0,310,311,7,3,0,0,311,96,1,0,0,0,312,316,7,4,0,0,313,315,
	7,5,0,0,314,313,1,0,0,0,315,318,1,0,0,0,316,314,1,0,0,0,316,317,1,0,0,0,
	317,98,1,0,0,0,318,316,1,0,0,0,319,321,7,6,0,0,320,319,1,0,0,0,321,322,
	1,0,0,0,322,320,1,0,0,0,322,323,1,0,0,0,323,324,1,0,0,0,324,325,6,49,0,
	0,325,100,1,0,0,0,9,0,286,291,293,301,303,307,316,322,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ReactLexer.__ATN) {
			ReactLexer.__ATN = new ATNDeserializer().deserialize(ReactLexer._serializedATN);
		}

		return ReactLexer.__ATN;
	}


	static DecisionsToDFA = ReactLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}