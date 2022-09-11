import * as React from "react";

import useConfig from "../hooks/useConfig";
import logo from "../logo.svg";
import GetTask from "../components/specialized/task/GetTask";
import AddTask from "../components/specialized/task/AddTask";

const MainPage = () => {
  const config = useConfig();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>

      <GetTask />
      <AddTask />
    </div>
  );
}

export default MainPage
