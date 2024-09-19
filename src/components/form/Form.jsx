import cn from "classnames";
import styles from "./form.module.scss";
import Button from "../button/Button";
import Input from "../input/Input";

export default function Form({ getNamesById }) {
  return (
    <form className={cn(styles.form)} action="#">
      <div className={cn(styles.form__input)}>
        <Input></Input>
      </div>
      <div className={cn(styles.form__button)}>
        <Button text="Отправить" use="send"></Button>
      </div>
    </form>
  );
}

/* 

ДЗ:

Input -> состояниие внутри (поднять состояние) (в form мы не знаем что напсиано внутри input)

когда кликаем на button, берем данные кому оправлять + берем данные с поднятого состояния (что ввели) log


*/
