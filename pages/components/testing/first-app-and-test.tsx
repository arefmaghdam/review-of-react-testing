import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const FirstAppAndTest = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to develop a simple app and write that tests, app is a click counter app that when click a button count a number
    
        create-react-app click-counter
        cd click-counter
        npm install --save-dev enzyme jest-enzyme @wojtekmaj/enzyme-adapter-react-17
        npm test

    // App.test.js codes:

        import App from "./App"
        import React from "react"
        import Enzyme , {shallow} from "enzyme"
        import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

        Enzyme.configure({adapter: new Adapter()})

        // 1 test for rendering without error as a general test
        test('should render without error', () => {
          
        })

        // 2 test for exist a button on screen or not?
        test('should renders increment button on screen', () => {
          
        })

        // 3 testing for exist a counter displayer in screen or not?
        test('should renders counter displayer', () => {

        })

        // 4 testing for counter starts at 0 or not?
        test('should counter starts at 0', () => {
          
        })

        // testing for clicking button increments counter display or not?
        test('should increases display counter when clicking button', () => {
          
        })

    // this is first step of TDD, so now execute below command:

        npm test

    // all o fthe tests are passed that tests content is not writed
      `}
      />
    </div>
  );
};

export default FirstAppAndTest;
