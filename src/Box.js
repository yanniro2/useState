import React from "react";

export default function Box(props) {
  const style = {
    background: props.on ? "orange" : "#a22a2a",
  };
  return (
    <div className="box" style={style} onClick={props.toggle}>
      <h1>{props.id}</h1>
    </div>
  );
}
