import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const ReduxTesting = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to write some tests for redux:
    // test 1: do components have access to:
    // a- the state they need b- the action creators they need
    // the input component needs to success state and guessWord action, so we want to write test for input component
    // src/components/input/__tests__/input.test.js codes:

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
        
        // note that components have accessibility to states using props and mapStateToProps()
        describe("redux props", () => {
            test('should has success piece of state as props', () => {
              const success = trueconst wrapper = setup({success})
              const successProps = wrapper.instance().props.success
              expect(successProps).toBe(success)
            })
            
            test('should guessWord action creator is a function prop', () => {
              const wrapper = setup()
              const guessWordProps = wrapper.instance().props.guessWord
              expect(guessWordProps).toBeInstanceOf(Function)
            })
            
        })

    // src/components/input/input.js codes:

        import React, { Component } from "react";
        import { connect } from "react-redux";
        import {guessWord} from "../../actions"
        
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

        export default connect(mapStateToProps, {guessWord})(Input);

    // we want to write same tests for app component, src/App.test.js codes:

        import React from "react"
        import App from "./App";
        import Enzyme, { shallow } from "enzyme";
        import Adapter from "@cfaester/enzyme-adapter-react-18";
        import {storeFactory} from "./test/testUtils"
        
        Enzyme.configure({ adapter: new Adapter() });
        
        const setup = (props = {}, state = null) => {
          const store = storeFactory(state)
          const wrapper = shallow(<App {...props} store={store} />).dive().dive();
          if (state) wrapper.setState(state);
          return wrapper;
        };

        const findByTestAttr = (wrapper, val) => {
          return wrapper.find('[data-test="{val}"]');
        };

        test("should render without error", () => {
          const wrapper = setup();
          const appComponent = findByTestAttr(wrapper, "component-app");
          expect(appComponent.length).toBe(1);
        });

        test("should renders increment button on screen", () => {
          const wrapper = setup();
          const button = findByTestAttr(wrapper, "increment-button");
          expect(button.length).toBe(1);
        });

        test("should renders counter displayer", () => {
          const wrapper = setup();
          const counterDisplay = findByTestAttr(wrapper, "counter-display");
          expect(counterDisplay.length).toBe(1);
        });

        test("counter starts at 0", () => {
          const wrapper = setup();
          const initialCounterState = wrapper.state("counter");
          expect(initialCounterState).toBe(0);
        });

        test("clicking button increments counter display", () => {
          const counter = 7;
          const wrapper = setup(null, { counter });
          const button = findByTestAttr(wrapper, "increment-button");
          button.simulate("click");
          const counterDisplay = findByTestAttr(wrapper, "counter-display");
          expect(counterDisplay.text()).toContain(counter + 1);
        });

        describe("redux properties", () => {
            test('should has access to success state', () => {
              const success = true
              const wrapper = setup({success})
              const successProps = wrapper.instance().props.success
              expect(successProps).toBe(success)
            })
            test('should has access to guessWords state', () => {
                const guessWords = [{guessedWord: "train", letterMatchCount: 3}]
                const wrapper = setup({guessWords})
                const guessWordsProps = wrapper.instance().props.guessWords
                expect(guessWordsProps).toBe(guessWords)
            })
            test('should has access to secretWord state', () => {
                const secretWord = "party"
                const wrapper = setup({secretWord})
                const secretWordProps = wrapper.instance().props.secretWord
                expect(secretWordProps).toBe(secretWord)
            })
            test('should getSecretWord action creator is a function on the props', () => {
              const wrapper = setup()
              const getSecretWordProps = wrapper.instance().props.getSecretWord
              expect(getSecretWordProps).toBeInstanceOf(Function)
            })
            
        })
        

    // src/App.js codes:

        import React from "react";
        import "./App.css";
        import Congrats from "./components/congrats/Congrats";
        import GuessedWords from "./components/guessWord/GuessedWords";
        import Input from "./components/input/input";
        import {connect} from "react-redux"
        import {getSecretWord} from "actions"
        import Input from "./components/input/Input"
        
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
                <Congrats success={this.props.success} />
                <Input />
                <GuessedWords guessedWords={this.props.guessedWords} />
                <Input />
              </div>
            );
          }
        }
        
        export default connect(mapStateToProps, {getSecretWord})(App);

        const mapStateToProps = (state) => {
            const {success, guessWords, secretWord} = state
            return {success, guessWords, secretWord}
        }

    // now we want to write tests for getSecretWord action, when our app is mount getSecretWord action send a request for server and get secret word and save it into our state
    // getSecretWord should to execute once in mounting app, we should to create an instance of App that not connect to store named unConnectedApp, that means we want to use mocking in this case using jest mock function
    // note that when we create an instance of App and write and execute App tests componentDidMount lifecycle is execute that we dont want this and should avoid this case
    // so we going to setup.test.js file:

        // jest-dom adds custom jest matchers for asserting on DOM nodes.
        // allows you to do things like:
        // expect(element).toHaveTextContent(/react/i)
        // learn more: https://github.com/testing-library/jest-dom
        import "@testing-library/jest-dom";
        import Enzyme from "enzyme";
        import Adapter from "@cfaester/enzyme-adapter-react-18";
        
        Enzyme.configure({ 
            adapter: new Adapter(),
            disableLifecycleMethods: true,
            // now lifecycle methods execute by user commands but not default
        });
        
    // src/App.js codes:

        import React from "react";
        import "./App.css";
        import Congrats from "./components/congrats/Congrats";
        import GuessedWords from "./components/guessWord/GuessedWords";
        import Input from "./components/input/input";
        import {connect} from "react-redux"
        import {getSecretWord} from "actions"
        import Input from "./components/input/Input"
        
        export class UnconnectedApp extends React.Component {
          constructor(props) {  
            super(props);
        
            this.state = { counter: 0 };
          }

          componentDidMount() {
            this.props.getSecretWord()
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
                <Congrats success={this.props.success} />
                <Input />
                <GuessedWords guessedWords={this.props.guessedWords} />
                <Input />
              </div>
            );
          }
        }

        export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp);

        const mapStateToProps = (state) => {
            const {success, guessWords, secretWord} = state
            return {success, guessWords, secretWord}
        }

    // src/App.test.js codes:

        import App, {UnconnectedApp} from "./App";
        import Enzyme, { shallow } from "enzyme";
        import Adapter from "@cfaester/enzyme-adapter-react-18";
        
        Enzyme.configure({ adapter: new Adapter() });
        
        const setup = (props = {}, state = null) => {
          const wrapper = shallow(<App {...props} />);
          if (state) wrapper.setState(state);
          return wrapper;
        };

        const findByTestAttr = (wrapper, val) => {
          return wrapper.find('[data-test="{val}"]'');
        };

        test("should render without error", () => {
          const wrapper = setup();
          const appComponent = findByTestAttr(wrapper, "component-app");
          expect(appComponent.length).toBe(1);
        });

        test("should renders increment button on screen", () => {
          const wrapper = setup();
          const button = findByTestAttr(wrapper, "increment-button");
          expect(button.length).toBe(1);
        });

        test("should renders counter displayer", () => {
          const wrapper = setup();
          const counterDisplay = findByTestAttr(wrapper, "counter-display");
          expect(counterDisplay.length).toBe(1);
        });

        test("counter starts at 0", () => {
          const wrapper = setup();
          const initialCounterState = wrapper.state("counter");
          expect(initialCounterState).toBe(0);
        });

        test("clicking button increments counter display", () => {
          const counter = 7;
          const wrapper = setup(null, { counter });
          const button = findByTestAttr(wrapper, "increment-button");
          button.simulate("click");
          const counterDisplay = findByTestAttr(wrapper, "counter-display");
          expect(counterDisplay.text()).toContain(counter + 1);
        });

        test('should getSecretWord runs on App mount', () => {
          const getSecretWordMock = jest.fn()
          const props = {
            getSecretWord: getSecretWordMock,
            success: false,
            guessedWords: []
          }
          const wrapper = sahllow(<UnconnectedApp {...props} />)
          wrapper.instance().componentDidMount()
          const getSecretWordCallCount = getSecretWordMock.mock.calls.length
          expect(getSecretWordCallCount).toBe(1)
        })
        
    // now we want to write tests for guessWord action, src/components/input/input.js codes:

        import React, { Component } from "react";
        import { connect } from "react-redux";
        
        export class UnconnectedInput extends Component {
            constructor(props) {
                super(props)
                this.state = {currentGuess: null}
            }

            submitGuessedWord = (e) => {
                e.preventDefault()
                const guessedWord = this.state.currentGuess
                if(guessedWord && guessedWord.length > 0) {
                    this.props.guessWord(guessedWord)
                    this.setState({currentGuess: ""})
                }
            }
          render() {
            const contents = this.props.success ? null : (
              <form className="form-inline">
                <input
                  data-test="input-box"
                  className="mb-2 mx-sm-3"
                  type="text"
                  placeholder="inter guess"
                  value = {this.state.currentGuess}
                  onChange = {(e) => this.setState({currentGuess: e.target.value})}
                />
                <button
                  data-test="submit-button"
                  className="btn btn-primary mb-2"
                  onClick={(e) => this.submitGuessedWord(e)}
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

        export default connect(mapStateToProps)(UnconnectedInput);

    // src/components/input/__tests__/input.test.js codes:

        import React from "react";
        import { shallow } from "enzyme";
        import { findByTestAttr, storeFactory } from "../../../test/testUtils";
        import Input, {UnconnectedInput} from "../input";
        
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
    
        describe("guessWord action creator call", () => {
            let guessWordMock
            let wrapper
            const guessedWord = "train"
            beforeEach(() => {
                guessWordMock = jest.fn()
                const props = {
                    guessWord: guessWordMock
                }
                wrapper = shallow(<UnconnectedInput {...props} />)
                wrapper.setState({currentGuess: guessedWord})
                const submitButton = findByTestAttr(wrapper, "submit-button")
                submitButton.simulate("click", {preventDefault() {}})
            })
            test('should calls guessWord when button is clicked', () => {
              const guessWordCallCount = guessWordMock.mock.calls.length
              expect(guessWordCallCount).toBe(1)
            })
            test('should calls guessWord with input value as argument', () => {
              const guessWordArg = guessWordMock.mock.calls[0][0]
              expect(guessWordArg).toBe(guessedWord)
            })
            test('should input box clears on submit', () => {
              expect(wrapper.state("currentGuess")).toBe("")
            })
            
        })
      `}
      />
    </div>
  );
};

export default ReduxTesting;
