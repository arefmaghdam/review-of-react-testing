import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const GitHubAccountMaking = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Now we want to learn how to work with GitHub. So we go to the GitHub site and create an account.
    // After registering and logging in, click on the create repository button and create a new repository.
    // Now we want to connect to this repository from our own system, that is, we want to put the existing repository in our system on GitHub 
    // and merge it with the GitHub repository. First, we enter the following command in the terminal of our project:
        git remote add origin "github repository https address"
    // Then we change the name of the project branch from master to main with the following command:
        git branch -M main
    // Now, with the following command, we connect the repository on the system to the repository on GitHub:
        git push -u origin main
        `}
      />
    </div>
  );
};

export default GitHubAccountMaking;
