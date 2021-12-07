import Resume from "../../Images/Resume-SamPaquin.pdf";
import classes from "./Styles/Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="#home"><p className={classes.logo}>&lt;/&gt;</p></a>
      <nav className={classes.navbar}>
        <ul className={classes.navLinks}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href={Resume} target="_blank" rel="noreferrer"><button className={classes.resumeBtn}>Resume</button></a>
      </nav>
    </header>
  );
};

export default Header;
