import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const BasicConceptsCommit = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // The next command is git commit:
        git commit -m "message"
    // -m means message and indicates the commit message and it is mandatory, we write the message because we or other developers can move between versions and develop the project more easily.
    // Whenever you want to see the status of your git, use the following command:
        git status
    // Now we want to see what happened and where these commits went. Then we use the following command:
        git log
    // By running the above command, it brings the list of all the commits that have been made so far with their unique id, even the author of the commit and its creation date are also shown.
    // Remember that to exit the report mode, we must use the :q key.
    // Now we want to go back to those commits using the id of the commits or switch or we want to go back to a specific version of our program, for this we must first get the git log
    // and copy the id of that commit and we can use the following command Let's go back to that particular commit or version of our program:
        git checkout "commit hash or id"
    // Now, if we want to go back to the latest project changes, we write:
        git checkout master
    // Now a question arises, where is this repository and how was it made? All these changes and the repository are created inside the .git folder
        `}
      />
    </div>
  );
};

export default BasicConceptsCommit;
