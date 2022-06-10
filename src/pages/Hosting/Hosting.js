import React from "react";
import "./style.css";
import { data } from "./data";
import diagrammm2 from "../../assets/diagrammm2.svg";

export const HostingPage = () => {
  const list = data.map((item) => <Section item={item} key={item.id} />);
  return (
    <div className="hosting-page">
      {list}

      <div className="second-img">
        <img src={diagrammm2} className="second-img" alt="second-img" />
        <br /> <b>Diagramm</b>
      </div>
    </div>
  );
};
export default HostingPage;
