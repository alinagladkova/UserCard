import cn from "classnames";
import styles from "./cardList.module.scss";
import Card from "../card/Card";
import Form from "../form/Form";
import { useState } from "react";

export default function CardList({ data }) {
  const [activeUsers, setActiveUsers] = useState([]);

  const setActiveUsersHandler = (id) => {
    if (activeUsers.includes(id)) {
      setActiveUsers(activeUsers.filter((el) => el !== id));
      return;
    }
    setActiveUsers([...activeUsers, id]); //сравнение по ссылкам
  };

  const getNamesById = () => {
    return data.filter((user) => activeUsers.includes(user.id)).map((user) => user.name);
  };

  return (
    <div className={cn(styles["card-list"])}>
      <div className={cn(styles["card-list__cards"])}>
        {data.map((dataObj) => (
          <Card key={dataObj.id} data={dataObj} setActiveUsersHandler={setActiveUsersHandler}></Card>
        ))}
      </div>
      <div className={cn(styles["card-list__form"])}>
        <Form getNamesById={getNamesById}></Form>
      </div>
    </div>
  );
}
