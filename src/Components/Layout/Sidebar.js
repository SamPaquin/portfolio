import { ExternalLink } from "react-external-link";

import IconGitHub from "../Icons/Github";
import IconLinkedin from "../Icons/LinkedIn";
import IconInstagram from "../Icons/Instagram";
import classes from "./Styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.iconGroup}>
        <ExternalLink href="https://www.linkedin.com/in/sam-paquin-514026">
          <IconLinkedin className={classes.icon} />
        </ExternalLink>
        <ExternalLink href="https://www.instagram.com/samualpaquin/">
          <IconInstagram className={classes.icon} />
        </ExternalLink>
        <ExternalLink href="https://github.com/SamPaquin">
          <IconGitHub className={classes.icon} />
        </ExternalLink>
      </div>
    </div>
  );
};

export default Sidebar;
