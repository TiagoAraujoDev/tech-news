import { FaCode } from "react-icons/fa";

import SignInButon from "../SignInButton";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <span>TechNews</span>
          <FaCode size={24} />
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
