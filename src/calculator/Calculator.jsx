import "./styles.css";
import Display from "./Display";
import Keys from "./Keys";

function Calculator() {
  return (
    <div className="container">
      <Display />
      <Keys />
    </div>
  );
}

export default Calculator;
