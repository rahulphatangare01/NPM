// TableFormRowColumn Mapping:

import { useEffect, useState } from "react";
import "./tableFormRowColumnsStyle.css";

interface FormRow {
  firstname: string;
  lastname: string;
  city: string;
  email: string;
}

interface FormColumn {
  diploma: FormRow;
  twe: FormRow;
  ten: FormRow;
}

const TableFormRowColumns = () => {
  const [formData, setFormData] =
    useState <
    FormColumn >
    {
      diploma: {
        firstname: "Vishal",
        lastname: "Patil",
        city: "Shirput",
        email: "vishal@gmail.com",
      },
      twe: {
        firstname: "Vishal",
        lastname: "Patil",
        city: "Shirput",
        email: "vishal@gmail.com",
      },
      ten: {
        firstname: "Vishal",
        lastname: "Patil",
        city: "Shirput",
        email: "vishal@gmail.com",
      },
    };

  const handleInput = (event: any, row: string, inputName: string) => {
    if (event.target) {
      let formDataLocal = { ...formData };
      if (
        (inputName === "firstname" ||
          inputName === "lastname" ||
          inputName === "city" ||
          inputName === "email") &&
        (row === "diploma" || row === "twe" || row === "ten")
      ) {
        formDataLocal[row][inputName] = event.target.value;
      }
      setFormData(formDataLocal);
    }
  };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    console.log("Form-data-on-submit: ", formData);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <table>
          <thead>
            <tr>
              <td></td>
              <td>firstname</td>
              <td>lastname</td>
              <td>city</td>
              <td>email</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Diploma</td>
              <td>
                <input
                  value={formData.diploma.firstname}
                  onInput={(event) => {
                    handleInput(event, "diploma", "firstname");
                  }}
                  placeholder="firstname"
                />
              </td>
              <td>
                <input
                  value={formData.diploma.lastname}
                  onInput={(event) => {
                    handleInput(event, "diploma", "lastname");
                  }}
                  placeholder="lastname"
                />
              </td>
              <td>
                <input
                  value={formData.diploma.city}
                  onInput={(event) => {
                    handleInput(event, "diploma", "cityname");
                  }}
                  placeholder="city"
                />
              </td>
              <td>
                <input
                  value={formData.diploma.email}
                  onInput={(event) => {
                    handleInput(event, "diploma", "email");
                  }}
                  placeholder="email"
                />
              </td>
            </tr>
            <tr>
              <td>12th</td>
              <td>
                <input
                  value={formData.twe.firstname}
                  onInput={(event) => {
                    handleInput(event, "twe", "firstname");
                  }}
                  placeholder="firstname"
                />
              </td>
              <td>
                <input
                  value={formData.twe.lastname}
                  onInput={(event) => {
                    handleInput(event, "twe", "lastname");
                  }}
                  placeholder="lastname"
                />
              </td>
              <td>
                <input
                  value={formData.twe.city}
                  onInput={(event) => {
                    handleInput(event, "twe", "city");
                  }}
                  placeholder="city"
                />
              </td>
              <td>
                <input
                  value={formData.twe.email}
                  onInput={(event) => {
                    handleInput(event, "twe", "email");
                  }}
                  placeholder="email"
                />
              </td>
            </tr>
            <tr>
              <td>10th</td>
              <td>
                <input
                  value={formData.ten.firstname}
                  onInput={(event) => {
                    handleInput(event, "ten", "firstname");
                  }}
                  placeholder="firstname"
                />
              </td>
              <td>
                <input
                  value={formData.ten.lastname}
                  onInput={(event) => {
                    handleInput(event, "ten", "lastname");
                  }}
                  placeholder="lastname"
                />
              </td>
              <td>
                <input
                  value={formData.ten.city}
                  onInput={(event) => {
                    handleInput(event, "ten", "city");
                  }}
                  placeholder="city"
                />
              </td>
              <td>
                <input
                  value={formData.ten.email}
                  onInput={(event) => {
                    handleInput(event, "ten", "email");
                  }}
                  placeholder="email"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TableFormRowColumns;
