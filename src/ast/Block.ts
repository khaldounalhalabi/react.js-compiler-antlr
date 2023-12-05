import {Statement} from "./Statement.ts";

export class BlockNode extends Statement{
    statements: Statement[];

    constructor(statements: Statement[]) {
        super();
        this.statements = statements;
    }

    public toString(): string {
        const statementStrings = this.statements.map(statement => statement.toString()).join('\n');
        return `{\n${statementStrings}\n}`;
    }
}

export default BlockNode;
