import React from "react";

const EduForm = (props) => {
  const info = props.info;
  if (props.editMode) {
    return (
      <form onSubmit={props.submit}>
        <label htmlFor="eduSchool">School</label>
        <input
          id="eduSchool"
          onChange={props.change}
          value={info.eduSchool}
          placeholder="Your school"
        />
        <label htmlFor="eduMajor">Major</label>
        <input
          id="eduMajor"
          onChange={props.change}
          value={info.eduMajor}
          placeholder="Your major"
        />
        <label htmlFor="eduDate">Date</label>
        <input
          id="eduDate"
          onChange={props.change}
          value={info.eduDate}
          placeholder="Your date of attendance"
        />
        <button type="submit">Save</button>
      </form>
    );
  } else {
    return null;
  }
};

export default EduForm;
