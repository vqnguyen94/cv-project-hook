import React from "react";

const ExpForm = (props) => {
  const info = props.info;
  if (props.editMode) {
    return (
      <form onSubmit={props.submit}>
        <label htmlFor="expName">Company name</label>
        <input
          id="expName"
          onChange={props.change}
          value={info.expName}
          placeholder="Name of company"
        />
        <label htmlFor="expRole">Role</label>
        <input
          id="expRole"
          onChange={props.change}
          value={info.expRole}
          placeholder="Your role"
        />
        <label htmlFor="expDate">Date</label>
        <input
          id="expDate"
          onChange={props.change}
          value={info.expDate}
          placeholder="Your date of employment"
        />
        <button type="submit">Save</button>
      </form>
    );
  } else {
    return null;
  }
};

export default ExpForm;
