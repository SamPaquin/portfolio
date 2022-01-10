import classes from "./Styles/Home.module.css";

const Home = () => {
  return (
    <div className={classes.home} id="home">
      <h3 className={classes.intro}>Hey there, my name is</h3>
      <h1 className={classes.name}>Sam Paquin.</h1>
      <h1 className={classes.title}>Builder of digital experiences.</h1>
      <p className={classes.introText}>
        I'm a software engineering student that specializes in building (as well as
        designing) exceptional digital experiences. Currently, I'm in the
        process of evovling my career from several years in the financial
        industry to software engineering. Check out my work in the{" "}
        <a href="#projects">Projects Section</a>.
      </p>
    </div>
  );
};

export default Home;
