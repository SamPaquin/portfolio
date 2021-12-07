import { ExternalLink } from "react-external-link";

import Portrait from "../Images/Portrait.png";
import classes from "./Styles/About.module.css";

const About = () => {
  return (
    <div className={classes.section} id="about">
      <div className={classes.aboutText}>
        <h2 className={classes.subtitle}>About Me</h2>
        <p className={classes.sectionText}>
          Hey there! My name is Sam Paquin and I enjoy creating digital
          environments for people to interact with. I started programming back
          in 2016 after using Wix for my business. I felt that there were too
          many constraints and wanted to create on my own!
        </p>
        <p className={classes.sectionText}>
          After spending some time in tutorial hell and building websites for
          myself, family and friends, I decided to make my education formal and
          enrolled at{" "}
          <ExternalLink href="https://catalog.stcloudstate.edu/programs/ezzWKiV1cgx4Wxf8K3JJ">
            St. Cloud State University
          </ExternalLink>{" "}
          in the Master's program for Software Engineering.
        </p>
        <p className={classes.sectionText}>
          I have several years of experience working in the financial industry
          holding roles from marketing to lending and doing almost everything in
          between. I'm excited to take on this new path of software engineering
          and build an amazing career out of it!
        </p>
      </div>
      <div className={classes.personalImage}>
        <img src={Portrait} alt="Sam Paquin" />
        <span className={classes.imgBorder}></span>
      </div>
    </div>
  );
};

export default About;
