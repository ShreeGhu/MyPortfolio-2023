import React from "react";
import styles from "../styles/FixedSentence.module.css";

const FixedSentence = ({ sentence }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* <div>
        <div
          className={`${styles.fix} uppercase text-xs md:text-lg lg:text-sm p-4 lg:p-2 fixed right-0  hidden md:block`}
        >
          ---------------- shreeghub@gmail.com
        </div>
      </div> */}
      <div
        className={`${styles.fixedd} uppercase lg:text-sm lg:text-green-500  lg:p-2 hidden md:block`}
      >
        {sentence} {currentYear}
      </div>
    </div>
  );
};

export default FixedSentence;
