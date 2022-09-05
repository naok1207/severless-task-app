import React, { useState } from 'react'
import UserPool from 'src/UserPool';

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = (event: any) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], [], (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    })
  };

  return (
    <div>
      <p>SignUp</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default SignUp
