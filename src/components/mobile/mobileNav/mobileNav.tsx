"use client";
import styles from "./mobileNav.module.css";
import React, { useState, useEffect } from "react";
import { Slant as Hamburger } from "hamburger-react";
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialGithub,
} from "react-icons/ti";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";

interface mobileNavProps {
  isScrollingUp: boolean;
  toggleSelection: (newSelection: string) => void;
  setIsNavOn: (newState: boolean) => void;
  currentSection: string;
}

export default function MobileNav({
  isScrollingUp = false,
  toggleSelection,
  setIsNavOn,
  currentSection = "about",
}: mobileNavProps) {
  const [isToggled, setIsToggled] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  //const [selected, setSelected] = useState("about");
  const NAV_HEIGHT = 80;

  useEffect(() => {
    const menuHeight = window.innerHeight - NAV_HEIGHT;
    setMenuHeight(menuHeight);
    //setSelected(currentSection)
  }, []);

  const renderNav = () => {
    const showNav = isToggled || isScrollingUp;
    if (showNav) {
      return (
        <div className={styles.mobileNavWrapper}>
          {isToggled && (
            <div
              // style={{ height: `${menuHeight}px` }}
              className={styles.menuOptions}
            >
              <div
                onClick={() => {
                  toggleSelection("about");
                }}
                className={`${
                  currentSection === "About"
                    ? styles.menuOptionsContainer
                    : styles.menuOptionsContainerSelected
                }`}
              >
                {" "}
                About{" "}
              </div>
              <hr
                className={`${
                  currentSection === "About"
                    ? styles.selectedRule
                    : styles.unselectedRule
                }`}
              ></hr>
              <div
                onClick={() => {
                  toggleSelection("work");
                }}
                className={`${
                  currentSection === "Work"
                    ? styles.menuOptionsContainer
                    : styles.menuOptionsContainerSelected
                }`}
              >
                {" "}
                Work{" "}
              </div>
              <hr
                className={`${
                  currentSection === "Work"
                    ? styles.selectedRule
                    : styles.unselectedRule
                }`}
              ></hr>
              <div
                onClick={() => {
                  toggleSelection("projects");
                }}
                className={`${
                  currentSection === "Projects"
                    ? styles.menuOptionsContainer
                    : styles.menuOptionsContainerSelected
                }`}
              >
                {" "}
                Projects{" "}
              </div>
              <hr
                className={`${
                  currentSection === "Projects"
                    ? styles.selectedRule
                    : styles.unselectedRule
                }`}
              ></hr>
              <div
                onClick={() => {
                  toggleSelection("contact");
                }}
                className={`${
                  currentSection === "Contact"
                    ? styles.menuOptionsContainer
                    : styles.menuOptionsContainerSelected
                }`}
              >
                {" "}
                Contact{" "}
              </div>
              <hr
                className={`${
                  currentSection === "Contact"
                    ? styles.selectedRule
                    : styles.unselectedRule
                }`}
              ></hr>
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
          )}
          <div className={styles.hamburgerIcon}>
            <Hamburger
              size={20}
              toggled={isToggled}
              onToggle={() => {
                setIsNavOn(!isToggled);
                setIsToggled(!isToggled);
              }}
            />
          </div>
          <div className={styles.rightSideNav}>
            <LuLayoutDashboard style={{ marginRight: "20px" }} size={27} />
            {currentSection}
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };

  return <>{renderNav()}</>;
}
