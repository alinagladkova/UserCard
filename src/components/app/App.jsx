import CardList from "../cardList/CardList";

const data = [
  {
    id: 63425,
    name: "Jone",
    img: "https://lipsum.app/random/200x205",
  },
  {
    id: 3425,
    name: "Garry",
    img: "https://lipsum.app/random/200x210",
  },
  {
    id: 456,
    name: "Pit",
    img: "https://lipsum.app/random/200x215",
  },
  {
    id: 678,
    name: "Mary",
    img: "https://lipsum.app/random/200x220",
  },
];

export default function App() {
  return (
    <>
      <CardList data={data}></CardList>
    </>
  );
}

/*
- работа с инпутом:
-- обязательно должно быть что-то введено или ошибка
-- должно отправляться всем выбранным при нажатии на кнопку?
 */
