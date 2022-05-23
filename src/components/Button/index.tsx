import { FC, ReactNode } from "react";

import "./index.scss";

interface IProps {
  active?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (e?: any) => void;
  children: ReactNode;
}

const Button: FC<IProps> = ({
  active = false,
  disabled = false,
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      {...{ onClick, disabled }}
      className={`btn ${className} ${active ? "active" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
