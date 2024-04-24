import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const AppDevelopmentOptimization = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    
    // we want to optimize the app and will back to test in future:
    // app.js codes:
    
            import React from "react";
            import "./App.css";
            import Congrats from "./components/congrats/Congrats";
            import GuessedWords from "./components/guessWord/GuessedWords";

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
                  </div>
                );
              }
            }

            export default App;

      // now we want to styling the app, for this task we delete the App.css codes and change the App.js className="App" to className="container"
      // for stylyng we use bootstrap, so copy css Link tag to public/index.html as below:
      // public/index.html codes:

            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                  name="description"
                  content="Web site created using create-react-app"
                />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                  rel="stylesheet"
                  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                  crossorigin="anonymous"
                />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <link
                  rel="stylesheet"
                  href="%PUBLIC_URL%/assets/css/bootstrap.min.css"
                  crossorigin="anonymous"
                />
                <link
                  rel="stylesheet"
                  href="%PUBLIC_URL%/assets/css/template.css"
                  crossorigin="anonymous"
                />

                <title>React App</title>
              </head>

              <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <div id="root"></div>
                <script
                  src="%PUBLIC_URL%/assets/js/jquery-3.2.1.slim.min.js"
                  crossorigin="anonymous"
                ></script>
                <script
                  src="%PUBLIC_URL%/assets/js/popper.min.js"
                  crossorigin="anonymous"
                ></script>
                <script
                  src="%PUBLIC_URL%/assets/js/bootstrap.min.js"
                  crossorigin="anonymous"
                ></script>
              </body>
            </html>
      
      // GuessedWords.js codes:

            import React from "react";
            import PropTypes from "prop-types";

            const GuessedWords = (props) => {
              let content;
              if (props.guessedWords.length === 0) {
                content = (
                  <span data-test="guess-instructions">Try to guess the secret word!</span>
                );
              } else {
                const guessedWordsRows = props.guessedWords.map((word, index) => (
                  <tr data-test="guessed-word" key={index}>
                    <td>{word.guessedWord}</td>
                    <td>{word.letterMatchCount}</td>
                  </tr>
                ));
                
                content = (
                  <div data-test="guessed-words">
                    <h3>Guessed Words</h3>
                    <table className="table table-sm">
                      <thead className="thead-light">
                        <tr>
                          <th>Guess</th>
                          <th>Matching Letters</th>
                        </tr>
                      </thead>
                      <tbody>{guessedWordsRows}</tbody>
                    </table>
                  </div>
                );
              }
              return <div data-test="component-guessed-words">{content}</div>;
            };

            GuessedWords.propTypes = {
              guessedWords: PropTypes.arrayOf(
                PropTypes.shape({
                  guessedWord: PropTypes.string.isRequired,
                  letterMatchCount: PropTypes.number.isRequired,
                })
              ).isRequired,
            };

            export default GuessedWords;
      
      // Congrats.js codes:

            import React from "react";
                
            const Congrats = (props) => {
              if (props.success) {
                return (
                  <div data-test="component-congrats" className="alert alert-success">
                    <span data-test="congrats-message">
                      Congratolations! You guessed the word!
                    </span>
                  </div>
                );
              } else {
                return <div data-test="component-congrats"></div>;
              }
            };
            
            export default Congrats;
      
      `}
      />
    </div>
  );
};

export default AppDevelopmentOptimization;
