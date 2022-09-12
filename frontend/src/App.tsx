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
import BoardPage from "./pages/BoardPage";
import { useEffect, useState } from "react";

/**
 * Our Web Application
 */
export default function App() {
  const { app } = useConfig();
  /**
   * warning 対処
   * Warning: expected server html to contain a matching div in div .
   * https://github.com/vercel/next.js/discussions/17443
   */
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <Account>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="board" element={<BoardPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Account>
  )
}
