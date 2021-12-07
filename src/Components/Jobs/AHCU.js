import { ExternalLink } from "react-external-link";

import classes from "./Jobs.module.css";

const AHCU = () => {
  return (
    <div className={classes.job}>
      <h3 className={classes.companyInfo}>
        Electronic Services Specialist @{" "}
        <ExternalLink href="https://www.ahcu.coop/">
          Anoka Hennepin CU
        </ExternalLink>
      </h3>
      <p className={classes.timeframe}>September 2018 - August 2020</p>
      <ul className={classes.achievementsList}>
        <li className={classes.achievements}>
          Performed lead duties for design, implementation, and training of
          staff on a new intranet system.
        </li>
        <li className={classes.achievements}>
          Led a team that designed and enhanced an internal loan application
          system focusing on the user experience for both the employee and
          client.
        </li>
        <li className={classes.achievements}>
          Managed a small team as a Branch Manager providing loans for personal
          use, small businesses, and mortgages.
        </li>
      </ul>
    </div>
  );
};

export default AHCU;
