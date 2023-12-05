import {Id} from "./Expressions/Id.ts";

export class Parameter {
    identifier: Id;

    constructor(identifier: Id) {
        this.identifier = identifier;
    }

    toString(): string {
        return this.identifier.toString();
    }
}
