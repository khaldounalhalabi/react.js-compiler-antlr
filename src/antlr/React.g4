grammar React;
import Jsx;

program: statement+;

statement: variableDeclaration
         | functionDeclaration
         | consoleLogExpression
         | assignment
         | useState
         | useEffect
         | useRef
         | functionCall
         | conditionalStatement
         ;

variableDeclaration: variableType Identifier '=' expression ';'?;

variableType: 'let' | 'var' | 'const';

functionDeclaration: 'function' Identifier '(' parameters? ')' block;

assignment: Identifier '=' expression ';'?;

functionExpression: 'function' '(' parameters? ')' block;

parameters: Identifier (',' Identifier)*;

return:'return' (expression|'(' jsxElement ')')? ';'?;

block: '{' statement* return?'}';

expression: expression '*' expression                           #Multiplication
          | expression '/' expression                           #Division
          | expression '+' expression                           #Addition
          | expression '-' expression                           #Subtraction
          | expression '>' expression                           #MoreThan
          | expression '>=' expression                          #MoreThanOrEqual
          | expression '<=' expression                          #LessThanOrEqual
          | expression '<' expression                           #LessThan
          | expression '==' expression                          #Equal
          | expression '!=' expression                          #NotEqual
          | '(' expression ')'                                  #BracedExpression
          | funcExpr                                            #FunctionalExpression
          | template                                            #TemplateString
          | expression '?' expression ':' expression            #TernaryCondition
          | expression '??' expression                          #NullishCoalescing
          | Identifier                                          #ID
          | IntegerLiteral                                      #Number
          | StringLiteral                                       #String
          ;

funcExpr: functionCall
        | arrowFunction
        | functionExpression
        ;

functionCall: Identifier '(' arguments? ')';

arrowFunction: '(' parameters? ')' '=>' (block|expression);

arguments: expression (',' expression)*;

consoleLogExpression: 'console.log' '(' arguments? ')' ';'?;

template:'`' '$' '{' expression '}' '`';

ifStatement : 'if' '(' expression ')' block;

elseStatement : 'else' block;

elseIfStatement : 'else' 'if' '(' expression ')' block;

conditionalStatement : ifStatement elseIfStatement* elseStatement?;

IntegerLiteral: [0-9]+;

StringLiteral: '"' (EscapeSequence | ~["\\])* '"' | '\'' ('\\"' | ~'\'')* '\'';

fragment EscapeSequence: '\\' [nrt"'\\];

Identifier: [a-zA-Z_] [a-zA-Z_0-9]*;
WS: [ \t\r\n]+ -> skip;


