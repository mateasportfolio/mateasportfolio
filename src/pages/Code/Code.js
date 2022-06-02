import React from "react";
import "./style.css";
import { data } from "./data";

export const CodePage = () => {
  const list = data.map((item) => <Section item={item} key={item.id} />);
  return <div className="code-page">{list}</div>;
};

const Section = ({ item }) => {
  return (
    <div className="section">
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  );
};
