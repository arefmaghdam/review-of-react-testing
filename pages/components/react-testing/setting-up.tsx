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
      `}
      />
    </div>
  );
};

export default SettingUp;
