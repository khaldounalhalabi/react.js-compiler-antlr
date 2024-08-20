export class SymbolTable {
  public records: {
    id: string;
    line: number;
    column: number;
    isFunction: boolean;
    idType?: string;
  }[] = [];

  constructor() {
    this.records = [];
  }

  public static instance?: SymbolTable = undefined;

  public static make() {
    if (!SymbolTable.instance) {
      SymbolTable.instance = new SymbolTable();
    }
    return SymbolTable.instance;
  }

  public add(
    id: string,
    line: number,
    column: number,
    isFunction: boolean,
    idType?: string,
  ) {
    if (this.has(id)) {
      const temp = this.get(id);
      throw new Error(
        `${id} is already defined in line : ${temp?.line} and column : ${temp?.column}`,
      );
    } else {
      this.records.push({
        id: id,
        line: line,
        column: column,
        isFunction: isFunction,
        idType: idType,
      });
    }
  }

  public has(id: string) {
    return this.records.filter((record) => record.id == id)?.length > 0;
  }

  public get(id: string) {
    return this.records.filter((record) => record.id == id)?.[0] ?? undefined;
  }
}
