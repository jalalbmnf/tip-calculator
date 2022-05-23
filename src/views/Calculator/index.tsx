import { useEffect, useState } from "react";

import Tip from "./Tip";
import Result from "./Result";

import { FormControl } from "../../components";
import DollarIcon from "../../assets/icons/icon-dollar.svg";
import PersonIcon from "../../assets/icons/icon-person.svg";

import "./index.scss";

const App = () => {
  const [tip, setTip] = useState("");
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [total, setTotal] = useState("");

  const reset = () => {
    setBill("");
    setTip("");
    setPeople("");
    setTipAmount("");
    setTotal("");
  };

  useEffect(() => {
    if (!!bill && !!people) {
      setTipAmount(((+bill * +tip) / (100 * +people)).toFixed(2));
      setTotal(((+bill * (1 + +tip / 100)) / +people).toFixed(2));
    }
  }, [bill, tip, people]);

  return (
    <div className="calculator">
      <div className="calculator-left">
        <FormControl
          value={bill}
          onChange={(e: any) => setBill(e.target.value)}
          label="Bill"
          prefix={DollarIcon}
          error={`${!bill && !!people ? "Can't be zero" : ""}`}
        />
        <Tip {...{ setTip, tip }} />
        <FormControl
          value={people}
          onChange={(e: any) => setPeople(e.target.value)}
          label="Number of people"
          prefix={PersonIcon}
          error={`${!!bill && !people ? "Can't be zero" : ""}`}
        />
      </div>
      <div className="calculator-right">
        <Result {...{ tipAmount, total, reset }} />
      </div>
    </div>
  );
};

export default App;
