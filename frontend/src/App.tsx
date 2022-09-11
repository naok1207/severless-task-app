import "./App.css";

import * as React from "react";

import useConfig from "./components/useConfig";
import logo from "./logo.svg";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Account } from "./components/Account";
import Status from "./components/Status";
import Setting from "./components/Setting";
import GetTask from "./components/GetTask";
import AddTask from "./components/AddTask";

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();

  return (
    <Account>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Status />
        <SignUp />
        <Login />
        <Setting />
        <GetTask />
        <AddTask />
      </div>
    </Account>
  );
}
