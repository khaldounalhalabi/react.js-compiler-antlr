class FunctionSignature {
  constructor(
    public parameters: string[],
    public returnType: string,
  ) {}
}

class SymbolTableEntry {
  constructor(
    public id: string,
    public idType: string,
    public size: number,
    public dimension: number,
    public line: number,
    public column: number,
    public isFunction: boolean = false,
    public signature?: FunctionSignature,
    public body?: string,
    public localSymbolTable?: SymbolTable,
    public result?: any, // Store the result of function evaluation
  ) {}
}

export class SymbolTable {
  private entries: Map<string, SymbolTableEntry> = new Map<
    string,
    SymbolTableEntry
  >();

  // Add an entry to the symbol table
  public addEntry(
    id: string,
    idType: string,
    size: number,
    dimension: number,
    line: number,
    column: number,
    isFunction: boolean = false,
    signature?: FunctionSignature,
    body?: string,
    localSymbolTable?: SymbolTable,
    result?: any,
  ): void {
    // Check if the entry already exists in the symbol table
    if (this.entries.has(id)) {
      console.error(`Error: Identifier '${id}' already declared.`);
    } else {
      // Add the entry to the symbol table
      const entry = new SymbolTableEntry(
        id,
        idType,
        size,
        dimension,
        line,
        column,
        isFunction,
        signature,
        body,
        localSymbolTable,
        result,
      );
      this.entries.set(id, entry);
      console.log(`Entry added to symbol table: ${entry.id}`);
    }
  }

  // Execute a function stored as a string in the symbol table
  public executeFunction(id: string, args: any[] = []): any {
    const entry = this.getEntry(id);

    if (entry && entry.isFunction && entry.body) {
      if (entry.result !== undefined) {
        // If the result is already available, return it
        return entry.result;
      }

      try {
        // Create a new Function object from the stored body
        const func = new Function(
          ...(entry.signature?.parameters || []),
          entry.body,
        );

        // Call the function with the provided arguments
        const result = func(...args);

        // Store the result in the symbol table entry
        entry.result = result;

        return result;
      } catch (error) {
        console.error(`Error executing function '${id}':`, error);
      }
    } else {
      console.error(`Error: Function '${id}' not found or invalid.`);
    }
  }

  // Check if an entry exists in the symbol table
  hasEntry(id: string): boolean {
    return this.entries.has(id);
  }

  // Get information about an entry from the symbol table
  getEntry(id: string): SymbolTableEntry | undefined {
    return this.entries.get(id);
  }

  // Display the contents of the symbol table
  display(): void {
    console.log("Symbol Table:");
    for (const [id, entry] of this.entries) {
      console.log(
        `- ID: ${id}, Type: ${entry.idType}, Size: ${entry.size}, Dimension: ${
          entry.dimension
        }, Line: ${entry.line}, Column: ${entry.column}, Function: ${
          entry.isFunction
        }, Signature: ${JSON.stringify(entry.signature)}, Body: ${
          entry.body
        }, Local Symbol Table: ${JSON.stringify(
          entry.localSymbolTable,
        )}, Result: ${entry.result}`,
      );
    }
  }
}
