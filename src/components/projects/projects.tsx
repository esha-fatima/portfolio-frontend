"use client";
import styles from "./projects.module.css";
import React from "react";
import { useState, useEffect } from "react";
import { GrCaretNext } from "react-icons/gr";
import kahaaniThumbnail from "../../assets/kahaaniThumbnail.png";
import llvm from "../../assets/llvm.jpg";
import choka from "../../assets/choka.jpeg";
import ML from "../../assets/ML.jpeg";
import RAFT from "../../assets/RAFT.png";
import { IoMdArrowBack } from "react-icons/io";

import Image from "next/image";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(-1);
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  const projectTitles = [
    "Kahaani",
    "Intermittent Approximate Computing",
    "RAFT Server ",
    "Choka.com",
    "Sentiment Analysis - Naive Baye's",
    "Restaurant Management System",
  ];

  const projectDescription = [
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
      with susceptibility to
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

  const projectPoints = [
    <ul>
      <li className={styles.projectDescriptionListItem}>
        Creating interfaces and prototypes for the application backed by
        extensive UI/UX research given the target market being an educational
        setting involving a range of students between juniors and high
        schoolers. My work took into account the semantic differences in the
        students’ aversiveness to technology, skills in Urdu language and the
        general scarcity of online texts in South Asian languages. Additionally
        with the significant importance of story-telling elements in linguistic
        learning, I wired up different stages of interfaces for our research
        use-case.
      </li>
      <li className={styles.projectDescriptionListItem}>
        Analyzed and performed an end-to-end usability testing of our first
        cycle of deployment. My strategy for testing drew results from the
        participants’ recorded responses to controlled prompts, uncontrolled
        prompts, and testing metrics in the context of our application. I
        segmented our participants into combinations of 3 dimensions (age,
        technology aversiveness and comfort with Urdu) to ensure deriving fair
        analyses. Past the usability testing, I used our results to draw user
        facing feedback, implications and the mapping of our interfaces with the
        HCI design principles.
      </li>
      <li className={styles.projectDescriptionListItem}>
        Expanding our use-case to include gamification, collaborative features
        some of which include allowing contributors to add to our digital
        library and inclusion of chatbots. I am overlooking the UI/UX design,
        development and usability testing for this round of expansion that is
        targeted for a publication. This use case will lay fundamental grounds
        for ML for Education focused in South Asian languages.
      </li>
    </ul>,

    <ul>
      <li className={styles.projectDescriptionListItem}>
        At the framework level, my contribution includes implementing a system
        of annotations within C code that makes available the user annotations
        and annotated entities within <b>LLVM passes </b>at IR level.
        Additionally, I implemented several approximate computing LLVM passes: a
        <b> loop-perforation pass </b>that increments an annotated loop’s
        inductive variable by a certain annotated amount; a{" "}
        <b> function skipping pass </b> that skips every nth function call where
        n is the user-annotated variable; a<b> smoothing pass </b>that clusters
        constant-initialized integers based on Euclidean distance proximity - it
        uses each cluster mean to initialize the corresponding variables with
        its respective cluster mean, accordingly replace all usages and removes
        unused variables.
      </li>
      <li className={styles.projectDescriptionListItem}>
        At the use case level, my contribution includes implementing{" "}
        <b> error propagation techniques </b> that quantify an error bound due
        to net approximations implemented via our framework. This is done by
        gathering all instruction level error bounds and their usage within
        different areas of the program. Altogether, this allows researchers to
        derive error bounds as a result of approximations and make a numerically
        backed decision in a tradeoff between energy availability and accuracy.
        Our project is targeted towards a publication that shall empirically
        contribute to research focusing on using approximate computing in
        energy-sensitive IoT deployments.
      </li>
    </ul>,
    <ul>
      <li className={styles.projectDescriptionListItem}>
        Ensured leader election between nodes such that they agree to leader
        after requiring a quorum of (N/2) + 1 votes. The leader election module
        is scalable and applicable to electing a leader when the nodes come
        alive at the beginning, or when any node does not receive a heartbeat
        ping from the leader. It is ensured that at most, one leader is elected
        per term. Additionally, whenever an elected leader receives a ping from
        a node with a higher term, it demotes itself to a follower so that the
        node with the latest term is mounted as the leader always.
      </li>
      <li className={styles.projectDescriptionListItem}>
        Ensured log completeness and consistency using persistent state and
        volatile state on all servers. The persistent storage is configured to
        store the latest term, and log whereas the volatile state keeps track of
        the latest log entry index written to state machine and the latest log
        entry index committed. The leader keeps track of the next index of logs
        that need to be sent to ensure consistency for each of the followers.
      </li>
    </ul>,
    <ul>
      <li className={styles.projectDescriptionListItem}>
        Implemented a review and rating system for tutors that helped raise
        their profiles’ credibility and provided a metric for choosing tutors
        for students. Additionally, the profiling information was stored to
        produce an aggregated metric for a match score between tutors and
        students.
      </li>
      <li className={styles.projectDescriptionListItem}>
        Implemented convenience features given the demands coming from COVID
        times, such as the creation of online, timed assessments that are turned
        in by the students and further propagated to the tutor for grading.
      </li>
    </ul>,

    <ul>
      <li className={styles.projectDescriptionListItem}>
        The dataset was first segmented to contain an equal number of positive
        and negative reviews to prevent training bias. Sequentially, stop words
        were removed and a vocabulary for all the words in the dataset was
        constructed. Each of the review documents were vectorized via 1-hot
        encoding.
      </li>
      <li className={styles.projectDescriptionListItem}>
        Using the vectorized tokens for the documents, the conditional
        probabilities are used to attain the likelihood for each test point
        belonging to a certain class of which the class with higher likelihood
        forms the result of the classifier.
      </li>
    </ul>,
  ];

  const projectImages = [kahaaniThumbnail, llvm, RAFT, choka, ML];

  const handleClick = (projectNumber: number) => {
    console.log("project number is ", projectNumber);
    setCurrentProject(projectNumber);
  };

  const handleScroll = (e: any) => {
    console.log("scrolling  ei s", e);
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const isAtTop = scrollTop === 0;
    const isAtEnd = scrollTop + clientHeight === scrollHeight;
    const isMiddle = !isAtTop && !isAtEnd;
    var overlayTop = document.getElementsByClassName("overlayTop");
    var overlayBottom = document.getElementsByClassName("overlayBottom");
    console.log("overlay top is ", overlayTop);
    if (isAtTop) {
      //overlayTop.classList.add(styles.hidden);
      setIsTop(true);
    } else {
      setIsTop(false);
    }

    if (isAtEnd) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  return (
    <>
      <div
        className={`${styles.projectContainerTerminating} ${
          currentProject !== -1 ? styles.hidden : ""
        }`}
        onClick={() => handleClick(0)}
      >
        <div className={styles.projectHighlight}>
          <div className={styles.nameOverlay}>Kahaani</div>

          <Image
            className={`${styles.imageStyles}`}
            src={kahaaniThumbnail}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.projectsSupportLarge}></div>
      </div>
      <div
        className={`${styles.projectContainer} ${
          currentProject !== -1 ? styles.hidden : ""
        }`}
        onClick={() => handleClick(1)}
      >
        <div className={styles.projectHighlight}>
          <div className={styles.nameOverlay}>Approximate Computing</div>
          <Image
            className={`${styles.imageStyles}`}
            src={llvm}
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.projectsSupportMedium}></div>
      </div>
      <div
        className={`${styles.projectContainer} ${
          currentProject !== -1 ? styles.hidden : ""
        }`}
        onClick={() => handleClick(2)}
      >
        <div className={styles.projectHighlight}>
          <div className={styles.nameOverlay}>RAFT Server</div>

          <Image
            className={`${styles.imageStyles}`}
            src={RAFT}
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.projectsSupportSmall}></div>
      </div>
      <div
        className={`${styles.projectContainer} ${
          currentProject !== -1 ? styles.hidden : ""
        }`}
        onClick={() => handleClick(3)}
      >
        <div className={styles.projectHighlight}>
          <div className={styles.nameOverlay}>Choka</div>

          <Image
            className={`${styles.imageStyles}`}
            src={choka}
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.projectsSupportMedium}></div>
      </div>

      <div
        className={`${styles.projectContainerTerminatingEnd} ${
          currentProject !== -1 ? styles.hidden : ""
        }`}
        onClick={() => handleClick(4)}
      >
        <div className={styles.projectHighlight}>
          <div className={styles.nameOverlay}>Classifier</div>
          <Image
            className={`${styles.imageStyles}`}
            src={ML}
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.projectsSupportLarge}></div>
      </div>
      <div
        className={`${
          currentProject === -1 ? styles.hidden : styles.dummyWrapper
        }`}
      >
        <div
          className={`${
            currentProject === -1
              ? styles.hidden
              : styles.projectDetailsContainer
          }`}
        >
          <div
            className={`${styles.projectContainerTerminatingDetailed} ${
              currentProject === -1 ? styles.hidden : ""
            }`}
          >
            <IoMdArrowBack
              onClick={() => {
                handleClick(-1);
              }}
              width={40}
              height={40}
              className={styles.back}
            />
            <div className={styles.projectTitle}>
              {projectTitles[currentProject]}
            </div>
            <div className={styles.projectHighlightDetailed}>
              <Image
                className={`${styles.imageStyles}`}
                src={projectImages[currentProject]}
                width={350}
                height={350}
                alt="Picture of the author"
              />
            </div>
          </div>

          <div
            onScroll={(e) => {
              handleScroll(e);
            }}
            className={`${styles.projectDetailsWrapper} `}
          >
           
            <div className={styles.projectDescription}>
              <p className={styles.projectDescriptionTop}>
                {projectDescription[currentProject]}
              </p>
              <div className={styles.projectDescriptionList}>
                {projectPoints[currentProject]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
