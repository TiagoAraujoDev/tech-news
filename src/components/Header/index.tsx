import Link from "next/link";
import { useRouter } from "next/router";
import { FaCode } from "react-icons/fa";

import SignInButon from "../SignInButton";

import styles from "../../styles/components/header.module.scss";

export const Header = () => {
  const router = useRouter();
  const pathArray = router.asPath.split("/");

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <span>TechNews</span>
          <FaCode size={24} />
        </div>
        <nav>
          <Link
            href="/"
            className={
              pathArray.every((item) => item === "") ? styles.linkActive : ""
            }
          >
            Home
          </Link>
          <Link
            href="/posts"
            className={
              pathArray.some((item) => item === "posts")
                ? styles.linkActive
                : ""
            }
          >
            Posts
          </Link>
        </nav>
        <SignInButon />
      </div>
    </header>
  );
};
