import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const ReactTestingProvider = () => {
  return (
    <div className={styles.flexContainer}>
      <div>
        <h3>Git and GitHub</h3>
        <Link href="/components/git/history">history</Link>
        <Link href="/components/git/git-usage">git-usage</Link>
        <Link href="/components/git/git-installation">git-installation</Link>
      </div>
      <div>
        <h3>Redux and Redux Toolkit</h3>
        <Link href="/components/redux/introduction">introduction</Link>
      </div>
      <div>
        <h3>React Testing Library</h3>
        <Link href="/components/react-testing/introduction">introduction</Link>
        <Link href="/components/react-testing/setting-up">setting-up</Link>
        <Link href="/components/react-testing/testing-rendering">
          testing-rendering
        </Link>
        <Link href="/components/react-testing/testing-user-account">
          testing-user-account
        </Link>
        <Link href="/components/react-testing/testing-lists">
          testing-lists
        </Link>
        <Link href="/components/react-testing/testing-user-intractions">
          testing-user-intractions
        </Link>
      </div>
      <div>
        <h3>Enzyme</h3>
        <Link href="/components/testing/setting-up">setting-up</Link>
        <Link href="/components/testing/first-app-and-test">
          first-app-and-test
        </Link>
        <Link href="/components/testing/tests-contents-of-first-app">
          tests-contents-of-first-app
        </Link>
        <Link href="/components/testing/test-codes-optimization">
          test-codes-optimization
        </Link>
        <Link href="/components/testing/how-to-test-react-state">
          how-to-test-react-state
        </Link>
        <Link href="/components/testing/clicking-button-test">
          clicking-button-test
        </Link>
        <Link href="/components/testing/word-guessing-game-project">
          word-guessing-game-project
        </Link>
        <Link href="/components/testing/writing-test-for-props">
          writing-test-for-props
        </Link>
        <Link href="/components/testing/tests-optimization">
          tests-optimization
        </Link>
        <Link href="/components/testing/results-component">
          results-component
        </Link>
        <Link href="/components/testing/app-development-optimization">
          app-development-optimization
        </Link>
        <Link href="/components/testing/helper-function">helper-function</Link>
        <Link href="/components/testing/add-redux-to-app">
          add-redux-to-app
        </Link>
        <Link href="/components/testing/develope-actions">
          develope-actions
        </Link>
        <Link href="/components/testing/reducers-tests">reducers-tests</Link>
        <Link href="/components/testing/input-component-development">
          input-component-development
        </Link>
        <Link href="/components/testing/guessedword-state-development">
          guessedword-state-development
        </Link>
        <Link href="/components/testing/add-axios-ao-app">
          add-axios-ao-app
        </Link>
        <Link href="/components/testing/redux-testing">redux-testing</Link>
      </div>
    </div>
  );
};

export default ReactTestingProvider;
