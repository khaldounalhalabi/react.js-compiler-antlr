import { Statement } from "./Statement.ts";

export abstract class Expression extends Statement {
  public abstract resolve(): string;
}
