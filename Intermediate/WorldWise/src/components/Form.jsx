import Button from "./Button";
import { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [cityName, setCityName] = useState("");
  const [visitTime, setVisitTime] = useState("Wed Mar 29 2023 17:12 GMT+0100");
  const [tripNotes, setTripNotes] = useState("");
  return (
    <div className={styles.form}>
      <div className={styles.inputFields}>
        <label htmlFor="cityName">City Name</label>
        <input
          type="text"
          id="cityName"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>
      <div className={styles.inputFields}>
        <label htmlFor="cityTime">When did you go to?</label>
        <input
          type="text"
          id="cityTime"
          value={visitTime}
          onChange={(e) => setVisitTime(e.target.value)}
        />
      </div>
      <div className={styles.inputFields}>
        <label htmlFor="cityName">Notes about your trip to</label>
        <textarea
          value={tripNotes}
          onChange={(e) => setTripNotes(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.inputControls}>
        <Button type="primary" onClick={() => {}}>
          Add
        </Button>
        <Button type="back">&larr; Back</Button>
      </div>
    </div>
  );
}
