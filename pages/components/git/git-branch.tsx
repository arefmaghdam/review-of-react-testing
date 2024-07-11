import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const GitBranch = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // branch means that we can separate one or more branches from our git tree and apply different changes on each of those branches.
    // To make brunch, we use the following command:
        git branch "branch name"
    // Note that the branch is separated from where you are or the commit you are. To see the list of branches, use the following command:
        git branch
    // To go to a specific brunch, we use the following command:
        git checkout "branch name"
    // Please note that any change happens in its own branch and cannot be seen in other branches. So that is why we say that the git structure is a non-linear structure.
        `}
      />
    </div>
  );
};

export default GitBranch;
