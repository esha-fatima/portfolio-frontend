import React, { useState, useEffect } from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import contactImage from "../../assets/contact.png";
import { BiSend } from "react-icons/bi";
import { ImSad } from "react-icons/im";
import { FaRegSmileBeam } from "react-icons/fa";
import axios from "axios";
import { getConstantValue } from "typescript";
import { Loading } from "react-loading-dot";

export default function Contact() {
  const [nameInput, onChangeNameInput] = useState("");
  const [emailInput, onchangeEmailInput] = useState("");
  const [workInput, onChangeWorkInput] = useState("");
  const [messageInput, onChangeMessageInput] = useState("");
  const [isSent, setIsSent] = useState("send");

  async function runTimer() {
    // Use a Promise to wrap setTimeout
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    // Set the timer duration (in milliseconds)
    const timerDuration = 3000; // 3 seconds

    // Wait for the timer to expire
    await delay(timerDuration);

    setIsSent("send");
  }

  const getSend = () => {
    return (
      <div className={styles.sendContainer}>
        <div
          onClick={() => {
            setIsSent("sending");
            const dataToSend = {
              name: nameInput,
              email: emailInput,
              work: workInput,
              message: messageInput,
            };
            //sendEmail();
            const response = axios
              .post(
                "https://portfolio-backend-uzko.onrender.com/send-email",
                dataToSend
              )
              .then((r: any) => {
                console.log("succes response is", r);
                setIsSent("sent");
                //timeouttttttt and set it to send again
              })
              .catch((e: any) => {
                console.log("yooo");
                console.log("error is ", e);
                setIsSent("error");
                //timeoutt and thennnnnnnnnn change it to send again
              });
          }}
          className={styles.sendButton}
        >
          <span className={styles.sendText}>Send</span>
          <BiSend size={20} />
        </div>
      </div>
    );
  };

  const getSent = () => {
    return (
      <div className={styles.sendContainer}>
        <div className={styles.sentButton}>
          <span className={styles.sendText}>Sent!</span>
          <FaRegSmileBeam size={20} />
        </div>
      </div>
    );
  };

  const getError = () => {
    return (
      <div className={styles.sendContainer}>
        <div className={styles.sentButton}>
          <span className={styles.sendText}>Oops! Please try again</span>
          <ImSad size={20} />
        </div>
      </div>
    );
  };

  const getLoading = () => {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.bouncingLoader}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  };

  const getAction = () => {
    if (isSent === "send") {
      return getSend();
    }

    if (isSent === "sent") {
      runTimer();
      return getSent();
    }

    if (isSent === "sending") {
      return getLoading();
    }

    if (isSent === "error") {
      runTimer();
      return getError();
    }
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactSide}>
        <div className={styles.nameContainer}>
          {" "}
          <div className={styles.nameHeading}>Name</div>
          <input
            value={nameInput}
            onChange={(e: any) => {
              onChangeNameInput(e.target.value);
            }}
            placeholder="Your name here..."
            className={styles.inputFieldsWorkplace}
          ></input>
        </div>
        <div className={`${styles.nameContainer} ${styles.marginClass}`}>
          <div className={styles.nameHeading}>Email</div>
          <input
            value={emailInput}
            onChange={(e: any) => {
              onchangeEmailInput(e.target.value);
            }}
            placeholder="Your email here..."
            className={styles.inputFieldsWorkplace}
          ></input>
        </div>

        <div className={`${styles.nameContainer} ${styles.marginClass}`}>
          <div className={styles.nameHeading}>Work</div>
          <input
            value={workInput}
            onChange={(e: any) => {
              onChangeWorkInput(e.target.value);
            }}
            placeholder="Your work here..."
            className={`${styles.inputFieldsWorkplace} ${styles.workplaceWidth}`}
          ></input>
        </div>
        <div className={`${styles.nameContainer} ${styles.marginClass}`}>
          <div className={styles.nameHeading}>Message</div>
          <textarea
            value={messageInput}
            onChange={(e: any) => {
              onChangeMessageInput(e.target.value);
            }}
            placeholder="Your message here..."
            className={styles.textArea}
          ></textarea>
        </div>
        {getAction()}
      </div>
      <div className={styles.imageSide}>
        <Image
          src={contactImage}
          className={styles.imageStyles}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
