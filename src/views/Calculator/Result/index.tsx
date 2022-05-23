import { FC } from "react";
import { Button } from "../../../components";

import "./index.scss";

interface IProps {
  total: string;
  tipAmount: string;
  reset: () => void;
}

const Result: FC<IProps> = ({ total, tipAmount, reset }) => {
  const resultList = [
    { title: "Tip Amount", value: tipAmount || 0 },
    { title: "Total", value: total || 0 },
  ];

  return (
    <div className="result">
      <div className="result-list">
        {resultList.map(({ title, value }, i: number) => (
          <div key={i} className="result-list__item">
            <div className="result-list__item-title">
              <p className="result-list__item-title__label">{title}</p>
              <p className="result-list__item-title__person"> / person</p>
            </div>
            <div className="result-list__item-value">${value}</div>
          </div>
        ))}
      </div>

      <Button
        onClick={reset}
        disabled={!total || !tipAmount}
        className="result-btn"
      >
        RESET
      </Button>
    </div>
  );
};

export default Result;
