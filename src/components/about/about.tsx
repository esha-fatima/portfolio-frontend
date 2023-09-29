import styles from "./about.module.css";
import EshaImage from "../../assets/amaze2.png";
import linkedinImage from "../../assets/linkedin.png";
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialGithub,
} from "react-icons/ti";
import { MdAlternateEmail } from "react-icons/md";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.photoWrapper}>
        <Image
          src={EshaImage}
          width={630}
          height={370}
          alt="Picture of the author"
        />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.nameWrapper}>
          <h1 style={{ textShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)" }}>
            I am Esha.
          </h1>
        </div>
        <div className={styles.contentWrapper}>
          <h1>
            A research enthusiast and a passionate software engineer from
            Pakistan.
          </h1>
        </div>
        <div>
          {
            <p className={styles.textSyle}>
              Be it experimenting with compiler optimisations and
              approximations, or developing real-world apps, I have explored a
              breadth of arenas as a Computer Science Graduate of '23 from the
              Lahore University of Management Sciences (LUMS).
            </p>
          }
          <div className={styles.iconContainer}>
            <div
              onClick={() => {
                window.open(
                  `https://www.linkedin.com/in/esha-fatima`,
                  "_blank"
                );
              }}
              className={styles.iconStyle}
            >
              <TiSocialLinkedin size={40} />
            </div>
            <div
              onClick={() => {
                window.open(
                  `https://m.facebook.com/people/Esha-Fatima/100036558322923/`,
                  "_blank"
                );
              }}
              className={styles.iconStyle}
            >
              <TiSocialFacebook size={40} />
            </div>
            <div
              onClick={() => {
                window.open(`https://github.com/esha-fatima`, "_blank");
              }}
              className={styles.iconStyle}
            >
              <TiSocialGithub size={40} />
            </div>
            <div
              onClick={() => {
                const emailAddress = "eshafatima2001@gmail.com";

                // Create a mailto link and trigger it
                const mailtoLink = document.createElement("a");
                mailtoLink.href = "mailto:" + emailAddress;
                mailtoLink.click();
              }}
              className={styles.iconStyle}
            >
              <MdAlternateEmail size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
