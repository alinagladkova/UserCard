import cn from "classnames";
import styles from "./avatar.module.scss";
import Circle from "../circle/Circle";

export default function Avatar({ img, stateActive }) {
  return (
    <div className={cn(styles.avatar)}>
      <img className={cn(styles.avatar__img)} src={img} alt="" />
      <div className={cn(styles.avatar__circle)}>
        <Circle stateActive={stateActive}></Circle>
      </div>
    </div>
  );
}
