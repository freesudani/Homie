import React from "react";
import styled from "styled-components";
import Request from "./Request";
import { RequestData } from "../../data/RequestData";
import { FaTimes } from "react-icons/fa";

const Backdrop2 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

function Requests(props) {
  return (
    <>
      <Backdrop2 onClick={props.button2Clicked} />
      <div
        style={{
          position: "fixed",
          zIndex: "101",
          width: "700px",
          overflow: "hidden",
          margin: "110px auto auto 300px",
          backgroundColor: "#fff",
        }}
      >
        <div
          onClick={props.button2Clicked}
          style={{ cursor: "pointer", fontSize: "1.5rem" }}
        >
          <FaTimes />
        </div>
        {RequestData.map(({ id, title, desc, price }) => (
          <Request
            key={id}
            title={title}
            desc={desc}
            price={price}
            button2Clicked={props.button2Clicked}
          />
        ))}
      </div>
    </>
  );
}

export default Requests;
