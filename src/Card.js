import React from "react";
const casa = "HOME";
const jorge = "JORGE";

function Card(props) {
  return (
    <div class="box">
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <h1>{props.num}</h1>
        <h3>Service one</h3>
      </div>
      <p>{props.texto}</p>
    </div>
  );
}

function CardTitle(props) {
  return <p>HELLOUU</p>;
}

export default Card;
export { CardTitle, jorge };
