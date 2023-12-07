import {Identifier} from "./Expressions/Identifier.ts";

export class Parameter {
    identifier: Identifier;

    constructor(identifier: Identifier) {
        this.identifier = identifier;
    }

    toString(): string {
        return this.identifier.toString();
    }
}
