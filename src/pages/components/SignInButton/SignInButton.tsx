import { FaGithub } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

import styles from "./styles.module.scss";

export default function SignInButon() {
  const isLogged = false;

  return isLogged ? (
    <button className={styles.buttonContainer}>
      <FaGithub color="#04D361" size={24} />
      <span>Sign in with Github</span>
    </button>
  ) : (
    <button className={styles.buttonContainer}>
      <FaGithub color="#EBA417" size={24} />
      <span>Sign out</span>
      <RiCloseFill color="#fff" size={24} />
    </button>
  );
}
