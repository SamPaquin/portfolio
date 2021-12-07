import classes from "./Styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.section} id="contact">
      <h2 className={classes.subtitle}>Get In Touch</h2>
      <p className={classes.sectionText}>
        If you'd like to get in touch, you can reach me via phone at{" "}
        <a href="tel:320-292-9011">320-292-9011</a>, via email at{" "}
        <a href="mailto:samualpaquin@gmail.com">samualpaquin@gmail.com</a>, or
        via <a href="https://www.linkedin.com/in/sam-paquin-514026">LinkedIn</a>
        ! I'm looking forward to working together!
      </p>
      <div className={classes.contactBtns}>
        <a href="mailto:samualpaquin@gmail.com" rel="noreferrer"> 
          <button>Email</button>
        </a>
        <a href="tel:3202929011" rel="noreferrer">
          <button>Phone</button>
        </a>
        <a href="https://www.linkedin.com/in/sam-paquin-514026" target="_blank" rel="noreferrer">
          <button>LinkedIn</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
