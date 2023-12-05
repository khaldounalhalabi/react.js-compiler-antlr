export class FunctionDeclarationNode {
    constructor(identifier, parameters, block) {
        this.identifier = identifier;
        this.parameters = parameters;
        this.block = block;
    }
}