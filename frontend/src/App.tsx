import "./App.css"

import * as React from "react";
import {
  Routes,
  Route,
} from "react-router-dom"

import useConfig from "./hooks/useConfig";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import { Account } from "./contexts/Account";

/**
 * Our Web Application
 */
export default function App() {
  const { app } = useConfig();
  return (
    <Account>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Account>
  )
}
