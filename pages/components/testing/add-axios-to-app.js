import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const AddAxiosToApp = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to add axios to app for receiving secret word from a server and write tests for axios
    // but there are a problem that when we write tests for our components jest create a virtual environment and 
    // and execute test into virtual environment and in this case we cant fetch requests in virtual environment 
    // so we should to use moxios package for fake requests from fake server and write tests for axios
    // axios and moxios installation(install separatly):

        npm install axios

        npm install --save-dev moxios

    // src/actions/index.test.js codes:

        import moxios from "moxios"
        import {storeFactory} from "../test/testUtils"
        import {getSecretWord} from "."

        describe("getSecretWord action creator", () => {
            beforeEach(() => {
                moxios.install()
            })

            afterEach(() => {
                moxios.uninstall()
            })

            test('should adds response word to state', () => {
              const secretWord = "party"
              const store = storeFactory()

              moxios.wait(() => {
                const request = moxios.requests.mostRecent()
                request.respondWith({
                    status: 200,
                    response: secretWord,
                })
              })

              return store.dispatch(getSecretWord())
                .then(() => {
                    const newState = store.getState()
                    expect(newState.secretWord).toBe(secretWord)
                })
            })
            
        })

    // now we should to write an action for axios, src/actions/index.js codes:

        import { getLetterMatchCount } from "../helpers";
        import axios from "axios"

        export const actionTypes = {
          CORRECT_GUESS: "CORRECT_GUESS",
          GUESS_WORD: "GUESS_WORD",
          SET_SECRET_WORD: "SET_SECRET_WORD",
        };

        export const guessWord = (guessedWord) => {
          return function (dispatch, getState) {
            const secretWord = getState().secretWord;
            const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
        
            dispatch({
              type: actionTypes.GUESS_WORD,
              payload: { guessedWord, letterMatchCount },
            });
        
            if (guessedWord === secretWord) {
              dispatch({ type: actionTypes.CORRECT_GUESS });
            }
          };
        };

        export function correctGuess() {
          return {
            type: actionTypes.CORRECT_GUESS,
          };
        }

        // this action should fetch a request to a server
        export const getSecretWord = () => {
            return (dispatch) => {
                return axios.get("https://random-word-form.herokuapp.com/random/noun")
                    .then(res => {
                        dispatch({
                            type: actionTypes.SET_SECRET_WORD,
                            payload: res.data
                        })
                    })
            }
        }
    
    // src/reducers/secretWordReducer.js codes:

        import {actionTypes} from "../actions"
    
        export default (state = null, action) => {
            switch(action.type) {
                case actionTypes.SET_SECRET_WORD:
                    return action.payload
                default:
                    return state
            }
        };
          
      `}
      />
    </div>
  );
};

export default AddAxiosToApp;
