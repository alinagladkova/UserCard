import { useState } from "react";
import cn from "classnames";
import styles from "./card.module.scss";
import Avatar from "../avatar/Avatar";

export default function Card({ data }) {
  const [active, setActive] = useState(false);
  const { id, name, img } = data;

  const setActiveState = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className={cn(styles.card, active ? cn(styles[`card--active`]) : "")} onClick={setActiveState}>
      <div className={cn(styles.card__avatar)}>
        <Avatar img={img} stateActive={active}></Avatar>
      </div>
      <span className={cn(styles.card__name)}>{name}</span>
    </div>
  );
}
