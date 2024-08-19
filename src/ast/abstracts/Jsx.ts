import { Expression } from "./Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export abstract class Jsx extends Expression {
  public abstract toString(): string;

  public abstract treeObject(): TreeNode;

  public abstract resolve(): string;
}
