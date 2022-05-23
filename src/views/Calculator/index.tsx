import Tip from "./Tip";
import Result from "./Result";

import { FormControl } from "../../components";
import DollarIcon from "../../assets/icons/icon-dollar.svg";
import PersonIcon from "../../assets/icons/icon-person.svg";

import "./index.scss";

const App = () => {
  return (
    <div className="calculator">
      <div className="calculator-left">
        <FormControl label="Bill" prefix={DollarIcon} />
        <Tip />
        <FormControl label="Number of people" prefix={PersonIcon} />
      </div>
      <div className="calculator-right">
        <Result />
      </div>
    </div>
  );
};

export default App;
