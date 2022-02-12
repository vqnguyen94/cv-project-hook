import React from "react";

const GeneralForm = (props) => {
  const info = props.info;
  if (props.editMode) {
    return (
      <form onSubmit={props.submit}>
        <label htmlFor="userName">Name</label>
        <input
          id="userName"
          onChange={props.change}
          value={info.userName}
          placeholder="Your name"
        />
        <label htmlFor="userEmail">Email</label>
        <input
          id="userEmail"
          onChange={props.change}
          value={info.userEmail}
          placeholder="Your email"
        />
        <label htmlFor="userPhone">Phone Number</label>
        <input
          id="userPhone"
          onChange={props.change}
          value={info.userPhone}
          placeholder="Your phone number"
        />
        <button type="submit">Save</button>
      </form>
    );
  } else {
    return null;
  }
};

export default GeneralForm;
