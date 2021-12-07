import { ExternalLink } from "react-external-link";

import classes from "./Jobs.module.css";

const CMCU = () => {
  return (
    <div className={classes.job}>
      <h3 className={classes.companyInfo}>
        Lender @{" "}
        <ExternalLink href="https://www.mycmcu.org/">
          Central Minnesota Credit Union
        </ExternalLink>
      </h3>
      <p className={classes.timeframe}>July 2012 - September 2016</p>
      <ul className={classes.achievementsList}>
        <li className={classes.achievements}>
          Underwrote and processed loan applications for members for personal
          loans, small business loans and mortgages.
        </li>
        <li className={classes.achievements}>
          Worked with the marketing department to develop a plan for
          intergration into the current market, working with local schools and
          special interest groups.
        </li>
        <li className={classes.achievements}>
          Designed clothing and marketing materials to help support brand in
          current market.
        </li>
      </ul>
    </div>
  );
};

export default CMCU;
