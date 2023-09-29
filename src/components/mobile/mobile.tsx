"use client";
import styles from "./mobile.module.css";
import React, { useState, useEffect } from "react";
import MobileNav from "./mobileNav/mobileNav";
import Image from "next/image";
import EshaImage from "../../assets/amazemobile.png";
import { useSwipeable } from "react-swipeable";
import pmwImage from "../../assets/pmw.png";
import lumsImage from "../../assets/lums.jpeg";
import educativeImage from "../../assets/educative.png";
import transformxImage from "../../assets/transformx.jpeg";
import { FiArrowRight } from "react-icons/fi";
import { TfiMoreAlt } from "react-icons/tfi";
import { TbListDetails } from "react-icons/tb";
import kahaaniThumbnail from "../../assets/kahaaniThumbnail.png";
import llvm from "../../assets/llvm.jpg";
import choka from "../../assets/choka.jpeg";
import ML from "../../assets/ML.jpeg";
import RAFT from "../../assets/RAFT.png";
import restaurant from "../../assets/restaurant.jpg";
import { IoMdArrowBack, IoMdClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import contactImage from "../../assets/contact.png";
import axios from "axios";
import { BiSend } from "react-icons/bi";
import { FaRegSmileBeam } from "react-icons/fa";
import { ImSad } from "react-icons/im";

export default function Mobile() {
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

  const mobileWorkplaceHighlights = [
    <>
      Software Engineer at{" "}
      <span
        onClick={() => {
          window.open(`${workPlaceLinks[currentMainWork]}`, "_blank");
        }}
        className={styles.workplaceLink}
      >
        PosterMyWall
      </span>
    </>,
    <>
      RA -{" "}
      <span
        onClick={() => {
          window.open(`${workPlaceLinks[currentMainWork]}`, "_blank");
        }}
        className={styles.workplaceLink}
      >
        SYSNet Lab
      </span>{" "}
      at LUMS
    </>,
    <>
      RA -{" "}
      <span
        onClick={() => {
          window.open(`${workPlaceLinks[currentMainWork]}`, "_blank");
        }}
        className={styles.workplaceLink}
      >
        CSLAT Lab{" "}
      </span>{" "}
      at LUMS
    </>,
    <>
      TA -{" "}
      <span
        onClick={() => {
          window.open(`${workPlaceLinks[currentMainWork]}`, "_blank");
        }}
        className={styles.workplaceLink}
      >
        {" "}
        Operating Systems{" "}
      </span>
      at LUMS
    </>,
    <>
      TA -{" "}
      <span
        onClick={() => {
          window.open(`${workPlaceLinks[currentMainWork]}`, "_blank");
        }}
        className={styles.workplaceLink}
      >
        Advanced Programming{" "}
      </span>{" "}
      at LUMS
    </>,
    <>
      Technical Content Intern at{" "}
      <span
        onClick={() => {
          window.open(`${workPlaceLinks[currentMainWork]}`, "_blank");
        }}
        className={styles.workplaceLink}
      >
        Educative
      </span>
    </>,
    <>
      TA -{" "}
      <span
        onClick={() => {
          window.open(`${workPlaceLinks[currentMainWork]}`, "_blank");
        }}
        className={styles.workplaceLink}
      >
        Fundamentals of Computer Systems{" "}
      </span>{" "}
      at LUMS
    </>,
    <>
      Analytical Development Intern at{" "}
      <span
        onClick={() => {
          window.open(`${workPlaceLinks[currentMainWork]}`, "_blank");
        }}
        className={styles.workplaceLink}
      >
        TranformX{" "}
      </span>
    </>,
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
        Worked explicitly on the development of Premium features for the
        product. These include customized email publishing options, managing and
        analyzing email campaign metrics, across-the-board social media
        publishing, and collaborative spaces for teams.
      </li>
      <br />
      <li className={styles.listItem}>
        Created UI components in ReactTS that comply with the underlying design
        handoffs and in-house Design System specifications.
      </li>
      <br />
      <li className={styles.listItem}>
        Resolved out bugs and refactor legacy code to ensure codebase
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
        students (in a class of 160+) with the student project.
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
      <div className={styles.skillPillTwo}>Approximation</div>
      <div className={styles.skillPillThree}>Analysis</div>
    </>,

    <>
      <div className={styles.skillPillTwo}>Usability Testing</div>
      <div className={styles.skillPillThree}>ML</div>
    </>,

    <>
      <div className={styles.skillPillOne}>Scripting</div>
      <div className={styles.skillPillTwo}>OS</div>
      <div className={styles.skillPillThree}>Mentoring</div>
    </>,

    <>
      <div className={styles.skillPillOne}>Programming</div>
      <div className={styles.skillPillTwo}>Grading</div>
    </>,
    <>
      <div className={styles.skillPillOne}>Technical Writing</div>
      <div className={styles.skillPillThree}>Research</div>
    </>,
    <>
      <div className={styles.skillPillOne}>Assembly</div>
      <div className={styles.skillPillTwo}>Teaching</div>
    </>,
    <>
      <div className={styles.skillPillTwo}>Product Research</div>
      <div className={styles.skillPillThree}>CRM</div>
    </>,
  ];
  const projectTitles = [
    "Kahaani",
    "Intermittent Approximate Computing",
    "Key Value Server - RAFT Consensus",
    "Choka.com",
    "Sentiment Analysis - Naive Baye's",
    "Restaurant Management System",
  ];
  const projectIntros = [
    <>
      <b>Kahaani</b> is an application built upon an in-house Urdu
      Text-to-Speech (TTS) system developed at the CSALT lab. The application is
      an educational supplement that evaluates usability and adherence to design
      principles. It offers features that allow users to read books from our
      digital library, accompanied by word highlighting synchronized with the
      audio. My work focuses on three significant participles of the application
      -
    </>,
    <>
      This project focuses on a unique intersection between IoT applications and
      how we can benefit from approximate computing techniques in
      energy-constrained environments. Mainly, the scope of work is divided into
      two streams <b>a-</b> Implementation of a framework that allows
      programmers to add annotations in source code. These annotations are then
      detected within our framework <b>(built over LLVM passes)</b>, and the
      instructions are appropriately changed to match the user-annotated
      approximation required. <b>b-</b> Using our platform to assess its
      usability for programmers and report error bounds introduced as a result
      of our approximations - focused towards energy-restrained IoT devices that
      are prone to failures.
    </>,
    <>
      The underlying system of servers was wired up in a distributed environment
      with susceptibility to{" "}
      <b>
        partition, nodes failing, and stale values being transmitted between
        nodes coming alive after failure
      </b>
      . The key-value server guarantees linearizability, safety of logs
      committed on the state machine, and single leader guarantee. RAFT
      algorithm was implemented in GoLang to produce such a consistent system
      that when provided a maximum of (N-1)/2 failures, the system would ensure
      consistency.
    </>,
    <>
      <b>Choka</b> was developed to provide a matchmaking platform between
      tutors (part-time and full-time) and students requiring additional
      academic help. The application profiled tutors with information such as
      demographics, area of expertise, and mode of services (online or
      in-person). Similarly, the students were profiled to fill in their
      requirements and the nature of the subjects they needed assistance with.
    </>,
    <>
      The sentiment analysis tool used a{" "}
      <b> Naive Bayes classification model </b>
      trained and implemented from scratch in Python to classify a movie review
      as positive or negative. The implementation comprises 3 phases: <b>a-</b>
      cleaning, tokenization, and lemmatization of data, b- training the data,
      <b>c- </b> testing the model. The model reported an overall{" "}
      <b>accuracy of 83.5% and an F1 score of 83%</b> in an attempt to classify
      24,801 test samples.
    </>,
  ];

  const projectImages = [kahaaniThumbnail, llvm, RAFT, choka, ML, restaurant];

  const projContributions = [
    <>
      <br />
      <ul className={styles.projectDetailsList}>
        <li className={styles.projectDetailsListItem}>
          Creating interfaces and prototypes for the application backed by
          extensive UI/UX research given the target market being an educational
          setting involving a range of students between juniors and high
          schoolers. My work took into account the semantic differences in the
          students’ aversiveness to technology, skills in Urdu language and the
          general scarcity of online texts in South Asian languages.
          Additionally with the significant importance of story-telling elements
          in linguistic learning, I wired up different stages of interfaces for
          our research use-case.
        </li>
        <li className={styles.projectDetailsListItem}>
          Analyzed and performed an end-to-end usability testing of our first
          cycle of deployment. My strategy for testing drew results from the
          participants’ recorded responses to controlled prompts, uncontrolled
          prompts, and testing metrics in the context of our application. I
          segmented our participants into combinations of 3 dimensions (age,
          technology aversiveness and comfort with Urdu) to ensure deriving fair
          analyses. Past the usability testing, I used our results to draw user
          facing feedback, implications and the mapping of our interfaces with
          the HCI design principles.
        </li>
        <li className={styles.projectDetailsListItem}>
          Expanding our use-case to include gamification, collaborative features
          some of which include allowing contributors to add to our digital
          library and inclusion of chatbots. I am overlooking the UI/UX design,
          development and usability testing for this round of expansion that is
          targeted for a publication. This use case will lay fundamental grounds
          for ML for Education focused in South Asian languages.
        </li>
      </ul>
    </>,
    <>
      <br />
      <ul className={styles.projectDetailsList}>
        <li className={styles.projectDetailsListItem}>
          At the framework level, my contribution includes implementing a system
          of annotations within C code that makes available the user annotations
          and annotated entities within <b>LLVM passes </b>at IR level.
          Additionally, I implemented several approximate computing LLVM passes:
          a<b> loop-perforation pass </b>that increments an annotated loop’s
          inductive variable by a certain annotated amount; a{" "}
          <b> function skipping pass </b> that skips every nth function call
          where n is the user-annotated variable; a<b> smoothing pass </b>that
          clusters constant-initialized integers based on Euclidean distance
          proximity - it uses each cluster mean to initialize the corresponding
          variables with its respective cluster mean, accordingly replace all
          usages and removes unused variables.
        </li>
        <li className={styles.projectDetailsListItem}>
          At the use case level, my contribution includes implementing{" "}
          <b> error propagation techniques </b> that quantify an error bound due
          to net approximations implemented via our framework. This is done by
          gathering all instruction level error bounds and their usage within
          different areas of the program. Altogether, this allows researchers to
          derive error bounds as a result of approximations and make a
          numerically backed decision in a tradeoff between energy availability
          and accuracy. Our project is targeted towards a publication that shall
          empirically contribute to research focusing on
        </li>
      </ul>
    </>,
    <>
      <br />
      <ul className={styles.projectDetailsList}>
        <li className={styles.projectDetailsListItem}>
          Ensured leader election between nodes such that they agree to leader
          after requiring a quorum of (N/2) + 1 votes. The leader election
          module is scalable and applicable to electing a leader when the nodes
          come alive at the beginning, or when any node does not receive a
          heartbeat ping from the leader. It is ensured that at most, one leader
          is elected per term. Additionally, whenever an elected leader receives
          a ping from a node with a higher term, it demotes itself to a follower
          so that the node with the latest term is mounted as the leader always.
        </li>
        <li className={styles.projectDetailsListItem}>
          Ensured log completeness and consistency using persistent state and
          volatile state on all servers. The persistent storage is configured to
          store the latest term, and log whereas the volatile state keeps track
          of the latest log entry index written toi state machine and the latest
          log entry index committed. The leader keeps track of the next index of
          logs that need to be sent to ensure consistency for each of the
          followers.
        </li>
      </ul>
    </>,
    <>
      <br />
      <ul className={styles.projectDetailsList}>
        <li className={styles.projectDetailsListItem}>
          Implemented a review and rating system for tutors that helped raise
          their profiles’ credibility and provided a metric for choosing tutors
          for students. Additionally, the profiling information was stored to
          produce an aggregated metric for a match score between tutors and
          students.
        </li>
        <li className={styles.projectDetailsListItem}>
          Implemented convenience features given the demands coming from COVID
          times, such as the creation of online, timed assessments that are
          turned in by the students and further propagated to the tutor for
          grading.
        </li>
      </ul>
    </>,
    <>
      <br />
      <ul className={styles.projectDetailsList}>
        <li className={styles.projectDetailsListItem}>
          The dataset was first segmented to contain an equal number of positive
          and negative reviews to prevent training bias. Sequentially, stop
          words were removed and a vocabulary for all the words in the dataset
          was constructed. Each of the review documents were vectorized via
          1-hot encoding.
        </li>
        <li className={styles.projectDetailsListItem}>
          Using the vectorized tokens for the documents, the conditional
          probabilities are used to attain the likelihood for each test point
          belonging to a certain class of which the class with higher likelihood
          forms the result of the classifier.
        </li>
      </ul>
    </>,
    <>
      <br />
      <ul className={styles.projectDetailsList}>
        <li className={styles.projectDetailsListItem}>
          Creating interfaces and prototypes for the application backed by
          extensive UI/UX research given the target market being an educational
          setting involving a range of students between juniors and high
          schoolers. My work took into account the semantic differences in the
          students’ aversiveness to technology, skills in Urdu language and the
          general scarcity of online texts in South Asian languages.
          Additionally with the significant importance of story-telling elements
          in linguistic learning, I wired up different stages of interfaces for
          our research use-case.
        </li>
        <li className={styles.projectDetailsListItem}>
          Analyzed and performed an end-to-end usability testing of our first
          cycle of deployment. My strategy for testing drew results from the
          participants’ recorded responses to controlled prompts, uncontrolled
          prompts, and testing metrics in the context of our application. I
          segmented our participants into combinations of 3 dimensions (age,
          technology aversiveness and comfort with Urdu) to ensure deriving fair
          analyses. Past the usability testing, I used our results to draw user
          facing feedback, implications and the mapping of our interfaces with
          the HCI design principles.
        </li>
        <li className={styles.projectDetailsListItem}>
          Expanding our use-case to include gamification, collaborative features
          some of which include allowing contributors to add to our digital
          library and inclusion of chatbots. I am overlooking the UI/UX design,
          development and usability testing for this round of expansion that is
          targeted for a publication. This use case will lay fundamental grounds
          for ML for Education focused in South Asian languages.
        </li>
      </ul>
    </>,
  ];

  const [currentSelection, setCurrentSelection] = useState("about");
  const [currentMainWork, setCurrentMainWork] = useState(0);
  const [isNavOn, setIsNavOn] = useState(false);
  const [isSectionSelected, setIsSectionSelected] = useState(false);
  const [currentProjSelected, setCurrentProjSelected] = useState(-1);
  const [currentNavSelection, setCurrentNavSelection] = useState("About");
  const [nameInput, onChangeNameInput] = useState("");
  const [emailInput, onchangeEmailInput] = useState("");
  const [workInput, onChangeWorkInput] = useState("");
  const [messageInput, onChangeMessageInput] = useState("");
  const [isSent, setIsSent] = useState("send");

  const changeSelection = (newSelection: string) => {
    setCurrentSelection(newSelection);
  };

  useEffect(() => {
    const workStart = document.getElementById("workStart");
    const workEnd = document.getElementById("workEnd");
    const windowScroll = window.scrollY + 300;
    const contactEnd = document.getElementById("contactEnd");
    const contactStart = document.getElementById("contactStart");

    if (currentSelection === "about") {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: Add smooth scrolling behavior
      });
    }

    if (currentSelection === "work") {
      if (workStart?.offsetTop) {
        const scrollPosition = workStart?.offsetTop - 200;
        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth", // Optional: Add smooth scrolling behavior
        });
      }
    }

    if (currentSelection === "projects") {
      const scrollPosition = workEnd?.offsetTop;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth", // Optional: Add smooth scrolling behavior
      });
    }

    if (currentSelection === "contact") {
      const scrollPosition = contactStart?.offsetTop;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth", // Optional: Add smooth scrolling behavior
      });
    }

    setIsNavOn(false);
  }, [currentSelection]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const workStart = document.getElementById("workStart");
      const workEnd = document.getElementById("workEnd");
      const windowScroll = window.scrollY + 300;
      const contactEnd = document.getElementById("contactEnd");
      const contactStart = document.getElementById("contactStart");

      if (
        workStart?.offsetTop &&
        workEnd?.offsetTop &&
        contactStart?.offsetTop &&
        contactEnd?.offsetTop
      ) {
        if (
          windowScroll >= workStart?.offsetTop &&
          windowScroll <= workEnd?.offsetTop
        ) {
          setCurrentNavSelection("Work");
          // setCurrentSelection("work");
        } else if (windowScroll <= workStart?.offsetTop) {
          setCurrentNavSelection("About");
          // setCurrentSelection("about");
        } else if (
          windowScroll + 400 >= contactStart?.offsetTop &&
          windowScroll + 300 <= contactEnd?.offsetTop
        ) {
          setCurrentNavSelection("Contact");
        } else {
          setCurrentNavSelection("Projects");
        }
      }
    });
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      const old = (currentMainWork + 1) % 8;
      setCurrentMainWork(old);
    },
    onSwipedRight: (eventData) => {
      const old = (currentMainWork - 1 + 8) % 8;
      setCurrentMainWork(old);
    },
  });

  const onMoreClicked = (index: number) => {
    if (index === currentProjSelected) {
      setCurrentProjSelected(-1);
      return;
    }
    setCurrentProjSelected(index);
  };

  const renderProjectDetails = (index: number) => {
    return projContributions[index];
  };

  const renderProjs = () => {
    const projs = [];
    for (let i = 0; i < 5; i++) {
      projs.push(
        <div
          className={`${styles.researchProjs} ${
            isSectionSelected && i === 0 ? styles.marginResearchProjs : ""
          } ${i !== 0 ? styles.noMargin : ""}`}
        >
          <div className={styles.researchProjImageContainer}>
            <Image
              className={`${styles.imageStylesResearch}`}
              src={projectImages[i]}
              alt="Picture of the author"
            ></Image>
            <h1 className={styles.projHighlight}>
              <b>{projectTitles[i]}</b>
            </h1>
          </div>
          <div className={`${styles.researchProjDetailsContainer}`}>
            <div className={styles.projectDetailsHighlight}>
              {projectIntros[i]}
              <br />
              {/* <p>kfjn j</p> */}
              {i === currentProjSelected ? renderProjectDetails(i) : null}
              <RiArrowDropDownLine
                onClick={() => {
                  onMoreClicked(i);
                }}
                className={`${
                  i === currentProjSelected ? styles.lessIcon : styles.moreIcon
                }`}
                size={50}
              />
            </div>
          </div>
        </div>
      );
    }
    return projs;
  };

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

  // Call the async function to start the timer

  const getSend = () => {
    return (
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
            .post("http://localhost:3001/send-email", dataToSend)
            .then((r: any) => {
              setIsSent("sent");
              console.log("succes response is", r);
            })
            .catch((e: any) => {
              setIsSent("error");
              console.log("error is ", e);
            });
        }}
        className={styles.sendButton}
      >
        <span className={styles.sendText}>Send</span>
        <BiSend size={20} />
      </div>
    );
  };

  const getSent = () => {
    return (
      <div style={{ pointerEvents: "none" }} className={styles.sendButton}>
        <span className={styles.sendText}>Sent!</span>
        <FaRegSmileBeam size={20} />
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

  const getError = () => {
    return (
      <div style={{ pointerEvents: "none" }} className={styles.sendButton}>
        <span className={styles.sendText}>Oops! Please try again</span>
        <ImSad size={20} />
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
    <>
      <div className={styles.mobileWrapper}>
        <MobileNav
          isScrollingUp={true}
          toggleSelection={setCurrentSelection}
          setIsNavOn={setIsNavOn}
          currentSection={currentNavSelection}
        />
        <div className={styles.contentMobile}>
          <div className={styles.nameWrapper}>
            <h1 style={{ textShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)" }}>
              I am Esha.
            </h1>
          </div>
          <div className={styles.intro}>
            <h1>
              A research enthusiast and a passionate software engineer from
              Pakistan.
            </h1>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={EshaImage}
              width={200}
              height={300}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.longIntro}>
            {
              <p className={styles.textSyle}>
                Be it experimenting with compiler optimisations and
                approximations, or developing real-world apps, I have explored a
                breadth of arenas as a Computer Science Graduate of '23 from the
                Lahore University of Management Sciences (LUMS).
              </p>
            }
          </div>
          <section id="workStart"></section>
          <div
            id="work"
            {...handlers}
            className={`${styles.workWrapper} ${
              isNavOn ? styles.disabledWork : null
            }`}
          >
            <div
              className={`${styles.workWrapperDetailed} ${
                isSectionSelected ? styles.expanded : ""
              }`}
            >
              <IoMdClose
                onClick={() => {
                  setIsSectionSelected(false);
                }}
                className={styles.back}
              />
              <div className={styles.workplaceTitle}>
                <h1>{workplaceTitles[currentMainWork]}</h1>
                <div className={styles.pillContainer}>
                  {workplacePills[currentMainWork]}
                </div>
              </div>
              <div className={styles.workplaceContent}>
                <div className={styles.workplaceRight}>
                  {workplacePoints[currentMainWork]}
                </div>
              </div>
            </div>

            <div
              className={`${styles.overlayLeft} ${
                isSectionSelected ? styles.hidden : ""
              }`}
            >
              <Image
                className={`${styles.imageStyles}`}
                src={workplaceImages[(currentMainWork - 1 + 8) % 8]}
                alt="Picture of the author"
              />
            </div>
            <div
              className={`${styles.mainWorkWrapper} ${
                isSectionSelected ? styles.hidden : ""
              }`}
            >
              <div
                className={`${styles.mainWork}`}
                onClick={() => {
                  setIsSectionSelected(true);
                }}
              >
                <Image
                  className={`${styles.imageStylesMain}`}
                  src={workplaceImages[currentMainWork]}
                  alt="Picture of the author"
                />

                <div className={styles.imageOverlay}>
                  <div className={styles.companyLinkContainer}>
                    <TfiMoreAlt
                      color="#6c2b63 "
                      className={styles.companyLink}
                      size={25}
                    />
                  </div>
                </div>
              </div>

              {/* <div className={styles.mainDesignationText}>
                {mobileWorkplaceHighlights[currentMainWork]}
                
              </div> */}
            </div>

            <div
              className={`${styles.overlayRight} ${
                isSectionSelected ? styles.hidden : ""
              }`}
            >
              <Image
                className={`${styles.imageStyles}`}
                src={workplaceImages[(currentMainWork + 1) % 8]}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div
            className={` ${
              isSectionSelected ? styles.hidden : styles.workHighlights
            } ${isNavOn ? styles.disabledWork : null}`}
          >
            <div className={styles.workHighlightsTop}>
              <p>{mobileWorkplaceHighlights[currentMainWork]}</p>
            </div>
            <div className={styles.workHighlightsBottom}>
              <p>{workplaceAbout[currentMainWork]}</p>
            </div>
          </div>
          <section id="workEnd"></section>

          <div id="projects"> {renderProjs()}</div>
          <section id="contactStart"></section>
          <div className={styles.contactHeading}>
            <h1 className={styles.contactHeadingText}>
              <b>Let's connect</b>
            </h1>
          </div>
          <div className={styles.contactWrapper}>
            <div className={styles.contactInput}>
              <div className={styles.nameContainer}>
                <div className={styles.nameHeading}>Name</div>
                <input
                  value={nameInput}
                  onChange={(e: any) => {
                    onChangeNameInput(e.target.value);
                  }}
                  id="nameInput"
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
                  id="emailInput"
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
                  id="workInput"
                  placeholder="Your work here..."
                  className={styles.inputFieldsWorkplace}
                ></input>
              </div>

              <div className={`${styles.nameContainer} ${styles.marginClass}`}>
                <div className={styles.nameHeading}>Message</div>
                <textarea
                  value={messageInput}
                  onChange={(e: any) => {
                    onChangeMessageInput(e.target.value);
                  }}
                  id="messageInput"
                  placeholder="Your message here..."
                  className={styles.textArea}
                ></textarea>
              </div>
            </div>
            <Image
              src={contactImage}
              className={styles.imageStylesContact}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.buttonWrapper}>{getAction()}</div>
          <section id="contactEnd"></section>
        </div>
      </div>
    </>
  );
}
