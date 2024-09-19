import cn from "classnames";
import styles from "./button.module.scss";

function Button({ text, use, clickHandler }) {
  return (
    <button className={cn(styles.btn, styles[`btn--${use}`])} onClick={clickHandler}>
      {text}
    </button>
  );
}

export default Button;
