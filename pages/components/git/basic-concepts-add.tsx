import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const BasicConceptsAdd = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Now an empty folder of git has been created and we have made some changes in our project and we want to fill the git folder by creating a new version of the project.
    // To do this, we use the following command in the terminal:
        git add.
    Of course, we have to write the names of the files instead of the dot, but when we use the dot, it means all the changes in the project path
    Now the applied changes are staged and if we want to see these changes, we use the following command:
        git status
        `}
      />
    </div>
  );
};

export default BasicConceptsAdd;
