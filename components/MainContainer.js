import classes from "../styles/index.module.css";
import Head from "next/head";
import A from "../components/A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords="nextPractice"></meta>
        <title>{keywords}</title>
      </Head>
      <div className={classes.navbar}>
        <A href={"/"} text="Main" className={classes.link} />
        <A href={"/users"} text="Users" className={classes.link} />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
