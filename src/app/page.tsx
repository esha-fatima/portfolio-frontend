"use client";
import styles from "./page.module.css";
import Nav from "@/components/nav/nav";
import About from "@/components/about/about";
import Work from "@/components/work/work";
import Mobile from "@/components/mobile/mobile";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>("about");
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [workSection, setWorkSection] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      console.log("here");
      if (window.innerWidth < 1010) {
        setIsScreenSmall(true);
      } else {
        setIsScreenSmall(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {};
  }, []);

  const renderSection = () => {
    if (currentSection === "about") {
      return (
        <div className={styles.aboutContent}>
          <About />
        </div>
      );
    }

    if (currentSection === "projects") {
      return (
        <div className={` ${styles.projectsContent}`}>
          <Projects />
        </div>
      );
    }

    if (currentSection === "work") {
      return (
        <div
          className={
            workSection === 0
              ? styles.workContentTerminating
              : styles.workContent
          }
        >
          <Work updateCurrentSection={setWorkSection} />
        </div>
      );
    }

    if (currentSection === "contact") {
      return (
        <div className={` ${styles.contactContent}`}>
          <Contact />
        </div>
      );
    }
  };

  function renderByWidth() {
    if (isScreenSmall) {
      console.log("returning nothing");
      return (
        <>
          <Mobile />
        </>
      );
    } else {
      return getDesktopContent();
    }
  }

  function getDesktopContent() {
    return (
      <>
        <div className={styles.custom}>
          <Nav onButtonClick={setCurrentSection} selected={currentSection} />
          {renderSection()}
          <div className={`${styles.waveWrapper} ${styles.waveAnimation}`}>
            <div className={`${styles.waveWrapperInner} ${styles.bgTop}`}>
              <div
                className={`${styles.wave} ${styles.waveTop}`}
                style={{
                  background: `url('http://front-end-noobs.com/jecko/img/wave-top.png')`,
                }}
              ></div>
            </div>
            <div className={`${styles.waveWrapperInner} ${styles.bgMiddle}`}>
              <div
                className={`${styles.wave} ${styles.waveMiddle}`}
                style={{
                  backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-mid.png')`,
                }}
              ></div>
            </div>
            <div className={`${styles.waveWrapperInner} ${styles.bgBottom}`}>
              <div
                className={`${styles.wave} ${styles.waveBottom}`}
                style={{
                  backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-bot.png')`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return renderByWidth();
}
