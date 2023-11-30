grammar React;

program: statements* EOF
;

statements: (declaration ';'? | expression ';'? | calls ';'?)+;

expression    : expression '*' expression                             # Multiplication
              | expression '+' expression                             # Addition
              | ID                                                    # Identifier
              | evaluation                                            # Value
              ;

declaration : variableDeclaration
            | functionDeclaration
            ;

// variables
variableDeclaration:VARTYPE ID ('=' evaluation)?;

// functions
functionDeclaration: anonymousFunction | regularFunction;

regularFunction: 'function' ID '(' parameters? ')' block;

anonymousFunction : VARTYPE ID '=' '(' parameters? ')' block;

parameters: ID (',' ID)*;

block: '{' statements* return? '}';

return: 'return' expression?;

console:'console.log(' expression ')';

calls
    : console
    | ID ('(' parameters? ')')?
    ;

evaluation : (DIGIT* |string);

string: StringLiteral                                      #DoubleQuoteString
      | SingleQuoteStringLiteral                           #SingleQuoteString
      | string '+' string                                  #Concatenation
      ;

VARTYPE : 'let' | 'const' | 'var';
LETTER: [a-zA-Z];
DIGIT: [0-9];
UNDERSCORE: '_';
ID: LETTER (LETTER | DIGIT | UNDERSCORE)*;
WS: [ \t\r\n]+ -> skip;

// strings
StringLiteral: '"' (EscapeSequence | ~["\\])* '"';
SingleQuoteStringLiteral: '\'' (EscapeSequence | ~['\\])* '\'';
EscapeSequence: '\\' (["\\/bfnrt] | UnicodeEscape | LineContinuation);
UnicodeEscape: 'u' HexDigit HexDigit HexDigit HexDigit;
LineContinuation: '\\' [\r\n\u2028\u2029];
HexDigit: [0-9a-fA-F];

//TODO::for GPT
/*
grammar React;

program: statements* EOF
;

statements: (declaration ';'? | expression ';'? | calls ';'?)+;

expression    : expression '*' expression                                                    # Multiplication
              | expression '+' expression                                                    # Addition
              | ID                                                                           # Identifier
              | evaluation                                                                   # Value
              ;

declaration : variableDeclaration
            | functionDeclaration
            ;

// variables
variableDeclaration:VARTYPE ID ('=' evaluation)?;

// functions
functionDeclaration: anonymousFunction | regularFunction;

regularFunction: 'function' ID '(' parameters? ')' block;

anonymousFunction : VARTYPE ID '=' '(' parameters? ')' block;

parameters: ID (',' ID)*;

block: '{' statements* return? '}';

return: 'return' expression?;

console:'console.log(' expression ')';

calls
    : console
    | ID ('(' parameters? ')')?
    ;

evaluation : (DIGIT* |string);

string: StringLiteral                                      #DoubleQuoteString
      | SingleQuoteStringLiteral                            #SingleQuoteString
      | string '+' string                                    #Concatenation
      ;

VARTYPE : 'let' | 'const' | 'var';
LETTER: [a-zA-Z];
DIGIT: [0-9];
UNDERSCORE: '_';
ID: LETTER (LETTER | DIGIT | UNDERSCORE)*;
WS: [ \t\r\n]+ -> skip;

// strings
StringLiteral: '"' (EscapeSequence | ~["\\])* '"';
SingleQuoteStringLiteral: '\'' (EscapeSequence | ~['\\])* '\'';
EscapeSequence: '\\' (["\\/bfnrt] | UnicodeEscape | LineContinuation);
UnicodeEscape: 'u' HexDigit HexDigit HexDigit HexDigit;
LineContinuation: '\\' [\r\n\u2028\u2029];
HexDigit: [0-9a-fA-F]; error(153): React.g4:6:0: rule statements contains a closure with at least one alternative that can match an empty string
*/