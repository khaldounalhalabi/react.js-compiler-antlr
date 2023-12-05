// /src/ast/VariableTypeNode.ts
export class VariableType {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    public toString(): string {
        return this.type;
    }
}