import ReactParser from "./antlr/ReactParser.ts";
import ReactLexer from "./antlr/ReactLexer.ts";
// @ts-ignore
import { CharStream, CommonTokenStream } from "antlr4";
import { ProgramVisitor } from "./visitors/ProgramVisitor.ts";
import PrintAst from "./libs/Tree.tsx";
import { createRoot } from "react-dom/client";
import { SymbolTable } from "./libs/SymbolTable.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = ``;
let inputStream: string = "";

await fetch("./src/test.txt")
  .then((res) => res.text())
  .then((data) => {
    inputStream = data;
  })
  .catch((err) => console.log(err));

const chars = new CharStream(inputStream);
let lexer = new ReactLexer(chars);
const tokens = new CommonTokenStream(lexer);
let parser = new ReactParser(tokens);
let tree = parser.program();

const programVisitor = new ProgramVisitor();
let treeObject = programVisitor.visitProgram(tree).treeObject();

function populateTable(table: SymbolTable) {
  const tableBody = document.querySelector("#symbolTable tbody");

  // Clear existing rows
  tableBody.innerHTML = "";

  // Function to recursively populate nested tables
  function populateNestedTable(container, nestedSymbolTable) {
    const nestedTable = document.createElement("table");
    nestedTable.className = "nested-table";

    // Iterate through nested symbol table entries
    nestedSymbolTable.entries.forEach((entry) => {
      const row = nestedTable.insertRow();
      row.insertCell().textContent = entry.id;
      row.insertCell().textContent = entry.line.toString();
      row.insertCell().textContent = entry.column.toString();
      row.insertCell().textContent = entry.isFunction.toString();
      row.insertCell().textContent = entry.body || "";
      row.insertCell().textContent = entry.idType || "";
      row.insertCell().textContent = entry.result || "";
      row.insertCell().textContent = ""; // No scope for nested entries
    });

    // Append the nested table to the container
    container.appendChild(nestedTable);
  }

  // Iterate through symbol table entries
  table.entries.forEach((entry) => {
    const row = tableBody.insertRow();
    row.insertCell().textContent = entry.id;
    row.insertCell().textContent = entry.line.toString();
    row.insertCell().textContent = entry.column.toString();
    row.insertCell().textContent = entry.isFunction.toString();
    row.insertCell().textContent = entry.body || "";
    row.insertCell().textContent = entry.idType || "";
    row.insertCell().textContent = entry.result || "";

    // If entry has a nested symbol table, populate a nested table
    if (entry.localSymbolTable) {
      const scopeCell = row.insertCell();
      populateNestedTable(scopeCell, entry.localSymbolTable);
    } else {
      row.insertCell().textContent = ""; // No scope for non-nested entries
    }
  });
}

if (programVisitor.semanticErrors.length > 0) {
  programVisitor.semanticErrors.forEach((error) => {
    console.error(error);
  });
} else {
  let toggle = false;
  if (toggle){
    document.getElementById("app").style.display = 'none';
    document.querySelector("#symbolTable-container").style.display = 'block';
  } else {
    document.getElementById("app").style.display = 'block';
    document.querySelector("#symbolTable-container").style.display = 'none';
  }
  document.getElementById("toggle")?.addEventListener("click", (e) => {
    e.preventDefault();
    toggle = !toggle;
    if (toggle){
      document.getElementById("app").style.display = 'none';
      document.querySelector("#symbolTable-container").style.display = 'block';
    } else {
      document.getElementById("app").style.display = 'block';
      document.querySelector("#symbolTable-container").style.display = 'none';
    }
  });

  const content = document.getElementById("app");
  // @ts-ignore
  const root = createRoot(content);
  root.render(PrintAst({ data: treeObject }));
  populateTable(programVisitor.symbolTable);
}

// Initial population
