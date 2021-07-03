import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
  let history = useHistory();

  const [UserForm, setUserForm] = useState({
    name: "",
    password: "",
  });

  const users = [
    { name: "admin", password: "admin" },
    { name: "subham", password: "123" },
  ];

  const inputChanged = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...UserForm, [name]: value });
  };

  const submitAction = (event) => {
    event.preventDefault();
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].name === UserForm.name &&
        users[i].password === UserForm.password
      ) {
        history.push("/new");
        // console.log("Successful");
        break;
      }
    }
    console.log("Failed");
    setUserForm({
      name: "",
      password: "",
    });
  };
  return (
    <>
      <form onSubmit={submitAction}>
        <div>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            value={UserForm.name}
            onChange={inputChanged}
          ></input>
        </div>
        <br />
        <div>
          <label>Password :</label>
          <input
            type="password"
            name="password"
            value={UserForm.password}
            onChange={inputChanged}
          ></input>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* <div>
        {UsersList.map((user) => {
          return (
            <div key={user.email}>
              <p>
                Name: {user.name}, 
                Password: {user.password}
              </p>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Form;
