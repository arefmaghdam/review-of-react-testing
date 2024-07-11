import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const GitMerge = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // We can merge two branches together and put the content of one of them on the other, this is called merging. Suppose we have a master branch and a temp branch and we want to transfer the contents of the temp branch to the master branch,
    // for this we first go to the master branch and then use the following command:
        git checkout master
        git merge temp
    // Now it gives a message that merging is considered a kind of commit and you have to type a message for this commit،
    // which we press :q and choose its own default message.
    // Now, there are times when we run into merge conflict, that is, we run into interference in merging, that is, if we change the exact same thing in both branches with different content, we get an error during merging,
    // and it asks us which change to apply. If we press the "accept current changes" option, the master changes will be applied, and if we press the "accept incoming changes" option, the branch temp changes will be applied. 
    // Now, if we get git status, we can see that we had some changes that we did not stage and commit, because giving priority to choosing the change itself is a kind of change that must be committed, guess we will make a commit for these changes once again. 
    // Now, if we want to delete the temp branch completely, we use the following command:
       git branch -d temp
    //But there is no need to clear the branch
        `}
      />
    </div>
  );
};

export default GitMerge;
