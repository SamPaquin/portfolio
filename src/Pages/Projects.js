import Pokemon from "../Images/Pokemon.jpg";
import PokedexImage from "../Images/PokedexImage.PNG";
import LooneyTunes from "../Images/LooneyTunesProject.jpg";
import RustyHelicopter from "../Images/RustyHelicopter.png";
import ThePaquinCollection from "../Images/ThePaquinCollection.jpg";
import classes from "./Styles/Projects.module.css";

const Projects = () => {
  return (
    <div className={classes.section} id="projects">
      <h2 className={classes.subtitle}>Some Things I've Built</h2>
      <div className={classes.projectSection}>
        <div className={classes.project}>
          <div className={classes.projectImage}>
            <img src={Pokemon} alt="Pokemon Pokedex (PokeAPI)" />
            <span className={classes.imgBorder}></span>
          </div>
          <div className={classes.projectText}>
            <h3>Pokemon API (PokeAPI)</h3>
            <div className={classes.siteLinks}>
              <a
                href="https://github.com/SamPaquin/national-pokedex"
                target="_blank"
                rel="noreferrer"
              >
                <p>Source Code</p>
              </a>
            </div>
            <p>Built with: React, CSS/SASS, HTML, Pokemon API</p>
            <div className={classes.projectDescription}>
              <p>
                This personal project was built using Pokemon API while I was
                learning how to use APIs. My kiddos and I love all things
                Pokemon so this project was a no-brainer and a lot of fun!
              </p>
              <p>
                I didn't set this up in a live envionment, but check out a pic
                of it{" "}
                <a href={PokedexImage} target="_blank" rel="noreferrer">
                  here
                </a>{" "}
                or a check out a quick{" "}
                <a href="https://youtu.be/DCEe_gJH5W4" target="_blank" rel="noreferrer">
                  video
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
            <p>Built with: React, CSS/SASS, HTML</p>
            <div className={classes.projectDescription}>
              <p>
                This is a fun school project that was built using the Agile
                process, which had to be documented. I didn't post this live as
                it was just a school project, but check out a video of it
                running{" "}
                <a href="https://youtu.be/VdwwVTIs-34" target="_blank" rel="noreferrer">
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
                language. Here is a{" "}
                <a href="https://youtu.be/DkZj8U46TL4" target="_blank" rel="noreferrer">
                  video
                </a>{" "}
                of me explaining it and running the project!
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
              <a
                href="https://github.com/SamPaquin/thepaquincollection"
                target="_blank"
                rel="noreferrer"
              >
                <p>Source Code</p>
              </a>
            </div>
            <p>Built with: React, CSS/SASS, HTML, AWS</p>
            <div className={classes.projectDescription}>
              <p>
                This project was commissioned by my wife! She is a wedding
                photographer/videographer and was looking for a new website.
              </p>
              <p>
                Check out the{" "}
                <a
                  href="https://www.thepaquincollection.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  live site
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
