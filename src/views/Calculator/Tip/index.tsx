import { FC } from "react";

import { Button, FormControl } from "../../../components";
import { checkLetters } from "../../../utils/regex";

import "./index.scss";

interface IProps {
  setTip: any;
  tip: string;
}

const Tip: FC<IProps> = ({ setTip, tip }) => {
  const tipList = ["5", "10", "15", "25", "50"];

  const handleSelectTip = (selectedTip: string) => {
    setTip(selectedTip);
  };

  return (
    <div className="tip">
      <p>Select tip %</p>
      <div className="tip-btn__group">
        {tipList.map((tip: string) => (
          <Button
            onClick={() => handleSelectTip(tip)}
            className="tip-btn__group-item"
            key={tip}
          >
            {tip}
          </Button>
        ))}
        <FormControl
          value={tip}
          onChange={(e: any) => setTip(checkLetters(e.target.value))}
          className="tip-btn__group-input"
        />
      </div>
    </div>
  );
};

export default Tip;
