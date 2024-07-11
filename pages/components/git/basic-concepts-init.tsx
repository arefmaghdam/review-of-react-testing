import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const BasicConceptsInit = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // suppose you have a project and you want to add git to the project, first we open vsc and open a folder for the project and create the project
    // and then open the terminal and enter the following command in the project path do:
        git init
    // By typing the above command, a folder called .git will be added to our project and it shows that Git has been added to our project.
    // Of course, the .git folder is hidden and may not be visible.
        `}
      />
    </div>
  );
};

export default BasicConceptsInit;
