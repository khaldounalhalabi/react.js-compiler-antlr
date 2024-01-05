import React from "react";
import Tree from "react-d3-tree";
import { TreeNode } from "../Types/TreeNode.ts";

const PrintAst = ({ data }: { data: TreeNode }) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Tree data={data} orientation="vertical" />
    </div>
  );
};

export default PrintAst;
