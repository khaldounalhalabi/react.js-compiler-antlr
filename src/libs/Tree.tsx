import React from "react";
import Tree from "react-d3-tree";
import { TreeNode } from "../Types/TreeNode.ts";
import "./styles.css";

const PrintAst = ({ data }: { data: TreeNode }) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Tree
        data={data}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        nodeSize={{ x: 250, y: 250 }}
        orientation="vertical"
      />
    </div>
  );
};

export default PrintAst;

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className={"flex items-center justify-center"}>
      <h1 className={"text-3xl"}>"Counter" ${counter}</h1>
      <div
        className={"btn btn-warning"}
        onClick={() => {
          return setCounter((prev) => {
            return prev + 1;
          });
        }}
      >
        "Click to increment"
      </div>
    </div>
  );
}
