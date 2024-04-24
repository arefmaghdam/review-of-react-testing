import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const AddReduxToApp = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to add redux to app, the most important essue in redux implementation is that how much states and which states we need to use
    // in this app we need below states:
    // 1 secretWord      string         from server
    // 2 success         boolean        false(default)
    // 3 guessedWord     array          [{guessedWord: string, letterMatchCount: number}, ...], default([])
    // we have 2 actions too
    // 1 correctGuess action for change success to true and when user guess correct it is enable
    // 2 wrongGuess action for change and update guessedWords array and when user doesnt guess correct it is enable
    // now we must to config redux, the first step is redux installation:

        npm install --save redux react-redux

    // the next step is creation of reducer, so we create a src/reducers/index.js and a src/reducers/successReducer.js
    // src/reducers/successReducer.js codes:

        export default (state, action) => {
            return null
        }

    // src/reducers/index.js codes:

        import {combineReducers} from "redux"
        import success from "./successReducer"

        export default combineReducers({
            success,
        })
    
    // now we create a src/configureStore.js
    // src/configureStore.js codes:

        import {createStore} from "redux"
        import rootReducer from "./reducers"

        export default createStore(rootReducer)

    // src/index.js codes:

        import React from "react";
        import ReactDOM from "react-dom/client";
        import "./index.css";
        import App from "./App";
        import reportWebVitals from "./reportWebVitals";
        import {Provider} from "react-redux"
        import store from "./configureStore"
        
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
            <Provider store={store}>
                <App />
            </Provider>
            );
        reportWebVitals();
    
      `}
      />
    </div>
  );
};

export default AddReduxToApp;
