import React, { useState } from 'react';
import useAccount from 'src/hooks/useAccount';

export default () => {
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const { getSession } = useAccount();

  const onSubmit = (event: any) => {
    event.preventDefault();

    getSession().then(({ user }) => {
      user.changePassword(password, newPassword, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          console.log(result);
        }
      })
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="password">Current Password</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <label htmlFor="password">New Password</label>
        <input type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} />
        <button type="submit">Change password</button>
      </form>
    </div>
  )
}
