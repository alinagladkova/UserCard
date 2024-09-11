import cn from "classnames";
import styles from "./card.module.scss";
import Avatar from "../avatar/Avatar";

export default function Card({ data }) {
  const { id, name, img } = data;

  return (
    <div className={cn(styles.card)}>
      <div className={cn(styles.card__avatar)}>
        <Avatar img={img}></Avatar>
      </div>
      <span className={cn(styles.card__name)}>{name}</span>
    </div>
  );
}
