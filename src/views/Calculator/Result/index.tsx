import { Button } from "../../../components";
import "./index.scss";

const Result = () => {
  const resultList = [
    { title: "Tip Amount", value: 0 },
    { title: "Total", value: 0 },
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

      <Button className="result-btn">RESET</Button>
    </div>
  );
};

export default Result;
