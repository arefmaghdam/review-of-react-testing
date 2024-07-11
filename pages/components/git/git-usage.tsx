import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const GitUsage = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // where does git help us and what is git use? When we work on a single project in a team work and we want to sync the project codes 
    // and move forward and not be involved in applying the code of other developers to our own code. 
    // If your laptop is destroyed, your project will not be destroyed because it is in GitHub and you can upload it again on another system and do your work.
    // Sometimes you move the project forward and then you see a bug. Now if you use Git, you can move between the commits and see which phase of the work the bug is related to.
        `}
      />
    </div>
  );
};

export default GitUsage;
