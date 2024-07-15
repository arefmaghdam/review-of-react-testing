import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const CommitTimes = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // We commit when a functionality is added to the app and that code must work and is not incomplete.
    // As a general and informal rule, try not to change more than 20 to 30 lines per commit and not to change more than 4 to 5 files in one commit.
    // Now how to write the message of commits? We should write in such a way that later we or the other developers can understand from the commits how the project is moving forward
    // and do not face problems in the discussion of maintenance and debugging.
    // A general rule that we can follow for this is:
    // 1 If we add something to the project, use add at the beginning of the commit
    // 2 If we delete something from the project, use delete at the beginning of the commit
    // 3 If we solve or debug a problem, use fix in the first commit
    // 4 If we make a change in the project, use modify in the first commit
    // And to use these words with the simple present tense and at the beginning of the commit
    // The same rules apply to brunches. Some developers mistakenly put their name on the branch, which gets confusing after a while.
    //  The name of the branches is chosen based on the feature we have and how we work.
    // The branch master should often be one of the commits related to the merge pull request of dev branches or feature branches.
        `}
      />
    </div>
  );
};

export default CommitTimes;
