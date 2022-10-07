import React from "react";
import "./style.css";
import { data } from "./data";
import diagramm_3 from "../../assets/diagramm_3.svg";
import Section from "../../components/Section/Section";

export const HostingPage = () => {
  const list = data.map((item) => <Section item={item} key={item.id} />);
  return (
    <div className="hosting-page">
      {list}

      <div className="diagramm2">
        <img src={diagramm_3} className="diagramm" alt="second-img" />
        <br /> <b></b>
      </div>
    </div>
  );
};

export default HostingPage;
