import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const redirectUrl =
    typeof window !== "undefined" ? `${window.location.origin}/#contact` : "/#contact";

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.loginForm}>
        <div className={styles.text}>
          <h2>Contact</h2>
        </div>

        <form
          className={styles.loginFormContent}
          action="https://formsubmit.co/bcc02d09cfe034c64f54057f1b453c41"
          method="POST"
        >
          <h1>Get in Touch</h1>

          <div className={styles.formInputMaterial}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" "
              required
              className={styles.formControlMaterial}
            />
            <label htmlFor="name">Name*</label>
          </div>

          <div className={styles.formInputMaterial}>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder=" "
              required
              className={styles.formControlMaterial}
            />
            <label htmlFor="subject">Subject*</label>
          </div>

          <div className={styles.formInputMaterial}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              required
              className={styles.formControlMaterial}
            />
            <label htmlFor="email">Email ID*</label>
          </div>

          <div className={styles.formInputMaterial}>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder=" "
              required
              className={styles.formControlMaterial}
            ></textarea>
            <label htmlFor="message">Type a message</label>
          </div>

          {/* Hidden Fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value={redirectUrl}
          />
          <input
            type="hidden"
            name="_subject"
            value="New message from your portfolio contact form"
          />
          <input type="hidden" name="_template" value="table" />

          <button
            type="submit"
            className={`
            ${styles.btn} ${styles.btnanim}
          `}
          >
            Submit
          </button>
        </form>
      </div>

      <div className={styles.text}>
        <p>Feel free to reach out!</p>

        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:satyamsinha920@gmail.com">
              satyamsinha920@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a
              href="https://www.linkedin.com/in/satyam-sinha1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/satyam-sinha1
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub icon"
            />
            <a
              href="https://github.com/Satyam123678"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Satyam123678
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
