import { FC, ReactNode } from "react";

import "./index.scss";

interface IProps {
  active?: boolean;
  className?: string;
  children: ReactNode;
}

const Button: FC<IProps> = ({ active = false, children, className = "" }) => {
  return (
    <button className={`btn ${className} ${active ? "active" : ""}`}>
      {children}
    </button>
  );
};

export default Button;
