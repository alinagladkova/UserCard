import cn from "classnames";
import styles from "./button.module.scss";

function Button() {
  return <button className={cn(styles.btn, styles["btn--send"])}>Отправить</button>;
}

export default Button;
