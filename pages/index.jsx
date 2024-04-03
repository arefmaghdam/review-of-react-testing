import React from "react";
import styles from "../styles/Home.module.css";
import ReactTestingProvider from "./components/react-testing-provider";

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeItems}>
          <h1>React Testing</h1>
          <ReactTestingProvider />
        </div>
      </div>
    </>
  );
};

export default Home;
