import React, { useEffect } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      offset: 100, // Distance of the animation trigger
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
    });
  }, []);

  return (
    <div
      className={styles.container}
      data-aos="fade-up" // AOS animation type
    >
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          Source
        </a>
      </div>
    </div>
  );
};
