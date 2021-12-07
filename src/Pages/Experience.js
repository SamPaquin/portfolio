import { NavLink, Route, Switch } from "react-router-dom";

import NNB from "../Components/Jobs/NNB";
import Technologies from "../Components/Techonologies/Technologies";
import classes from "./Styles/Experience.module.css";
import FOCU from "../Components/Jobs/FOCU";
import CMCU from "../Components/Jobs/CMCU";
import AHCU from "../Components/Jobs/AHCU";

const Experience = () => {
  return (
    <div className={classes.section} id="experience">
      <h2 className={classes.subtitle}>Where I've Worked</h2>
      <p className={classes.sectionText}>
        Much of my professional experience is in the financial services industry
        in lending and marketing while the majority of my software engineering
        experience is either through school or personal use. However, you may
        notice that sprinkled throughout my financial career are several
        marketing and software skills that I believe transfer wonderfully to
        software engineering.
      </p>
      <div className={classes.jobs}>
        <div className={classes.jobLinks}>
          <NavLink to="/FOCU" autofocus>
            Financial One Credit Union
          </NavLink>
          <NavLink to="/AHCU">Anoka Hennepin Credit Union</NavLink>
          <NavLink to="/NNB">Neighborhood National Bank</NavLink>
          <NavLink to="/CMCU">Central Minnesota Credit Union</NavLink>
        </div>
        <div className={classes.jobInfo}>
          <Switch>
            <Route path="/" exact>
              <FOCU />
            </Route>
            <Route path="/FOCU" exact>
              <FOCU />
            </Route>
            <Route path="/AHCU" exact>
              <AHCU />
            </Route>
            <Route path="/NNB" exact>
              <NNB />
            </Route>
            <Route path="/CMCU" exact>
              <CMCU />
            </Route>
          </Switch>
        </div>
      </div>
      <Technologies />
    </div>
  );
};

export default Experience;
