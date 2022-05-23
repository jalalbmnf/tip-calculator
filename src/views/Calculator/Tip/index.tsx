import { FC } from "react";

import { Button, FormControl } from "../../../components";

import "./index.scss";

const Tip: FC = () => {
  const tipList: number[] = [5, 10, 15, 25, 50];

  return (
    <div className="tip">
      <p>Select tip %</p>
      <div className="tip-btn__group">
        {tipList.map((tip: number) => (
          <Button className="tip-btn-group__item" key={tip}>
            {tip}
          </Button>
        ))}
        <FormControl className="tip-btn__group-input" />
      </div>
    </div>
  );
};

export default Tip;
