import { FaGithub } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { useSession, signIn, signOut } from "next-auth/react";

import styles from "../../../styles/components/signInButton.module.scss";

export default function SignInButon() {
  const { data: session } = useSession();

  return session ? (
    <button
      type="button"
      className={styles.buttonContainer}
      onClick={() => signOut()}
    >
      <FaGithub color="#04D361" size={24} />
      <span>{session.user?.name}</span>
      <RiCloseFill color="#fff" size={24} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.buttonContainer}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#EBA417" size={24} />
      <span>Sign in with Github</span>
    </button>
  );
}
