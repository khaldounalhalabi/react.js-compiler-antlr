import {ReactVisitor} from "../antlr/ReactVisitor.ts";
import {Expression} from "../ast/Expressions/Expression.ts";
import {AbstractParseTreeVisitor, ParseTree} from "antlr4ts/tree";
import {
    AdditionContext,
    ArgumentsContext,
    ArrowFuncContext, ArrowFunctionContext, IDContext,
    MultiplicationContext, ParametersContext,
    SubtractionContext
} from "../antlr/ReactParser.ts";
import {Multiplication} from "../ast/Expressions/Multiplication.ts";
import {Addition} from "../ast/Expressions/Addition.ts";
import {Substraction} from "../ast/Expressions/Substraction.ts";
import {Arguments} from "../ast/Arguments.ts";
import {ArrowFunc, ArrowFunction} from "../ast/Expressions/ArrowFunc.ts";
import {Assignment} from "../ast/statements/Assignment.ts";
import {Parameter} from "../ast/Parameters.ts";
import {Id} from "../ast/Expressions/Id.ts";

export class ExpressionVisitor extends AbstractParseTreeVisitor<Expression> implements ReactVisitor<Expression> {

    /**
     * Given that all visit_/ methods are called in a top-down fashion
     */

    // private vars: string[]; // stores all the variables declared in the program so far

    /**
     * 1. duplicate declaration
     * 2. reference to undeclaration
     * NOTE:: note that semantic errors different from syntax error
     */
    // private semanticErrors: string[];

    public visitMultiplication(ctx: MultiplicationContext): Expression {
        const left: Expression = this.visit(ctx.getChild(0));
        const right: Expression = this.visit(ctx.getChild(2));

        return new Multiplication(left, right);
    }

    public visitAddition(ctx: AdditionContext): Expression {
        const left: Expression = this.visit(ctx.getChild(0));
        const right: Expression = this.visit(ctx.getChild(2));

        return new Addition(left, right);
    }

    public visitSubtraction(ctx: SubtractionContext): Expression {
        const left: Expression = this.visit(ctx.getChild(0));
        const right: Expression = this.visit(ctx.getChild(2));

        return new Substraction(left, right);
    }

    visitArguments(ctx: ArgumentsContext): Expression {
        let args: Expression[] = [];
        for (let i = 0; i < ctx.childCount; i++) {
            if (i % 2 === 0) {
                args.push(this.visit(ctx.getChild(i)));
            }
        }

        return new Arguments(args);
    }

    visitArrowFunc(ctx: ArrowFuncContext): Expression {
        const parameters: ParseTree = ctx.getChild(1);
        const block: ParseTree = ctx.getChild(3);

        return new ArrowFunc(parameters, block);
    }

    visitArrowFunction(ctx: ArrowFunctionContext): Expression {
        const parameters: ParseTree = ctx.getChild(1);
        const block: ParseTree = ctx.getChild(3);

        return new ArrowFunction(this.visitParameters(parameters), block);
    }

    visitAssignment(ctx: AssignmentContext): Expression {
        const identifier = ctx.getChild(0);
        const expression = ctx.getChild(2);
        return new Assignment(identifier, expression);
    }

    // visitBlock(ctx: BlockContext): Expression {
    //     return undefined;
    // }

    visitConsoleLogExpression(ctx: ConsoleLogExpressionContext): Expression {
        const arguments = ctx.getChild()
    }

    visitConsoleLogStatement(ctx: ConsoleLogStatementContext): Expression {
        return undefined;
    }

    visitDivision(ctx: DivisionContext): Expression {
        return undefined;
    }

    visitEqual(ctx: EqualContext): Expression {
        return undefined;
    }

    visitExpr(ctx: ExprContext): Expression {
        return undefined;
    }

    visitExpression(ctx: ExpressionContext): Expression {
        return undefined;
    }

    visitExpressionStatement(ctx: ExpressionStatementContext): Expression {
        return undefined;
    }

    visitFuncCall(ctx: FuncCallContext): Expression {
        return undefined;
    }

    visitFuncExpr(ctx: FuncExprContext): Expression {
        return undefined;
    }

    visitFunctionCall(ctx: FunctionCallContext): Expression {
        return undefined;
    }

    visitFunctionDeclaration(ctx: FunctionDeclarationContext): Expression {
        return undefined;
    }

    visitFunctionExpression(ctx: FunctionExpressionContext): Expression {
        return undefined;
    }

    visitID(ctx: IDContext): Expression {
        // const id = ctx.getToken(0);

        return new Id(id);
    }

    visitLessThan(ctx: LessThanContext): Expression {
        return undefined;
    }

    visitLessThanOrEqual(ctx: LessThanOrEqualContext): Expression {
        return undefined;
    }

    visitLitteral(ctx: LitteralContext): Expression {
        return undefined;
    }

    visitMoreThan(ctx: MoreThanContext): Expression {
        return undefined;
    }

    visitMoreThanOrEqual(ctx: MoreThanOrEqualContext): Expression {
        return undefined;
    }

    visitNotEqual(ctx: NotEqualContext): Expression {
        return undefined;
    }

    visitParameters(ctx: ParametersContext): Expression {
        const id: Id[] = [];
        for (let i = 0; i < ctx.childCount; i++) {
            if (i % 2 === 0) {
                id.push(this.visitID(ctx.getChild(i)));
            }
        }
        return new Parameter(id);
    }

    visitProgram(ctx: ProgramContext): Expression {
        return undefined;
    }

    visitStatement(ctx: StatementContext): Expression {
        return undefined;
    }

    visitVariableDeclaration(ctx: VariableDeclarationContext): Expression {
        return undefined;
    }

    visitVariableType(ctx: VariableTypeContext): Expression {
        return undefined;
    }

    protected defaultResult(): Expression {
        return new Expression();
    }
}