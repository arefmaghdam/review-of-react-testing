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
        <Link href="/components/git/basic-concepts-init">
          basic-concepts-init
        </Link>
        <Link href="/components/git/basic-concepts-add">
          basic-concepts-add
        </Link>
        <Link href="/components/git/basic-concepts-commit">
          basic-concepts-commit
        </Link>
        <Link href="/components/git/git-branch">git-branch</Link>
        <Link href="/components/git/git-merge">git-merge</Link>
        <Link href="/components/git/github-gitlab">github-gitlab</Link>
        <Link href="/components/git/github-account-making">
          github-account-making
        </Link>
        <Link href="/components/git/github-push-pull">github-push-pull</Link>
        <Link href="/components/git/commit-times">commit-times</Link>
        <Link href="/components/git/git-flow">git-flow</Link>
      </div>
      <div>
        <h3>Redux Toolkit</h3>
        <Link href="/components/redux/introduction">introduction</Link>
        <Link href="/components/redux/what-does-redux-solve">
          what-does-redux-solve
        </Link>
        <Link href="/components/redux/redux-data-flow">redux-data-flow</Link>
        <Link href="/components/redux/app-setup">app-setup</Link>
        <Link href="/components/redux/redux-toolkit-slices-and-store">
          redux-toolkit-slices-and-store
        </Link>
        <Link href="/components/redux/updating-and-viewing-state">
          updating-and-viewing-state
        </Link>
        <Link href="/components/redux/adding-customer-slice">
          adding-customer-slice
        </Link>
        <Link href="/components/redux/redux-toolkit-fetching">
          redux-toolkit-fetching
        </Link>
        <Link href="/components/redux/redux-toolkit-query">RTK Query</Link>
        <Link href="/components/redux/react-query">react-query</Link>
        <Link href="/components/redux/react-context-api">
          react-context-api
        </Link>
        <Link href="/components/redux/redux-todolist">redux-todolist</Link>
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
        <Link href="/components/react-testing/simulating-user-events">
          simulating-user-events
        </Link>
        <Link href="/components/react-testing/async-testing">
          async-testing
        </Link>
        <Link href="/components/react-testing/mocking-apis">mocking-apis</Link>
        <Link href="/components/react-testing/complex-component-testing">
          complex-component-testing
        </Link>
        <Link href="/components/react-testing/mocking-apis-testing">
          mocking-apis-testing
        </Link>
        <Link href="/components/react-testing/optimization-of-tests">
          optimization-of-tests
        </Link>
        <Link href="/components/react-testing/best-practices">
          best-practices
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
