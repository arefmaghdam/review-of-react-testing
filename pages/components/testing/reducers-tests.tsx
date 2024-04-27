import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const ReducersTests = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to write tests for reducer, what is reducer?
    // when no action is not occur in screen or user doesnt guess the correct word, our success state is false
    // and when user guess the correct word correctly the correctGuess action occur and be trigger and going to reducer and reducer update the success state to true
    // so we should write 2 tests:
    // we create a src/reducers/successReducer.test.js and its codes are:

        import {actionTypes} from "../actions"
        import successReducer from "./successReducer"

        test('should returns default initial state of "false" when no action is passed', () => {
          const newState = successReducer(undefined, {})
          expect(newState).tooBe(false)
        })
        
        test('should returns state of "true" open receiving an action of type "CORRECT_GUESS"', () => {
          const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS})
          expect(newState).tooBe(true)
        })

    // successReducer.js codes:

        import {actionTypes} from "../actions"

        export default (state, action) => {
            switch(action.type) {
                case (actionTypes.CORRECT_GUESS):
                    return true
                default:
                    return false
            }
        }
        
      `}
      />
    </div>
  );
};

export default ReducersTests;
