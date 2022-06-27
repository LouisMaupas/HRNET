import React from "react";
import { useState } from "react";
import styled from "styled-components";
// https://www.npmjs.com/package/react-datepicker & https://date-fns.org/v2.0.0-alpha.18/docs/I18n
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDistance } from "date-fns/esm";
import { fr } from "date-fns/esm/locale";
// https://react-select.com/home#getting-started
import Select from "react-select";
// import { departmentOptions } from "../utils/utilsData"; // FIXME

// Styled components
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

/**
 * Component page
 * @returns
 */
const CreateEmployee = () => {
  // datePicker
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const locales = { fr };
  registerLocale("fr", fr);

  // react-select FIXME importer depuis utils/data
  const departmentOptions = [
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "engineering", label: "Engineering" },
    { value: "humanResources", label: "Human Resources" },
    { value: "legal", label: "Legal" },
  ];

  const statesOptions = [
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "engineering", label: "Engineering" },
    { value: "humanResources", label: "Human Resources" },
    { value: "legal", label: "Legal" },
  ];

  // react-select handle selected options
  const [selectedDepartmentOptions, setSelectedDepartmentOptions] = useState(
    null
  );
  const [selectedStatesOptions, setSelectedStatesOptions] = useState(null);

  /** manage submit form */
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {  
      first: e.target[0].value, 
      last: e.target[1].value, 
      birth: e.target[2].value, 
      start: e.target[3].value, 
      adress: document.getElementById('street').value, 
      city: document.getElementById('city').value, 
      state: e.target[6].value, 
      zip: document.getElementById('zip-code').value, 
      department: e.target[8].value 
    };
      
    if(localStorage.employees === undefined) {
      data.id = 1
      // stringify data object before storing it
      localStorage.setItem('employees', JSON.stringify([data]));
      alert('employé enregistré [UTILISER PLUGIN MODALE]')
    } else {
      // retrieve and parse the object from storage
      const retrievedEmployees = JSON.parse(localStorage.getItem('employees'));
        data.id = retrievedEmployees.length +1
        const employees = retrievedEmployees
        employees.push(data)
        localStorage.removeItem('employees')
        localStorage.setItem('employees', JSON.stringify(employees));
        alert('employé enregistré [UTILISER PLUGIN MODALE]')
    }
  };

  return (
    <CreateEmployeeMain>
      <CreateEmployeeForm onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />
        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker // TODO fix UI peut-être qu'il faut afficher un composant date et pas un DateTime ou j'ai enlevé la date
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
          dateFormat="dd/MM/yyyy"
          locale={fr}
          id="date-of-birth"
          // TODO text-align: center;
        />
        <label htmlFor="start-date">Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          timeInputLabel="Time:"
          dateFormat="dd/MM/yyyy hh:mm aa"
          showTimeInput
          locale={fr}
          id="start-date"
          // TODO text-align: center;
        />
        <CreateEmployeeFieldset>
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input id="street" type="text" />
          <label htmlFor="city">City</label>
          <input id="city" type="text" />
          <label htmlFor="state">State</label>
          <Select
            name="state"
            id="state"
            options={statesOptions}
            defaultValue={selectedStatesOptions}
            onChange={setSelectedStatesOptions}
          />
          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </CreateEmployeeFieldset>
        <label htmlFor="department-button">Department</label>
        <Select
          name="department"
          id="department"
          options={departmentOptions}
          defaultValue={selectedDepartmentOptions}
          onChange={setSelectedDepartmentOptions}
        />
        <input type="submit" value="Save" />
      </CreateEmployeeForm>
    </CreateEmployeeMain>
  );
};

export default CreateEmployee;
