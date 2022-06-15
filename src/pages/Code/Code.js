import React from "react";
import "./style.css";
import { data } from "./data";
import { Section } from "../../components/Section/Section";
import diagrammm from "../../assets/diagrammm.svg";

import { Code } from "@chakra-ui/react";

export const CodePage = () => {
  const list = data.map((item) => <Section item={item} key={item.id} />);
  return (
    <div className="code-page">
      {list};
      <div className="first-img">
        <img src={diagrammm} className="first-img" alt="first-img" />
      </div>
    </div>
  );
};

export default Code;
