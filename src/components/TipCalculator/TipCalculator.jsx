import React from "react";
import InputField from "../InputField";
import TipPercentButtons from "../TipPercentButtons";
import Results from "../Results";
import styles from "./TipCalculator.module.css";

function TipCalculator() {
  const [bill, setBill] = React.useState("");
  const [people, setPeople] = React.useState("");

  function onChangeBill(e) {
    setBill(Number(e.target.value));
  }

  function onChangePeople(e) {
    setPeople(Number(e.target.value));
  }

  return (
    <section className={styles.container}>
      <form
        className={styles.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <InputField
          id="bill"
          title="Bill"
          variant="dollar"
          value={bill}
          onChange={onChangeBill}
        />
        <TipPercentButtons />
        <InputField
          id="numOfPeople"
          title="Number of People"
          variant="person"
          value={people}
          onChange={onChangePeople}
        />
        <Results />
      </form>
    </section>
  );
}

export default TipCalculator;
