import React from "react"
import { useEffect, useState } from "react"
import useAccount from "src/hooks/useAccount"
import ChangeEmail from "./ChangeEmail"
import ChangePassword from "./ChangePassword"

export default () => {
  const { getSession } = useAccount()

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true)
    })
  }, [])

  return (
    <div>
      {loggedIn && (
        <>
          <h2>Settings</h2>
          <ChangePassword />
          <ChangeEmail />
        </>
      )}
    </div>
  )
}
