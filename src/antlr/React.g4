grammar React;

program: statement+;

statement: variableDeclaration
         | functionDeclaration
         | expressionStatement
         | consoleLogStatement
         | assignment
         ;

variableDeclaration: variableType Identifier '=' expression ';'?;

variableType: 'let' | 'var' | 'const';

functionDeclaration: 'function' Identifier '(' parameters? ')' block;

assignment: Identifier '=' expression ';'?;

functionExpression: 'function' '(' parameters? ')' block;

parameters: Identifier (',' Identifier)*;

block: '{' statement* '}';

expressionStatement: expression ';'?;

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
          | '(' expression ')'                                  #Expr
          | functionCall                                        #FuncCall
          | arrowFunction                                       #ArrowFunc
          | functionExpression                                  #FuncExpr
          | Identifier                                          #ID
          | Literal                                             #Litteral
          ;

functionCall: Identifier '(' arguments? ')';

arrowFunction: '(' parameters? ')' '=>' block;

arguments: expression (',' expression)*;

consoleLogExpression: 'console.log' '(' arguments? ')' ';'?;

consoleLogStatement: consoleLogExpression;

Literal: IntegerLiteral | StringLiteral;

IntegerLiteral: [0-9]+;

StringLiteral: '"' (EscapeSequence | ~["\\])* '"';
fragment EscapeSequence: '\\' [nrt"'\\];

Identifier: [a-zA-Z_] [a-zA-Z_0-9]*;

WS: [ \t\r\n]+ -> skip;
