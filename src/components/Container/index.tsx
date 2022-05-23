import { FC, ReactNode } from "react";

import "./index.scss";

interface IProps {
  children: ReactNode;
}

const Container: FC<IProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
