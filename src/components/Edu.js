import React from "react";

const Edu = ({ info, editMode, startEdit }) => {
  if (!editMode) {
    return (
      <div className="edit" id="edu" onClick={startEdit}>
        <h2>EDUCATION</h2>
        <h3>{info.eduSchool}</h3>
        <h4>{info.eduMajor}</h4>
        <h4>{info.eduDate}</h4>
      </div>
    );
  } else {
    return null;
  }
};

export default Edu;
