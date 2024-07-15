import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const GitHubPushPull = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Now we apply changes inside the repository on our system and stage and commit, and make sure that these changes are only applied to our system 
    // and have not yet gone to the GitHub repository, and now we want to send these changes to the GitHub repository, so We use the following command:
        git push origin main
    // The opposite of this issue is that one of the developers of the team worked on the project and posted it on GitHub, now those changes are only on that developer's system 
    // and on GitHub and are not applied to our own system, to get the latest changes applied on GitHub uses the following command:
        git pull origin main
    // Now, if we have created a branch called dev in our system and we want to push, we use the following command:
        git push origin dev
    // Now we want to make a pull request, what is a pull request? That is, we want to give a request to the owner of this project to merge the changes of our dev branch to the main branch if he chooses,
    // and if he clicks accept, this will be done. So, we click on new pull request and select the branches so that we want the dev branch to be merged with main, which is marked with an arrow that shows the code changes at the bottom of the page.
    // Now click on create pull request and write the title and description of the pull request and select reviewers from the right side and click on create pull request and the work is done.
    // Now, on the main page of the repository, on the top tab, in the pull requests section, you can see this work,
    // and if we click on the title related to the pull request and open it, and then click on the merge pull request button and then confirm merge, the changes in our dev branch On the main branch, the main project is merged on GitHub,
    // which of course must be done by the project owner. Be careful that now the dev changes have been applied to main, but this merge pull request has been done only on GitHub and these changes have not been applied to our system.
    // In our system, we only have Dev and main branches, each of which has its own contents, but they are not merged.
    // Now, in order to sync with the Pithub server and have the latest changes, we use the following command in the project terminal in our system:
        git pull origin main
    // With this command, the latest changes of Github's main branch are synced on the main branch of our system.
        `}
      />
    </div>
  );
};

export default GitHubPushPull;
