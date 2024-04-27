import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const InputComponentDevelopment = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to develope the input component using TDD metodology, input component depends on success state,
    // this mean when success state is true input component is hidden and congrats component is show
    // and when success state is false congrats component is hidden and input component is enable
    // we create a src/component/input/input.js and a src/component/input/__tests__/input.test.js
    // src/component/input/__tests__/input.test.js codes:

    import React from "react";
    import { shallow } from "enzyme";
    import { findByTestAttr, storeFactory } from "../../../test/testUtils";
    import Input from "../input";
    
    const setup = (initialState = {}) => {
      const store = storeFactory(initialState);
      const wrapper = shallow(<Input store={store} />)
        .dive()
        .dive();
      return wrapper;
    };
    
    // .dive gime us child of shallow component or wrapper
    
        describe("render", () => {
          describe("word has not been guessed", () => {
            let wrapper;
        
            beforeEach(() => {
              const initialState = { success: false };
              wrapper = setup(initialState);
            });
        
            test("should renders component without error", () => {
              const component = findByTestAttr(wrapper, "component-input");
              expect(component.length).toBe(1);
            });
        
            test("should renders input box", () => {
              const inputBox = findByTestAttr(wrapper, "input-box");
              expect(inputBox.length).toBe(1);
            });
        
            test("should renders submit button", () => {
              const submitButton = findByTestAttr(wrapper, "submit-button");
              expect(submitButton.length).toBe(1);
            });
          });
      
          describe("word has been guessed", () => {
            let wrapper;
        
            beforeEach(() => {
              const initialState = { success: true };
              wrapper = setup(initialState);
            });
        
            test("should renders component without error", () => {
              const component = findByTestAttr(wrapper, "component-input");
              expect(component.length).toBe(1);
            });
        
            test("shouldnt renders input box", () => {
              const inputBox = findByTestAttr(wrapper, "input-box");
              expect(inputBox.length).toBe(0);
            });
        
            test("shouldnt renders submit button", () => {
              const submitButton = findByTestAttr(wrapper, "submit-button");
              expect(submitButton.length).toBe(0);
            });
          });
        });    
 
    // note that we cant write functional component because of working with state in this component, src/component/input/input.js codes:

        import React, { Component } from "react";
        import { connect } from "react-redux";
        
        class Input extends Component {
          render() {
            const contents = this.props.success ? null : (
              <form className="form-inline">
                <input
                  data-test="input-box"
                  className="mb-2 mx-sm-3"
                  type="text"
                  placeholder="inter guess"
                />
                <button
                  data-test="submit-button"
                  className="btn btn-primary mb-2"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            );
            return <div data-test="component-input">{contents}</div>;
          }
        }

        const mapStateToProps = ({ success }) => {
          return { success };
        };

        export default connect(mapStateToProps)(Input);    
    
    // we should to give accessiblity to store for Input thus we dont have error, in src/test/testUtils.js we have:

        import checkPropTypes from "check-prop-types";
        import rootReducer from "../reducers";
        import { configureStore } from "@reduxjs/toolkit";

        export const storeFactory = (initialState) => {
          return configureStore({ reducer: rootReducer, preloadedState: initialState });
        };

        export const findByTestAttr = (wrapper, val) => {
          return wrapper.find('[data-test="{val}"]');
        };

        export const checkProps = (component, templateProps) => {
          const propError = checkPropTypes(
            component.propTypes,
            templateProps,
            "prop",
            component.name
          );
          expect(propError).toBeUndefined();
        };

    // successReducer.js codes:

        import { actionTypes } from "../actions";

        export default (state= false, action) => {
          switch (action.type) {
            case actionTypes.CORRECT_GUESS:
              return true;
            default:
              return state;
          }
        };
    
    // App.js codes:

        import React from "react";
        import "./App.css";
        import Congrats from "./components/congrats/Congrats";
        import GuessedWords from "./components/guessWord/GuessedWords";
        import Input from "./components/input/input";
        
        class App extends React.Component {
          constructor(props) {
            super(props);
        
            this.state = { counter: 0 };
          }
      
          render() {
            return (
              <div className="container">
                <div data-test="component-app">
                  <h1 data-test="counter-display">
                    The counter is currently {this.state.counter}
                  </h1>
                  <button
                    onClick={() => this.setState({ counter: this.state.counter + 1 })}
                    data-test="increment-button"
                  >
                    Increment Counter
                  </button>
                  <div>// congrats component</div>
                </div>
                <h1>Jotto</h1>
                <Congrats success={false} />
                <GuessedWords guessedWords={[]} />
                <Input />
              </div>
            );
          }
        }
        
        export default App;
    
      `}
      />
    </div>
  );
};

export default InputComponentDevelopment;
