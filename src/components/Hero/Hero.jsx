import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey! I'm Mani</h1>
        <p className={styles.description}>
          I'm a Software Developer and Computer Science Student based in Ottawa, Ontario. Lets Connect!
        </p>
        <a href="mailto:manikasi@cmail.carleton.ca" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/mani.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
