import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import React, { useState } from 'react';
import useAccount from 'src/hooks/useAccount';

export default () => {
  const [newEmail, setNewEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { getSession, authenticate } = useAccount();

  const onSubmit = (event: any) => {
    event.preventDefault();

    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        const attributes = [
          new CognitoUserAttribute({ Name: "email" , Value: newEmail }),
        ];

        user.updateAttributes(attributes, (err, results) => {
          if (err) {
            console.error(err);
          } else {
            console.log(results);
          }
        })
      })
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="newEmail">New Email</label>
        <input type="email" value={newEmail} onChange={(event) => setNewEmail(event.target.value)} />
        <label htmlFor="password">Current Password</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type="submit">Change password</button>
      </form>
    </div>
  )
}
