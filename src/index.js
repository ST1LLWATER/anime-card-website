import React from "react";
import ReactDom from "react-dom";
import Card from "./card";
import Sdata from "./Sdata";
import "./index.css";

const acard = (val) => {
  return (
    <Card
      key={val.id}
      imgsrc={val.imgsrc}
      cc={val.cc}
      aname={val.aname}
      link={val.link}
    />
  );
};

ReactDom.render(
  <>
    {/* <div className="navbar">
      <ul>
        <li>Action</li>
        <li>Adventure</li>
        <li>Romance</li>
      </ul>
    </div> */}
    <h1 className="heading_style">
      Anime Suggestions Based On Community Reviews And Personal Opinion
    </h1>
    {Sdata.map(acard)}
  </>,
  document.getElementById("root")
);
