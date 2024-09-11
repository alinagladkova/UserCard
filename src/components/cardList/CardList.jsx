import cn from "classnames";
import styles from "./cardList.module.scss";
import Card from "../card/Card";

export default function CardList({ data }) {
  return (
    <div className={cn(styles["card-list"])}>
      {data.map((dataObj) => (
        <Card key={dataObj.id} data={dataObj}></Card>
      ))}
    </div>
  );
}
