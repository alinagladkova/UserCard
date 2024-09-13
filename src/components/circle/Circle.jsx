// import cn from "classnames";
import { TiTick } from "react-icons/ti";

export default function Circle({ stateActive }) {
  return (
    <TiTick
      style={{
        display: !stateActive ? "none" : "",
      }}
    ></TiTick>
  );
}
