import React from "react";

function Viewcertificate() {
  return (
    <>
      <embed
        style={{ overflow: "hidden" }}
        src="/python.pdf"
        type="application/pdf"
        width="65%"
        height="600px"
      />
    </>
  );
}

export default Viewcertificate;
