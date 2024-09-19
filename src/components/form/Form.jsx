import cn from "classnames";
import styles from "./form.module.scss";
import Button from "../button/Button";
import Input from "../input/Input";
import { useState } from "react";

export default function Form({ getNamesById }) {
  const [inputText, setInputText] = useState("");

  const setInputTextHandler = (text) => {
    setInputText(text);
  };

  const clickHandler = () => {
    return console.log(`The message: "${inputText}" is sent to ${getNamesById().join(", ")}`);
  };

  return (
    <form className={cn(styles.form)} action="#">
      <div className={cn(styles.form__input)}>
        <Input setInputTextHandler={setInputTextHandler}></Input>
      </div>
      <div className={cn(styles.form__button)}>
        <Button text="Отправить" use="send" clickHandler={clickHandler}></Button>
      </div>
    </form>
  );
}
