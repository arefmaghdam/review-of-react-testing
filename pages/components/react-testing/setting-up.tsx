import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const SettingUp = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // setting-up the development environment:
    // download and install last version of node.js
    // download and install Git
    // download and install visual studio code
    // setting up the vitest as a testing framework:
        npm i -D vitest
    // package.json file scripts:
    // "test": "vitest",        // npm t or test
    // test:ui": "vitest --ui"      // npm run test:ui
    // now we created a folder named tests and a tests/main.test.ts file:
    // now download and install Vitest Snippets extention by dein software
    // iv => import {it, expect, describe} from "vitest"
    // d => describe("group", () => {})
    // i => it("should", () => {})
    // setting up React Testing Library:
        npm i -D @testing-library/react@1.4.2.0
        npm i -D jsdom  @24.0.0
    // now we created a vitest.config.ts file in project root:
        import {defineConfig} from "vitest/config

        export default defineConfig({
            test: {
                environment: "jsdom"
            }
        })
    // now restart the test terminal and enter below command to start test:
        npm run test:ui
    // now install another package:
        npm i -D @testing-library/jest-dom
    // you'll learn in testing react components:
    // What to test and what not to test
    // Testing rendering
    // Testing user intractions
    // Working with component libs like redixui and MUI
    // Techniques to simplify tests
    // Catching issues with ESLint
    // What to test? testing components:
    // there are 2 major concerns we need to test: 
    // 1- how they render? component has props
    // 2 - how they respond to user actions? component handles user events like clicks, keyboard, inputs and etc
    // note that having no tests is better than writing bad tests
    // test the behavior, not the implementation => we should test what our app does not how it's implemented
    // if our component uses hooks, react context or reducers, these are all implementation details, we should not write tests against those details
    // because if the implementation details change in the futureour tests may break even if our application still works fine 
    // so for the most part shouldn't test building blocks like hooks and reducers in isoltion unless they're used by several componentsand have complex logic
    // in those cases yes, it makes sense to unit test those pieces in isolationbut for the most part we should test them as part of testing our componentswhich is what we call integrationtesting
    // you have probably seen this test pyramid before, the test pyramid suggests that we should write more more unit teststhan integration testsand more integration tests than endtoend tests
    // this is just a guide not a strict rule, so when testing react aplicationswe often lean towards integration tests, our tests might be slowerthan unit testsbecause we'll be testing several units together
    // but they give us better confidence that our application works plus our tests are less likely to break if we refactore some code as long as the end result stays the same
    // don't test styles => the other thing you should avoid is testing styles, why? well, visual tests can be fragile a tiner style change like changing the font size or color can fail a test and honestly passing visual tests don't guarantee 
    // that our application looks good that's a job for our own eyes so instead of wasting our time testing styles we should test our application's behavior and functionality that's where the real value is all right theory time is over
      `}
      />
    </div>
  );
};

export default SettingUp;
