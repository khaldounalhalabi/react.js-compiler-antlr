import React from "react";
import Tree from "react-d3-tree";
import { TreeNode } from "../Types/TreeNode.ts";
import './styles.css'

const PrintAst = ({ data }: { data: TreeNode }) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Tree
        data={data}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        orientation="vertical"
      />
    </div>
  );
};

export default PrintAst;
