import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const TestsContentOfFirstApp = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to write content of tests,
    // App.test.js codes:

        import App from "./App"
        import React from "react"
        import Enzyme , {shallow} from "enzyme"
        import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

        Enzyme.configure({adapter: new Adapter()})

        // 1 test for rendering without error as a general test
        test('should render without error', () => {
          const wrapper = shallow(<App />)
          const appComponent = wrapper.find("[data-test= 'component-app']")
          expect(appComponent.length).toBe(1)
        })

        // 2 test for exist a button on screen or not?
        test('should renders increment button on screen', () => {
            const wrapper = shallow(<App />)
            const button = wrapper.find("[data-test= 'increment-button']")
            expect(button.length).toBe(1)
        })

        // 3 testing for exist a counter displayer in screen or not?
        test('should renders counter displayer', () => {
            const wrapper = shallow(<App />)
            const counterDisplay = wrapper.find("[data-test= 'counter-display']")
            expect(counterDisplay.length).toBe(1)
        })

        // 4 testing for counter starts at 0 or not?
        test('should counter starts at 0', () => {
          
        })

        // 5 testing for clicking button increments counter display or not?
        test('should increases display counter when clicking button', () => {
          
        })

    // App.js codes: 

    // test 1 => app codes:

        import "./App.css"

        function App() {
            return (
                <div data-test="component-app">

                </div>
            )
        }

        export default App

        npm test

    // test 2 => app codes:

        import "./App.css"

        function App() {
            return (
                <div data-test="component-app">

                </div>
            )
        }

        export default App
    
    // test 3 => app codes:

        import "./App.css"

        function App() {
            return (
                <div data-test="component-app">
                    <h1 data-test= "counter-display">The counter is currently: </h1>
                    <button data-test= "increment-button">Increment Counter</button>
                </div>
            )
        }

        export default App
        
    // test 4 => app codes:

        import "./App.css"

        function App() {
            return (
                <div data-test="component-app">
                    <h1 data-test= "counter-display">The counter is currently: </h1>
                    <button data-test= "increment-button">Increment Counter</button>
                </div>
            )
        }

        export default App
        
    // test 5 => app codes:

        import "./App.css"

        function App() {
            return (
                <div data-test="component-app">
                    <h1 data-test= "counter-display">The counter is currently: </h1>
                    <button data-test= "increment-button">Increment Counter</button>
                </div>
            )
        }

        export default App

    // we see that the 3 lines of tests codes are same and we can optimized this task by 2 way:
    // 1 writing a function for this 3 lines
    // 2 using of before each
    // 3 using of combination of 2 way

      `}
      />
    </div>
  );
};

export default TestsContentOfFirstApp;
