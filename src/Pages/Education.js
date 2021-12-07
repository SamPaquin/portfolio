import { ExternalLink } from "react-external-link";

import classes from "./Styles/Education.module.css";

const Education = () => {
  return (
    <div className={classes.section} id="education">
      <h2 className={classes.subtitle}>What I've Studied</h2>
      <div className={classes.education}>
        <div className={classes.degree}>
          <h3 className={classes.educationInfo}>
            Master of Software Engineering @{" "}
            <ExternalLink href="https://catalog.stcloudstate.edu/programs/ezzWKiV1cgx4Wxf8K3JJ">
              St. Cloud State University
            </ExternalLink>
          </h3>
          <p className={classes.sectionText}>GPA: 3.79</p>
          <p className={classes.sectionText}>
            Software Design, Software Architecture, Foundations of Software
            Engineering, Application and Database Systems, Quality Assurance
            &amp; Web Accessibility, Advanced Software Project Management,
            Offensive and Defensive Security, Reverse Engineering, Data Mining,
            Big Data Organization
          </p>
        </div>
        <div className={classes.degree}>
          <h3 className={classes.educationInfo}>
            Bachelor of Marketing @{" "}
            <ExternalLink href="https://catalog.stcloudstate.edu/programs/NmDZWwMUy579hHUbmf3m">
              St. Cloud State University
            </ExternalLink>
          </h3>
          <p className={classes.sectionText}>
            Business Communication Strategies, Buyer Behavior, Principles of
            Promotion, Distribution Management, Professional Selling, Global
            Market Strategy, Electronic Marketing, Services Marketing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
