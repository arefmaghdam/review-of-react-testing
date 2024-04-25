import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const DevelopeActions = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to develope the actions using TDD metodology, we have a correctGuess action that enable when user guess the secret word correctly
    // and change the success state from false to true and we know the game is end
    // so we create a src/actions/index.js and a src/actions/index.test.js
    // src/actions/index.test.js codes:

        import {correctGuess, actionTypes} from "./"

        describe("correctGuess", () => {
            test('should returns an action with type "CORRECT_GUESS"', () => {
              const action = correctGuess()
              expect(action).toBe({})
            })

            // but we have a error because of toBe(), note that we have 2 types of variables in javascript: 1 mutable 2 immutable
            // {} is a mutable variable, this mean we can to change the content of objects, so we must to use .toEqual() for mutable variables and .toBe() is for immutable variables such as numbers and strings
            // so we rewrite the test as below:

            test('should returns an action with type "CORRECT_GUESS"', () => {
              const action = correctGuess()
              expect(action).toEqual({})
            })

            // now we add type to action:

            test('should returns an action with type "CORRECT_GUESS"', () => {
                const action = correctGuess()
                expect(action).toEqual({type: actionTypes.CORRECT_GUESS})
              })
            
        })

    // src/actions/index.js codes:

        export const actionTypes = {
            CORRECT-GUESS: "CORRECT-GUESS",
        }

        export function correctGuess() {
            return {}
        }

        // we add type to action:

        export function correctGuess() {
            return {
                type: actionTypes.CORRECT_GUESS
            }
        }

    // action has a type and sometimes has a payload and returns type and payload for update the states
      `}
      />
    </div>
  );
};

export default DevelopeActions;
