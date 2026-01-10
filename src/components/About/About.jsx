import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/avatar.png")}
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>About Me</h3>
              <p>
                I’m a Computer Science (Honours) student at Carleton University with a minor in Business.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Academic Journey</h3>
              <p>
              Throughout my academic journey and recent co-op experience, I have gained hands-on experience in software development, where I shipped production UI features at Ciena (Ember + TypeScript) and previously worked in C on protocol tooling at Ross Video.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Outside of School</h3>
              <p>
              I’m currently building a clothing brand (SEVR) and documenting the process online.  Recently, when my 2D mockups didn’t match the real sample as expected, I built a full-stack 3D Pattern Visualizer to preview patterns on a pants model and validate designs before ordering future samples to save costs and time.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
