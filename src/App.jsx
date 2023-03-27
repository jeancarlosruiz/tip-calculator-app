import React from "react";
import Header from "./components/Header";
import TipCalculator from "./components/TipCalculator";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <main className={styles.container}>
        <Header />
        <TipCalculator />
      </main>
    </>
  );
}

export default App;
