import React, { useState } from "react";
import GeneralForm from "./components/GeneralForm";
import General from "./components/General";
import EduForm from "./components/EduForm";
import Edu from "./components/Edu";
import ExpForm from "./components/ExpForm";
import Exp from "./components/Exp";

// https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#usinganobjectasastatevariablewithusestatehook
// https://reactjs.org/docs/conditional-rendering.html
const App = () => {
  // Holds all the data from input fields that are updated before they are set to the corresponding sections's variables
  const [info, setInfo] = useState({});
  //Controls whether to show or hide the forms/sections
  const [editMode, setEditMode] = useState({
    gen: true,
    edu: true,
    exp: true,
  });

  const [generalInfo, setGeneralInfo] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
  });
  const [eduInfo, setEduInfo] = useState({
    eduSchool: "",
    eduMajor: "",
    eduDate: "",
  });
  const [expInfo, setExpInfo] = useState({
    expName: "",
    expRole: "",
    expDate: "",
  });

  const handleChange = (e) => {
    const key = e.target.id;
    const updatedValue = {};
    updatedValue[key] = e.target.value;
    setInfo({
      ...info,
      ...updatedValue,
    });
  };

  // The div that contains each section has an id that corresponds to a key in the editMode object
  const startEditMode = (e) => {
    const key = e.target.id;
    setEditMode((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  //Make a new object, set the values of the object to the data extracted from the input fields,
  //Copy the new object into the object designated to render the submitted info
  const onGenSubmit = (e) => {
    e.preventDefault();
    const updatedValue = {};
    updatedValue.userName = info.userName;
    updatedValue.userEmail = info.userEmail;
    updatedValue.userPhone = info.userPhone;
    setEditMode((prevState) => ({
      ...prevState,
      gen: false,
    }));
    setGeneralInfo({
      ...generalInfo,
      ...updatedValue,
    });
  };

  const onEduSubmit = (e) => {
    e.preventDefault();
    const updatedValue = {};
    updatedValue.eduSchool = info.eduSchool;
    updatedValue.eduMajor = info.eduMajor;
    updatedValue.eduDate = info.eduDate;
    setEditMode((prevState) => ({
      ...prevState,
      edu: false,
    }));
    setEduInfo({
      ...eduInfo,
      ...updatedValue,
    });
  };

  const onExpSubmit = (e) => {
    e.preventDefault();
    const updatedValue = {};
    updatedValue.expName = info.expName;
    updatedValue.expRole = info.expRole;
    updatedValue.expDate = info.expDate;
    setEditMode((prevState) => ({
      ...prevState,
      exp: false,
    }));
    setExpInfo({
      ...expInfo,
      ...updatedValue,
    });
  };

  return (
    <div>
      {/* Forms */}
      <GeneralForm
        change={handleChange}
        submit={onGenSubmit}
        editMode={editMode.gen}
        info={info}
      />
      <EduForm
        change={handleChange}
        submit={onEduSubmit}
        editMode={editMode.edu}
        info={info}
      />
      <ExpForm
        change={handleChange}
        submit={onExpSubmit}
        editMode={editMode.exp}
        info={info}
      />
      {/* Rendered submittted info */}
      <General
        info={generalInfo}
        editMode={editMode.gen}
        startEdit={startEditMode}
      />
      <Edu info={eduInfo} editMode={editMode.edu} startEdit={startEditMode} />
      <Exp info={expInfo} editMode={editMode.exp} startEdit={startEditMode} />
    </div>
  );
};

export default App;
