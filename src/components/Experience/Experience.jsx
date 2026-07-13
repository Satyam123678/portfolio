import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={`${styles.skill} `}>
                <div
                  className={`${styles.skillImageContainer} ${
                    skill.title === "MySQL" ? styles.mysqlSkill : ""
                  }`}
                >
                  <img
                    className={`${styles.glowSkill}`}
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  className={styles.skillImage}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => (
                      <li key={id}>{experience}</li>
                    ))}
                  </ul>
                  {historyItem.organisation === "Vivekananda College" && (
                    <a
                      href="https://drive.google.com/file/d/1KFW-WXTOVQaV3tSgOaZu8FTgcpE8iiXr/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.viewButton} `}
                    >
                      View Document
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
