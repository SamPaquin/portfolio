import StarWars from "../Images/StarWarsProject.jpg";
import LooneyTunes from "../Images/LooneyTunesProject.jpg";
import RustyHelicopter from "../Images/RustyHelicopter.png";
import ThePaquinCollection from "../Images/ThePaquinCollection.png";
import classes from "./Styles/Projects.module.css";

const Projects = () => {
  return (
    <div className={classes.section} id="projects">
      <h2 className={classes.subtitle}>Some Things I've Built</h2>
      <div className={classes.projectSection}>
        <div className={classes.project}>
          <div className={classes.projectImage}>
            <img src={StarWars} alt="Star Wars API (SWAPI)" />
            <span className={classes.imgBorder}></span>
          </div>
          <div className={classes.projectText}>
            <h3>Star Wars API (SWAPI)</h3>
            <div className={classes.siteLinks}>
              <a href="https://www.google.com" target="_blank" rel="noreferrer">
                <p>Source Code</p>
              </a>
            </div>
            <p>Built with: React, CSS/SASS, HMTL, Star Wars API</p>
            <div className={classes.projectDescription}>
              <p>
                This personal project was built using Star Wars API while I was
                learning how to use APIs. I also have a deep love for all things
                Star Wars so this project was a no-brainer and a lot of fun!
              </p>
              <p>
                Check it out{" "}
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                !
              </p>
            </div>
          </div>
        </div>
        <div className={classes.project}>
          <div className={classes.projectImage}>
            <img src={LooneyTunes} alt="Looney Tunes - Martian Mountain X" />
            <span className={classes.imgBorder}></span>
          </div>
          <div className={classes.projectText}>
            <h3>Looney Toons Game</h3>
            <div className={classes.siteLinks}>
              <a
                href="https://github.com/SamPaquin/martian-mountain-x"
                target="_blank"
                rel="noreferrer"
              >
                <p>Source Code</p>
              </a>
            </div>
            <p>Built with: React, CSS/SASS, HMTL</p>
            <div className={classes.projectDescription}>
              <p>
                This is a fun school project that was built using the Agile
                process, which had to be documented.
              </p>
              <p>
                Play this game{" "}
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                !
              </p>
            </div>
          </div>
        </div>
        <div className={classes.project}>
          <div className={classes.projectImage}>
            <img src={RustyHelicopter} alt="Rusty Helicopter" />
            <span className={classes.imgBorder}></span>
          </div>
          <div className={classes.projectText}>
            <h3>Rusty Helicopter</h3>
            <div className={classes.siteLinks}>
              <a
                href="https://github.com/SamPaquin/rust-helicopter"
                target="_blank"
                rel="noreferrer"
              >
                <p>Source Code</p>
              </a>
            </div>
            <p>Built with: Rust</p>
            <div className={classes.projectDescription}>
              <p>
                This school project had me working with a new language, Rust. It
                felt fairly similar to C++ but there were definite nuances, and
                it was very interesting and a lot of fun to work with the new
                language.
              </p>
              <p>
                Check out a video of the running code{" "}
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                !
              </p>
            </div>
          </div>
        </div>
        <div className={classes.project}>
          <div className={classes.projectImage}>
            <img src={ThePaquinCollection} alt="The Paquin Collection" />
            <span className={classes.imgBorder}></span>
          </div>
          <div className={classes.projectText}>
            <h3>The Paquin Collection</h3>
            <div className={classes.siteLinks}>
              <a href="https://www.google.com" target="_blank" rel="noreferrer">
                <p>Source Code</p>
              </a>
            </div>
            <p>Built with: React, CSS/SASS, AWS</p>
            <div className={classes.projectDescription}>
              <p>
                This school project had me working with a new language, Rust. It
                felt fairly similar to C++ but there were definite nuances and
                it was very interesting and a lot of fun to work with the new
                language.
              </p>
              <p>
                Check out the live site{" "}
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
