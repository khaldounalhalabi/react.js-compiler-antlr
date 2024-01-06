grammar Jsx;

import React;
@parser::members {
  private assert(b: boolean, msg: string): void {
    if (!b) {
      throw new Error(msg);
    }
  }
}
useState: 'const' '[' Identifier ',' Identifier ']' '=' 'useState' '(' expression? ')' ';'? ;

useEffect: 'useEffect' '(' (arrowFunction|functionExpression) (',')? ('['parameters']')? ')' ';'?;

useRef: 'const' Identifier '=' 'useRef' '(' expression? ')' ';'?;

jsxElement:jsxElementFull|selfClosingJsxElement | jsxComponentFull | selfClosingComponent;

jsxElementFull: '<' jsxTagName jsxAttribute* '>' jsxElementContent* '</' jsxTagName '>';

selfClosingJsxElement:'<' jsxTagName jsxAttribute* '/>';

jsxTagName: 'main' | 'div' | 'img' | 'h1' | 'p' | 'a';

jsxAttribute: jsxAttributeName '=' jsxAttributeValue;

jsxAttributeName: 'src' | 'onClick' | 'ref' | 'width' | 'height' | 'className';

jsxAttributeValue: StringLiteral | '{'expression?'}';

jsxElementContent:jsxElement | '{' expression '}';

jsxComponentFull : '<' Identifier jsxAttribute* componentProps* '>' jsxElementContent* '</' Identifier '>';

selfClosingComponent : '<' Identifier jsxAttribute* componentProps* '/>';

componentProps : Identifier '=' StringLiteral
               | Identifier '=' '{'expression?'}'
               ;
