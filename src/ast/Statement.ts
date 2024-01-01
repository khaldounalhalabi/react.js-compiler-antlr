import {Program} from "./Program.ts";

export abstract class Statement extends Program{
  public abstract toString(): string;

  public abstract astNode(): string;
}
