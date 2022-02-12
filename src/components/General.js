import React from "react";

const General = ({ info, editMode, startEdit }) => {
  if (!editMode) {
    return (
      <div className="edit" id="gen" onClick={startEdit}>
        <h1>{info.userName}</h1>
        <h2>{info.userEmail}</h2>
        <h2>{info.userPhone}</h2>
      </div>
    );
  } else {
    return null;
  }
};

export default General;
