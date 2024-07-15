import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const GitFlow = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Now, we follow these git and github rules, but the rest of the teammates must follow them as well.
    // To do this, we define a flow among ourselves that every developer must follow, which is called git flow.
    // For this, we define a main branch and extract a dev branch from it, and put whatever code we write on the dev branch,
    // or we extract a feature branch from the dev branch and put our code in that feature branch.
    // And then we make a commit and make a mess. In general, there should be only merge related commits on the main branch.
    // The reason for this is that if we have a bug, the main branch does not face problems and this bug is for the dev branch,
    // in such cases we pull out a fix branch from the dev branch and do the debugging and merge it, and if the dev branch It was without any problem,
    // we will merge on the main branch.
    // Sometimes it happens that we gave the product to the customer and a bug was found in it, and the dev branch is much ahead,
    // and it is not logical to wait until the features of the dev branch are finished and then move to the main branch and then move on.
    // Let's pull a fix branch from the Dev branch and do the debugging and merge. This solution takes too long.
    // In these cases, we use a concept called hot fix, in such a way that we directly extract a hot fix branch from the main branch, debug on it,
    // and then merge it with the main branch.
        `}
      />
    </div>
  );
};

export default GitFlow;
