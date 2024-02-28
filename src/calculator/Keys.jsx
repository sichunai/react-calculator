import { calculatorKeys } from "./constants";
import "./styles.css";

function Keys() {
  return (
    <>
      {calculatorKeys.map(({ id, description, label, type }) => (
        <button className={type} id={id} title={description}>
          {label}
        </button>
      ))}
    </>
  );
}

export default Keys;
