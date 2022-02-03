import React from "react";

const Marker = ({ coord, title }) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        backgroundColor: "teal",
        width: "30px",
        height: "30px",
        textAlign: "center",
        color: "white",
      }}
      className="marker"
    >
      {coord?.id || title}
    </div>
  );
};

export default Marker;
