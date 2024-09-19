import cn from "classnames";
import styles from "./input.module.scss";
import { useState } from "react";

export default function Input({ setInputTextHandler }) {
  const [text, setText] = useState("");

  const inputAction = (e) => {
    setText(e.target.value);
    setInputTextHandler(e.target.value);
  };

  return <input type="text" className={cn(styles.input)} onInput={inputAction} />;
}
