import React from "react";
import { useState } from "react";
import styled from "styled-components";

const CreateEmployee = () => {
  // TODO controlled inputs
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const CreateEmployeeMain = styled.main({
      display: "flex",
      justifyContent: "center",
    }),
    CreateEmployeeForm = styled.form({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "30%",
    }),
    CreateEmployeeFieldset = styled.fieldset({
      display: "flex",
      flexDirection: "column",
    });

  return (
    <CreateEmployeeMain>
      <CreateEmployeeForm>
        <div>Input value: {value}</div>
        <input value={value} onChange={onChange} />
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />
        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />
        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" />
        <CreateEmployeeFieldset>
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input id="street" type="text" />
          <label htmlFor="city">City</label>
          <input id="city" type="text" />
          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </CreateEmployeeFieldset>
        <label htmlFor="department-button">Department</label>
        <select name="department" id="department">
          {/* TODO better way */}
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        <input type="submit" value="Save" />
      </CreateEmployeeForm>
    </CreateEmployeeMain>
  );
};

export default CreateEmployee;
