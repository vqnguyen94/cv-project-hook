import React from "react";

const Exp = ({ info, editMode, startEdit }) => {
  if (!editMode) {
    return (
      <div className="edit" id="exp" onClick={startEdit}>
        <h2>EXPERIENCE</h2>
        <h3>{info.expName}</h3>
        <h4>{info.expRole}</h4>
        <h4>{info.expDate}</h4>
      </div>
    );
  } else {
    return null;
  }
};

export default Exp;
