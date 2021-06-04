import React from "react";
import Heading2 from "./heading2";

const Heading3 = () => {
  return (
    <header
      className="header-section"
      style={{
        position: "fixed",
        marginTop: 0,
        clear: "both",
        zIndex: 10,
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <Heading2 />
    </header>
  );
};

export default Heading3;
