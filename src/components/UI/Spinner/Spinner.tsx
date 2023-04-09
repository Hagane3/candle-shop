import classes from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={classes.root}>
      <span className={classes.loader}></span>
    </div>
  );
};

export default Spinner;
