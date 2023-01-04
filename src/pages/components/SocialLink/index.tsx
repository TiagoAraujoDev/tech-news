import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import styles from "./styles.module.scss";

export const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://github.com/TiagoAraujoDev"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/tiago-muniz-de-araujo-2b5b8a89/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com/TiagoOtrovador"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
};
