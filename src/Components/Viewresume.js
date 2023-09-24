import React from "react";

function Viewresume() {
  return (
    <>
      <embed
        style={{ overflow: "hidden" }}
        src="/new_resume.pdf"
        type="application/pdf"
        width="65%"
        height="600px"
      />
    </>
  );
}

export default Viewresume;
