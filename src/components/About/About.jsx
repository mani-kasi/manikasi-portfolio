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
                I'm a student studying Computer Science with a minor in Business at Carleton University
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Academic Journey</h3>
              <p>
              Throughout my academic journey and recent co-op experience, I have gained hands-on experience in software development, honing my skills in languages such as C/C++, Java, and Python. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Outside of School</h3>
              <p>
              Beyond my academic pursuits, I founded and manage 
              ULM Promotions, an entrepreneurial venture focused on online marketing and lead management for real estate.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
