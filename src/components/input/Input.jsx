import cn from "classnames";
import styles from "./input.module.scss";
import { useState } from "react";

export default function Input() {
  const [text, setText] = useState("");

  return <input type="text" className={cn(styles.input)} onInput={(e) => setText(e.target.value)} />;
}
