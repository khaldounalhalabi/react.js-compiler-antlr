grammar Jsx;

import React;
@parser::members {
  private assert(b: boolean, msg: string): void {
    if (!b) {
      throw new Error(msg);
    }
  }
}
useState: 'const' '[' Identifier ',' Identifier ']' '=' 'useState' '(' expression ')' ';'? ;

useEffect: 'useEffect' '(' (arrowFunction|functionExpression) (',')? ('['parameters']')? ')' ';'?;

useRef: 'const' Identifier '=' 'useRef' '(' expression? ')' ';'?;

jsxElement:jsxElementFull|selfClosingJsxElement;

jsxElementFull: '<' jsxTagName jsxAttribute* '>' jsxElementContent* '</' jsxTagName { this.assert(getText() === jsxTagName.text, `Mismatched opening and closing tags: ${jsxTagName.text}`); } '>';

selfClosingJsxElement:'<' jsxTagName jsxAttribute* '/>';

jsxTagName: 'main' | 'div' | 'img' | 'h1' | 'p' | 'a';

jsxAttribute: jsxAttributeName '=' jsxAttributeValue;

jsxAttributeName: 'src' | 'onClick' | 'ref' | 'width' | 'height' | 'className';

jsxAttributeValue: StringLiteral | '{'expression?'}';

jsxElementContent:jsxElement | '{' expression '}';

