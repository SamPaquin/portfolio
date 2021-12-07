import { ExternalLink } from "react-external-link";

import classes from "./Jobs.module.css";

const FOCU = () => {
  return (
    <div className={classes.job}>
      <h3 className={classes.companyInfo}>
        AVP of Indirect Lending @{" "}
        <ExternalLink href="https://www.financialonecu.com/">
          Financial One Credit Union
        </ExternalLink>
      </h3>
      <p className={classes.timeframe}>August 2020 - Current</p>
      <ul className={classes.achievementsList}>
        <li className={classes.achievements}>
          Manage existing and build new relationship with auto, recreational
          vechile and other dealers throughout the Midwest.
        </li>
        <li className={classes.achievements}>
          Work with the marketing team to develop a marketing strategy and
          implement that strategy for growth in the Indirect Lending Department.
        </li>
        <li className={classes.achievements}>
          Focus on the user expereince for dealers and new members during the
          loan application process.
        </li>
      </ul>
    </div>
  );
};

export default FOCU;
