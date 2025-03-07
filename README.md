# React.js Compiler using ANTLR

This project is a React.js compiler built using **TypeScript** and **ANTLR** as part of my **college project**. It parses and analyzes React-like JavaScript code, generates an **Abstract Syntax Tree (AST)**, and supports JSX, hooks (`useState`, `useEffect`, `useRef`), function declarations, and other JavaScript constructs.

## Features
- Parses and validates React.js code.
- Supports JSX syntax.
- Handles JavaScript constructs like variables, functions, conditionals, and expressions.
- Supports React hooks (`useState`, `useEffect`, `useRef`).
- Generates and visualizes the **Abstract Syntax Tree (AST)**.
- Runs in the browser with `npm run dev`.

## Getting Started
### Prerequisites
Ensure you have **Node.js** and **npm** installed on your machine.

### Installation
```sh
# Clone the repository
git clone https://github.com/your-username/react-antlr-compiler.git

# Navigate to the project folder
cd react-antlr-compiler

# Install dependencies
npm install
```

### Running the Project
```sh
npm run dev
```
This will start a development server and open the project in your browser.

### Testing Code Input
To modify the test input code that the compiler processes, change the content of `test.txt`:

```ts
// File: main.ts
await fetch("./src/test.txt")
  .then((res) => res.text())
  .then((data) => {
    inputStream = data;
  })
  .catch((err) => console.log(err));
```

Modify `test.txt` with your desired React.js code for parsing and AST generation.
Or you can change the input directory to the file you want .

## Syntax Supported
### Variable Declaration
```js
let x = 5;
const message = "Hello";
```

### Function Declaration
```js
function greet(name) {
  return "Hello " + name;
}
```

### JSX Support
```jsx
const element = <div className="container">Hello</div>;
```

### React Hooks
```js
const [count, setCount] = useState(0);
const ref = useRef(null);
useEffect(() => {
  console.log("Effect triggered");
}, [count]);
```

### Conditional Statements
```js
if (x > 10) {
  console.log("Greater than 10");
} else {
  console.log("Less or equal to 10");
}
```

## AST Visualization
The project also generates the **Abstract Syntax Tree (AST)** from the parsed code. The tree can be visualized using:
