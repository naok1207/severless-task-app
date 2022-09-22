import "./App.css"

import * as React from "react";


import useConfig from "./hooks/useConfig";
import { Account } from "./contexts/Account";
import { useEffect, useState } from "react";
import Router from "./config/Router";

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
      <Router />
    </Account>
  )
}
