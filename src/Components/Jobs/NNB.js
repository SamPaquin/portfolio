import { ExternalLink } from "react-external-link";

import classes from "./Jobs.module.css";

const NNB = () => {
  return (
    <div className={classes.job}>
      <h3 className={classes.companyInfo}>
        Marketing Manager @{" "}
        <ExternalLink href="https://www.neighborhood.bank/">
          Neighborhood National Bank
        </ExternalLink>
      </h3>
      <p className={classes.timeframe}>September 2016 - August 2018</p>
      <ul className={classes.achievementsList}>
        <li className={classes.achievements}>
          Managed all marketing functions using both traditional and
          non-traditional marketing tactics for a small financial institution.
        </li>
        <li className={classes.achievements}>
          Designed the online banking service and website utilizing programming
          expertise and focusing on user experience.
        </li>
        <li className={classes.achievements}>
          Eliminated certain marketing tools, including a 3rd party social media
          presence, that were ineffective and replaced them with more effective
          tools saving the company $20k+ per year.
        </li>
      </ul>
    </div>
  );
};

export default NNB;
