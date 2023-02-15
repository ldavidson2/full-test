import "./App.css";
import { Routes, Route } from "react-router-dom";
import Message from "./components/message";
import Amplify, { API } from "aws-amplify";
import React, { useEffect, useState } from "react";

const myAPI = "fulltestapi";
const path = "/user";

const App = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  //Function to fetch from our backend and update customers array
  function getUser(e) {
    let PK = e.input;
    API.get(myAPI, path)
      .then((response) => {
        console.log(response);
        let newUsers = [...users];
        newUsers.push(response);
        setUsers(newUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <h1>Super Simple React App</h1>
      <div>
        <input
          placeholder="user id"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <br />
      <button onClick={() => getUser({ input })}>
        Get User From Backend
      </button>

      <h2 style={{ visibility: users.length > 0 ? "visible" : "hidden" }}>
        Response
      </h2>
      {users.map((thisUser, index) => {
        return (
          <div key={thisUser.PK}>
            <span>
              <b>UserId:</b> {thisUser.PK} - <b>Company Name</b>
              : {thisUser.companyName}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default App;
