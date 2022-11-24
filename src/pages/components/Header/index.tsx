import { PaperPlaneTilt } from "phosphor-react";
import SignInButon from "../SignInButton/SignInButton";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <span>TechNews</span>
          <PaperPlaneTilt size={24} weight="bold" />
        </div>
        <nav>
          <a className={styles.linkActive}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButon />
      </div>
    </header>
  );
};
