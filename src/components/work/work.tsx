"use client";
import styles from "./work.module.css";
import React from "react";
import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import pmwImage from "../../assets/pmw.png";
import lumsImage from "../../assets/lums.jpeg";
import educativeImage from "../../assets/educative.png";
import transformxImage from "../../assets/transformx.jpeg";

import Image from "next/image";

interface WorkProps {
  updateCurrentSection: (newSection: number) => void;
}

const zeroWidth = {
  width: "0",
};

export default function Work({ updateCurrentSection }: WorkProps) {
  const [currentSection, setCurrentSection] = useState(0);

  const workPlaceLinks = [
    "https://www.postermywall.com/",
    "https://sbasse.lums.edu.pk/research-streams-sbasse",
    "https://www.c-salt.org/home",
    "https://drive.google.com/file/d/19Z1FV1TnXQ9w0bdakn-vUdqiyrR0qKMI/view?usp=sharing",
    "https://drive.google.com/file/d/1HxlVAEKarx4xPDgWUeezQqb6MQhYRC4t/view?usp=sharing",
    "https://www.educative.io/",
    "https://drive.google.com/drive/folders/1m8L9E9aPp8DGUs7Hg9Q1S5nx0tTdSacn?usp=sharing",
    "https://www.transformx.io/",
  ];

  const workTitles = [
    "Software Engineer",
    "Research Assistant",
    "Research Assistant",
    "Teaching Assistant",
    "Teaching Assistant",
    "Answers Intern",
    "Teaching Assistant",
    "Analytical Development Intern",
  ];
  const workplaceTitles = [
    "PosterMyWall",
    "SYSNET, LUMS",
    "CSALT Lab, LUMS",
    "Operating Systems, LUMS",
    "Advanced Programming, LUMS",
    "Educative inc.",
    "Fundamentals of Systems, LUMS",
    "TransformX",
  ];
  const workplaceImages = [
    pmwImage,
    lumsImage,
    lumsImage,
    lumsImage,
    lumsImage,
    educativeImage,
    lumsImage,
    transformxImage,
  ];
  const workplaceAbout = [
    <>
      <b>PosterMyWall</b> is a versatile online platform that empowers users to
      design, customize, and market a wide range of graphics, posters, and
      flyers effortlessly.
    </>,
    <>
      The <b>SYSNET Lab </b> works on a range of energy sustaining solutions to
      enhance tech-applicability in the constrained environment of gadgets.
    </>,
    <>
      The <b>CSALT </b>Lab aims to contribute towards speech and linguistic
      research centric to developing regions and deploy these to bridge the
      literacy gaps.
    </>,
    <>
      <b>Operating Systems </b> is a core CS-major course that imperatively
      focuses on principles such as program scheduling, memory management, and
      file systems.
    </>,
    <>
      <b>Advanced Programming</b> is a core CS-major course focusing on coarse
      programming concepts, including functional and asynchronous programming.
    </>,
    <>
      <b>Educative </b>is an interactive online learning platform for acquiring
      in-demand coding and programming skills through hands-on coding exercises
      and engaging tutorials.
    </>,
    <>
      <b>Fundamentals of Computer Systems </b> is a core CS-major course
      focusing on assembly level program flow with a focus on x-86 and x-32
      architectures.
    </>,
    <>
      <b>TransformX </b>is a platform that offers technological solutions and
      services to help businesses streamline their operations and enhance
      digital experiences.
    </>,
  ];
  const workplacePoints = [
    <ul className={styles.workplaceList}>
      <li className={styles.listItem}>
        Work majorly on the development of Premium features for the
        product. These include customized email publishing options, managing and
        analyzing email campaign metrics, across-the-board social media
        publishing, and collaborative spaces for teams.
      </li>
      <br />
      <li className={styles.listItem}>
        Create UI components in ReactTS that comply with the underlying design
        handoffs and in-house Design System specifications.
      </li>
      <br />
      <li className={styles.listItem}>
        Resolve out bugs and refactor legacy code to ensure codebase
        readability and scalability.
      </li>
    </ul>,

    <ul className={styles.workplaceList}>
      <li className={styles.listItem}>
        Worked in the assembling and development of an Approximate Computing
        Framework and retrieval of error bounds during intermittent computing in
        energy restraint IoT devices.
      </li>
      <br />
      <li className={styles.listItem}>
        Implemented approximation techniques over LLVM passes and added support
        for user-level annotations (using Clang) that can be intercepted for
        approximations at compile time.
      </li>
      <br />
      <li className={styles.listItem}>
        Conducted a usability testing session with students to evaluate our
        framework's approximation utiity in the context of metrics such as
        developer ease, lines of code, runtime and memory usage.
      </li>
    </ul>,

    <ul className={styles.workplaceList}>
      <li className={styles.listItem}>
        Worked on the usage of technology for linguistic learning in the context
        of South Asian languages for the development of Kahaani application - an
        Urdu Audiobook Reader with an in-house TTS system and Urdu library.
      </li>
      <br />
      <li className={styles.listItem}>
        Led the design and development with an emphasis on interfaces,
        story-telling proceedings, and interactive features for an ed-tech
        application matching the mental model of primary school students.
      </li>
      <br />
      <li className={styles.listItem}>
        Conducted the usability testing, gathered metrics - i.e., TTS player
        options usage, count of students who typed within the TTS vs. those who
        chose to copy and paste, etc. - for students segmented based on tech
        familiarity and Urdu skills at base.
      </li>
    </ul>,

    <ul className={styles.workplaceList}>
      <li className={styles.listItem}>
        Led on a student project involving the creation of a basic UNIX-shell
        with an additional custom directive that could chain pipe operations
        over commands stored in a tree structure.
      </li>
      <br />
      <li className={styles.listItem}>
        Conducted relevant tutorials for the student project to facilitate
        students (in a class of 160+).
      </li>
      <br />
      <li className={styles.listItem}>
        Graded and invigilated exams and assignments in a timely manner
        compliant with the regular grade submission deadlines for every graded
        component.
      </li>
    </ul>,

    <ul className={styles.workplaceList}>
      <li className={styles.listItem}>
        Collaborated in preparing exams, homework, and assignments for the
        course for its three modules: Functional programming in Haskell,
        asynchronous programming in Javascript, and MERN stack development.
      </li>
      <br />
      <li className={styles.listItem}>
        Facilitated students (in a class of 160+) with assignments by keeping
        regular office hours, tutorials, and sharing programming resources
        recommended for the assignments.
      </li>
      <br />
      <li className={styles.listItem}>
        Invigilated and graded three intensive lab exams, each being a 4-5
        hour-long slot per module (Haskell module, Javascript module, and MERN
        stack module)
      </li>
    </ul>,

    <ul className={styles.workplaceList}>
      <li className={styles.listItem}>
        Contributed to the technical content within Educative's signature
        Answers Portal, focusing on technical concepts across significant fields
        such as Deep Learning, Software Engineering, Data Structures, and
        Algorithms.
      </li>
      <br />
      <li className={styles.listItem}>
        Curated concise blog posts with interactive illustrations and slideshows
        to deliver the technical answer for each topic and peer-reviewed blogs
        before being approved for publishing.
      </li>
      <br />
      <li className={styles.listItem}>
        Participated in writing workshops focused on linguistic style, tone, and
        appropriate language while writing for students who might need to be
        better-versed with technically profound concepts.
      </li>
    </ul>,

    <ul className={styles.workplaceList}>
      <li className={styles.listItem}>
        Brainstormed and devised exams, weekly quizzes, and assignment tutorials
        for the course (class of 90+).
      </li>
      <br />
      <li className={styles.listItem}>
        Devised questions testing assembly-level instruction flow to predict
        program outcomes and modify instructions to recreate a desired result.
      </li>
      <br />
      <li className={styles.listItem}>
        Created marking schemes and conducted regular office hours to ensure a
        close point of communication as this course fell into the COVID period.
      </li>
    </ul>,

    <ul className={styles.workplaceList}>
      <li className={styles.listItem}>
        Researched analytical data about popular CPaaS vendors and built a
        preview portal allowing users to compare and contrast different vendor
        options for TransformX's integration service.
      </li>
      <br />
      <li className={styles.listItem}>
        Developed a portal for users to add reviews for various vendors that
        would be aggregated to generate an overall vendor rating.
      </li>
      <br />
      <li className={styles.listItem}>
        Devised a recommendation metric for CPaaS vendors - a match score
        generated given a user profile against a CpaaS vendor profile.
      </li>
    </ul>,
  ];
  const workplacePills = [
    <>
      <div className={styles.skillPillOne}>React</div>
      <div className={styles.skillPillTwo}>Typescript</div>
      <div className={styles.skillPillThree}>PHP</div>
    </>,

    <>
      <div className={styles.skillPillOne}>LLVM</div>
      <div className={styles.skillPillTwo}>Approximation techniques</div>
      <div className={styles.skillPillThree}>Error analysis</div>
    </>,

    <>
      <div className={styles.skillPillOne}>Design</div>
      <div className={styles.skillPillTwo}>Usability Testing</div>
      <div className={styles.skillPillThree}>ML</div>
    </>,

    <>
      <div className={styles.skillPillOne}>Scripting</div>
      <div className={styles.skillPillTwo}>Operating Systems</div>
      <div className={styles.skillPillThree}>Mentoring</div>
    </>,

    <>
      <div className={styles.skillPillOne}>Programming</div>
      <div className={styles.skillPillTwo}>Grading</div>
      <div className={styles.skillPillThree}>Communication</div>
    </>,
    <>
      <div className={styles.skillPillOne}>Technical Writing</div>
      <div className={styles.skillPillTwo}>Collaboration</div>
      <div className={styles.skillPillThree}>Research</div>
    </>,
    <>
      <div className={styles.skillPillOne}>Assembly</div>
      <div className={styles.skillPillTwo}>Teaching</div>
      <div className={styles.skillPillThree}>Support</div>
    </>,
    <>
      <div className={styles.skillPillOne}>Analysis</div>
      <div className={styles.skillPillTwo}>Product Research</div>
      <div className={styles.skillPillThree}>CRM</div>
    </>,
  ];

  const onClickNext = () => {
    setCurrentSection(Math.min(currentSection + 1, 7));
  };

  const onClickPrevious = () => {
    setCurrentSection(Math.max(currentSection - 1, 0));
  };

  const renderTiles = () => {
    const tiles = [];
    return (
      <div className={styles.sectionWrapper}>
        <div className={styles.workItemWrapper}>
          <div className={styles.workTitle}>
            <h1>{workTitles[currentSection]}</h1>
          </div>
          <div className={styles.workplaceTitle}>
            <h1>{workplaceTitles[currentSection]}</h1>
            <div className={styles.pillContainer}>
              {workplacePills[currentSection]}
            </div>
          </div>
          <div className={styles.workplaceContent}>
            <div className={`${styles.flipContainer} ${styles.workplaceImage}`}>
              <div className={`${styles.flipper} ${styles.innerImage}`}>
                <Image
                  className={`${styles.front} ${styles.imageStyles}`}
                  src={workplaceImages[currentSection]}
                  width={185}
                  height={185}
                  alt="Picture of the author"
                />
                <div className={`${styles.backText} ${styles.back}`}>
                  <p className={styles.companyAbout}>
                    {workplaceAbout[currentSection]}
                  </p>
                  <div
                    onClick={() => {
                      window.open(
                        `${workPlaceLinks[currentSection]}`,
                        "_blank"
                      );
                    }}
                    className={styles.companyLinkContainer}
                  >
                    <FiArrowRight className={styles.companyLink} size={25} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.workplaceRight}>
              {workplacePoints[currentSection]}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getClassesForNext = (): string => {
    if (currentSection === 7) {
      return `${styles.arrow} ${styles.next} ${styles.disabled}`;
    }
    return `${styles.arrow} ${styles.next} `;
  };

  const getClassesForPrevious = (): string => {
    if (currentSection === 0) {
      return `${styles.arrow} ${styles.prev} ${styles.disabled}`;
    }
    return `${styles.arrow} ${styles.prev} `;
  };

  return (
    <>
      <a
        href="#"
        onClick={() => onClickPrevious()}
        title="End"
        className={`${getClassesForPrevious()}`}
      >
        next
      </a>
      {renderTiles()}
      <a
        href="#"
        onClick={() => onClickNext()}
        title="End"
        className={`${getClassesForNext()}`}
      >
        next
      </a>
    </>
  );
}
