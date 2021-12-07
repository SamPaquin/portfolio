import classes from "./Technologies.module.css";

const Technologies = () => {
  return (
    <div className={classes.sectionText}>
      <p>Here are a few technologies I've been working with recently:</p>
      <ul className={classes.technologies}>
        <li>HTML</li>
        <li>CSS/SASS/Bootstrap</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>AWS</li>
        <li>C++</li>
        <li>Python</li>
      </ul>
    </div>
  );
};

export default Technologies;
