import {Expression} from "./Expression.ts";

export class Addition extends Expression {
    public left: Expression;

    public right: Expression;


    constructor(left: Expression, right: Expression) {
        super();
        this.left = left;
        this.right = right;
    }

    public toString() {
        return this.left.toString() + '+' + this.right.toString();
    }
}