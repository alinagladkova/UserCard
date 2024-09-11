import cn from "classnames";
import styles from "./input.module.scss";

export default function Input() {
  return <textarea type="text" className={cn(styles.textarea)} />;
}
