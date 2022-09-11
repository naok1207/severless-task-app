import React from 'react'
import Login from 'src/components/specialized/account/Login'
import Setting from 'src/components/specialized/account/Setting'
import SignUp from 'src/components/specialized/account/SignUp'
import Status from 'src/components/specialized/account/Status'
import { Account } from 'src/contexts/Account'

const AccountPage = () => {
  return (
    <Account>
      <Status />
      <SignUp />
      <Login />
      <Setting />
    </Account>
  )
}

export default AccountPage
