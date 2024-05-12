import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const GuessedWordStateDevelopment = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to develope guessedWord state, guessedWord is an object such as {guessedWord, letterMatchCount}
    // so we need to a helper function that calculate the letter match count and created an action named GUESS_WORD 
    // that transfer this guessedWord state to reducer and compare with secretWord State and return the results 
    // and update the guessedWord state array, there are 3 complexity for solve this task: 
    // 1 we must to access to secretWord state 2 calculete the same letters between guessedWord and secretWord 3 access to success state when guessedWord is true
    // note that when we want to call an action into another action and need to access to another state, we can use redux-thunk
    // redux-thunk is a tool that increase the flexibility of action and let us to dispatch several actions
    // note that there are 2 way to enable an action: 1 by event enablation (generally) 2 by using dispatch and without event and manually
    // so redux thunk let us to access to all of the states
    // redux-thunk installation and configuration:

        npm install redux-thunk

    // configureStore.js codes:

        import { configureStore } from "@reduxjs/toolkit";
        import rootReducer from "./reducers";
        import { thunk } from "redux-thunk";

        const store = configureStore({
          reducer: rootReducer,
          middlewares: [thunk],
        });

        export default store;
    
    // testUtils.js codes:

        import checkPropTypes from "check-prop-types";
        import rootReducer from "../reducers";
        import { configureStore } from "@reduxjs/toolkit";
        import { middlewares } from "../configureStore";

        export const storeFactory = (initialState) => {
          const store = configureStore({
            reducer: rootReducer,
            preloadedState: initialState,
            middleware: middlewares,
          });
          return store;
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
    // now we want to write tests, but we review somethings before writing tests:
    // we added redux thunk and middleware to our store, these teke us some options, that means we can use
    // store.dispatch() for taking an action and execution, also we can use store.getState() for returning our state object
    // store.dispatch() and store.getState() help us for writing tests
    // step 1 in writing test is creating a store with initial state that will contain secretWord for comparing
    // step 2  is dispatch action creator:
        store.dispatch(guessWord())
    // step 3 is checking state
    // note that we cant write tests for reducer and action separatly in this case, because reducer and action are bind together in this case
    // in this case we use integration test but not unit test
    // so we create a src/integration/integration.test.js file and src/integration/integration.test.js codes are:

        import {storeFactory} from "../test/testUtils"
        import {guessWord} from "../actions"
        // guessWord action is not exist and will write codes

        describe("guessWord action dispatcher", () => {
          // we need to some initial values

          const secretWord = "party"
          const unsuccessfulGuess = "train"

          describe("no guessed words", () => {
            let store;
            const initialState = {secretWord}
            beforeEach(() => {
              store = storeFactory(initialState)
            })
            test('should updates state correctly for unsuccessful guess', () => {
              // calling guessWord action and going action to reducer and updating our state
              store.dispatch(guessWord(unsuccessfulGuess))
              // taking new updated state
              const newState = store.getState()
              const expectedState = {
                ...initialState,
                success: false,
                guessedWord: [{
                  guessedWord: unsuccessfulGuess,
                  letterMatchCount: 3
                }]
              }
              expect(newState).toEqual(expectedState)
            })
            test('should updates state correctly for successful guess', () => {
              store.dispatch(guessWord(secretWord))
              const newState = store.getState()
              const expectedState = {
                ...initialState,
                success: true,
                guessedWord: [{
                  guessedWord: secretWord,
                  letterMatchCount: 5
                }]
              }
              expect(newState).toEqual(expectedState)
            })
          })
          describe("some guessed words", () => {
            // spose user gueesed 1 word already
            const guessedWords = [{guessedWord: "agile", letterMatchCount: 1}]
            const initialState = {guessedWords, secretWord}
            let store;
            beforeEach(() => {
              store = storeFactory(initialState)
            })

            test('should updates state correctly for unsuccessful guess', () => {
              store.dispatch(guessWord(unsuccessfulGuess))
              const newState = store.getState()
              const expectedState = {
                secretWord,
                success: false,
                guessedWords: [...guessedWords, {guessedWord: unsuccessfulGuess, letterMatchCount: 3}]
              }
              expect(newState).toEqual(expectedState)
            })
            test('should updates state correctly for successful guess', () => {
              store.dispatch(guessWord(secretWord))
              const newState = store.getState()
              const expectedState = {
                secretWord,
                success: true,
                guessedWords: [...guessedWords, {guessedWord: secretWord, letterMatchCount: 5}]
              }
              expect(newState).toEqual(expectedState)
            })
          })
        })

    // for writing guessWord action codes, we must change actions/index.js codes:

        export const actionTypes = {
          CORRECT_GUESS: "CORRECT_GUESS",
          GUESS_WORD: "GUESS_WORD"
        }

        export function correctGuess() {
          return {
            type: actionTypes.CORRECT_GUESS,
          };
        }

        export const guessWord = (guessWord) => {
          return function(dispatch, getState){

          }
        }
        // redux is enable because action return a function, when action return a function middleware is enable and redux is enable
    
    // also we need a reducer, so we create a src/reducers/guessedWordsReducer.js and its codes are:

        export default (state, action) => {
          return null
        }

    // src/reducers/index.js codes:

        import {combineReducers} from "redux"
        import success from "./successReducer"
        import guessedWords from "./guessedWordsReducer"

        export default combineReducers({
          success,
          guessedWords
        })
    
    // note that we should to have an error, because we dont make reducer for secretWord
    // so we create a src/reducers/secretWordReducer.js and its codes are:

        export default (state= null, action) => {
          return state;
          // this reducer hasnt permission to return null because we need to secretWord in all of tests
        }

    // also we change src/reducers/index.js codes:

        import { combineReducers } from "redux";
        import success from "./successReducer";
        import guessedWords from "./guessedWordsReducer"
        import secretWord from "./secretWordReducer"

        export default combineReducers({
          success,
          guessedWords,
          secretWord,
        });

    // now we should to write guessedWords reducer and complete the action
    // guessedWordsReducer.js codes: 

        import {actionTypes} from "../actions"
        
        export default (state=[], action) => {
          switch(action.type) {
            case actionTypes.GUESS_WORD:
              return [...state, action.payload]
            default:
              return state
          }  
        }
    
    // src/actions/index.js codes:
        
        import {getLetterMatchCount} from "../helpers"

        export const actionTypes = {
          CORRECT_GUESS: "CORRECT_GUESS",
          GUESS_WORD: "GUESS_WORD",
        }

        export const guessWord = (guessedWord) => {
          return function(dispatch, getState) {
            const secretWord = getState().secretWord
            const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)

            dispatch({
              type: actionTypes.GUESS_WORD,
              payload: {guessedWord, letterMatchCount}
            })

            if(guessedWord ===secretWord) {
              dispatch({type: actionTypes.CORRECT_GUESS})
            }
          }
        }
      `}
      />
    </div>
  );
};

export default GuessedWordStateDevelopment;
