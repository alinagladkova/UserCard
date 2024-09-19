import cn from "classnames";
import styles from "./button.module.scss";

function Button({ text, use }) {
  return <button className={cn(styles.btn, styles[`btn--${use}`])}>{text}</button>;
}

export default Button;
