grammar React;

program: statement+;

statement: variableDeclaration
         | functionsDeclarations
         | expression (';')?
         | consoleLogExpression
         | assignment
         ;

functionsDeclarations : regularFunctionDeclaration
                      | arrowFunction
                      | anonymousFunction
                      ;

valuable : expression
         | arrowFunction
         | anonymousFunction
         ;

parameters: Identifier (',' Identifier)*;

block: '{' statement* '}';

regularFunctionDeclaration: 'function' Identifier '(' parameters? ')' block;

anonymousFunction: 'function' '(' parameters? ')' block;

arrowFunction: '(' parameters? ')' '=>' block;

functionCall: Identifier '(' arguments? ')';

arguments: expression (',' expression)*;

variableDeclaration: variableType Identifier '=' valuable ';'?;

variableType: 'let' | 'var' | 'const';

expression: '(' expression ')'                                  #ExpressionInBrackets
          | expression '*' expression                           #Multiplication
          | expression '/' expression                           #Division
          | expression '+' expression                           #Addition
          | expression '-' expression                           #Subtraction
          | expression '>' expression                           #MoreThan
          | expression '>=' expression                          #MoreThanOrEqual
          | expression '<=' expression                          #LessThanOrEqual
          | expression '<' expression                           #LessThan
          | expression '==' expression                          #Equal
          | expression '!=' expression                          #NotEqual
          | functionCall                                        #FuncCall
          | Identifier                                          #ID
          | Literal                                             #Litteral
          ;

assignment: Identifier '=' valuable ';'?;


consoleLogExpression: 'console.log' '(' arguments? ')' ';'?;

Literal: IntegerLiteral | StringLiteral;

IntegerLiteral: [0-9]+;

StringLiteral: '"' (EscapeSequence | ~["\\])* '"';
fragment EscapeSequence: '\\' [nrt"'\\];

Identifier: [a-zA-Z_] [a-zA-Z_0-9]*;

WS: [ \t\r\n]+ -> skip;
