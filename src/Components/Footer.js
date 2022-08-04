import styles from "./Footer.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. &copy; Alguns direitos reservados </p>
    </footer>
  );
};
