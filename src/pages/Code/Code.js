import React from "react";
import "./style.css";
import { data } from "./data";
import { Section } from "../../components/Section/Section";

export const CodePage = () => {
  const list = data.map((item) => <Section item={item} key={item.id} />);
  return <div className="code-page">{list}</div>;
};
