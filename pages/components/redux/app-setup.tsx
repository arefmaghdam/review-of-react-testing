import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const AppSetup = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // open up your terminal and execute this command:
        npx create-react-app restaurant --template typescript
    // open your project in VSC, go to your terminal and run this command:
        npm run start
    // App.tsx codes:
    
        import React, { useState } from "react";
        import "./App.css";

        function App() {
          return (
            <div className="App">
              <div className="container">
                <div className="reservation-container">
                  <div>
                    <h5 className="reservation-header">Reservations</h5>
                    <div className="reservation-cards-container">
                      <div className="reservation-card-container">Laith Harb</div>
                    </div>
                  </div>
                  <div className="reservation-input-container">
                    <input />
                    <button>Add</button>
                  </div>
                </div>
                <div className="customer-food-container">
                  <div className="customer-food-card-container">
                    <p>Selena Gomez</p>
                    <div className="customer-foods-container">
                      <div className="customer-food"></div>
                      <div className="customer-food-input-container">
                        <input />
                        <button>Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }

        export default App;
        `}
      />
    </div>
  );
};

export default AppSetup;
