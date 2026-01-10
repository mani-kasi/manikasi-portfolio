import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey! I'm Mani</h1>
        <p className={styles.description}>
          I'm a Software Developer and Computer Science Student based in Ottawa, Ontario. Let's Connect!
        </p>
        <div className={styles.buttonGroup}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            Resume
          </a>
          <a
            href="https://github.com/mani-kasi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mani-kasi-479291252/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            LinkedIn
          </a>
          <a
            href="mailto:manikasi@cmail.carleton.ca"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            Email
          </a>
        </div>
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
