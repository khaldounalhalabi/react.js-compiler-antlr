export class SymbolTableEntry {
  constructor(
    public id: string,
    public line: number,
    public column: number,
    public isFunction: boolean = false,
    public localSymbolTable?: SymbolTable,
    public body?: string,
    public idType?: string,
    public result?: any, // Store the result of function evaluation
  ) {}
}

export class SymbolTable {
  public entries: Map<string, SymbolTableEntry> = new Map<
    string,
    SymbolTableEntry
  >();

  // Add an entry to the symbol table
  public addEntry(
    id: string,
    line: number,
    column: number,
    isFunction: boolean = false,
    body?: string,
    localSymbolTable?: SymbolTable,
    idType?: string,
    result?: any,
  ): void {
    // Check if the entry already exists in the symbol table
    if (this.entries.has(id)) {
      console.error(`Error: Identifier '${id}' already declared.`);
    } else {
      // Add the entry to the symbol table
      const entry = new SymbolTableEntry(
        id,
        line,
        column,
        isFunction,
        localSymbolTable,
        body,
        idType,
        result,
      );
      this.entries.set(id, entry);
    }
  }

  // Execute a function stored as a string in the symbol table
  // public executeFunction(id: string, args: any[] = []): any {
  //   const entry = this.getEntry(id);
  //
  //   if (entry && entry.isFunction && entry.body) {
  //     if (entry.result !== undefined) {
  //       // If the result is already available, return it
  //       return entry.result;
  //     }
  //
  //     try {
  //       // Create a new Function object from the stored body
  //       const func = new Function(
  //         ...(entry.signature?.parameters || []),
  //         entry.body,
  //       );
  //
  //       // Call the function with the provided arguments
  //       const result = func(...args);
  //
  //       // Store the result in the symbol table entry
  //       entry.result = result;
  //
  //       return result;
  //     } catch (error) {
  //       console.error(`Error executing function '${id}':`, error);
  //     }
  //   } else {
  //     console.error(`Error: Function '${id}' not found or invalid.`);
  //   }
  // }

  // Check if an entry exists in the symbol table
  hasEntry(id: string): boolean {
    return this.entries.has(id);
  }

  // Get information about an entry from the symbol table
  getEntry(id: string): SymbolTableEntry | undefined {
    return this.entries.get(id);
  }

  setEntry(id:string , entry:SymbolTableEntry){
    this.entries.set(id , entry);
  }
}
