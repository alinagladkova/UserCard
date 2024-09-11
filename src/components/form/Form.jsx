import cn from "classnames";
import styles from "./form.module.scss";
import Button from "../button/Button";
import Input from "../input/Input";

export default function Form() {
  return (
    <form className={cn(styles.form)} action="#">
      <div className={cn(styles.form__input)}>
        <Input></Input>
      </div>
      <div className={cn(styles.form__button)}>
        <Button></Button>
      </div>
    </form>
  );
}
