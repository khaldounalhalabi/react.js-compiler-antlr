grammar Jsx;

import React;

useState: 'const' '[' Identifier ',' Identifier ']' '=' 'useState' '(' expression ')' ';'? ;

useEffect: 'useEffect' '(' (arrowFunction|functionExpression) (',')? ('['parameters']')? ')' ';'?;

useRef: 'const' Identifier '=' 'useRef' '(' expression? ')' ';'?;

jsxElement:jsxElementFull|selfClosingJsxElement;

jsxElementFull: '<' jsxTagName jsxAttribute* '>' jsxElementContent* ('</' {assert getText().equals(jsxTagName)} jsxTagName '>');

selfClosingJsxElement:'<' jsxTagName jsxAttribute* '/>';

jsxTagName: 'main' | 'div' | 'img' | 'h1' | 'p' | 'a';

jsxAttribute: jsxAttributeName '=' jsxAttributeValue;

jsxAttributeName: 'src' | 'onClick' | 'ref' | 'width' | 'height' | 'className';

jsxAttributeValue: StringLiteral | '{'expression?'}';

jsxElementContent:jsxElement | '{' expression '}' | StringLiteral;

