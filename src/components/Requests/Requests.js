import React from "react";
import Request from "./Request";
import { RequestData } from "../../data/RequestData";

function Requests() {
  return (
    <div style={{ marginTop: "55px", backgroundColor: "red" }}>
      {RequestData.map(({ id, title, desc, price }) => (
        <Request key={id} title={title} desc={desc} price={price} />
      ))}
    </div>
  );
}

export default Requests;
