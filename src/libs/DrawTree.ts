import {createRoot} from "react-dom/client";
import PrintAst from "./Tree.tsx";
import {TreeNode} from "../Types/TreeNode.ts";

const content = document.getElementById("app");
// @ts-ignore
const root = createRoot(content);

export function drawTree(treeObject: TreeNode) {
    root.render(PrintAst({data: treeObject}));
}