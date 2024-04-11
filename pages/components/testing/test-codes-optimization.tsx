import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const TestCodesOptimization = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we see that the 3 lines of tests codes are same and we can optimized this task by 2 way:
    // 1 writing a function for this 3 lines
    // 2 using of before each
    // 3 using of combination of 2 way
    // App.test.js

        import App from "./App"
        import React from "react"
        import Enzyme , {shallow} from "enzyme"
        import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

        Enzyme.configure({adapter: new Adapter()})

        const setup = (props={}, state=null) => {
          return shallow(<App {...props} />)
        }

        const findByTestAttr = (wrapper, val) => {
          return wrapper.find('[data-test= '{val}']')
        }

        // 1 test for rendering without error as a general test
        test('should render without error', () => {
          const wrapper = setup()
          // const button = wrapper.find("[data-test= 'component-app']")
          const appComponent = findByTestAttr(wrapper, "component-app")
          expect(appComponent.length).toBe(1)
        })

        // 2 test for exist a button on screen or not?
        test('should renders increment button on screen', () => {
            const wrapper = setup()
            // const button = wrapper.find("[data-test= 'increment-button']")
            const button = findByTestAttr(wrapper, "increment-button")
            expect(button.length).toBe(1)
        })

        // 3 testing for exist a counter displayer in screen or not?
        test('should renders counter displayer', () => {
            const wrapper = setup()
            // const counterDisplay = wrapper.find("[data-test= 'counter-display']")
            const counterDisplay = findByTestAttr(wrapper, "counter-display")
            expect(counterDisplay.length).toBe(1)
        })

        // 4 testing for counter starts at 0 or not?
        test('should counter starts at 0', () => {
          
        })

        // 5 testing for clicking button increments counter display or not?
        test('should increases display counter when clicking button', () => {
          
        })

      `}
      />
    </div>
  );
};

export default TestCodesOptimization;
