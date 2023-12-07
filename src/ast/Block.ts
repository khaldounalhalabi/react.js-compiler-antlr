import {Statement} from "./Statement.ts";

export class Block{
    statements: Statement[];

    constructor(statements: Statement[]) {
        this.statements = statements;
    }

    public toString(): string {
        const statementStrings = this.statements.map(statement => statement.toString()).join('\n');
        return `{\n${statementStrings}\n}`;
    }
}