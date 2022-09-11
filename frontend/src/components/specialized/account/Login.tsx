import React, { useState } from 'react'
import useAccount from 'src/hooks/useAccount';

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { authenticate } = useAccount();

  const onSubmit = (event: any) => {
    event.preventDefault();

    authenticate(email, password)
      .then(data => {
        console.log("Logged in!", data);
      })
      .catch(err => {
        console.error("Failed to login", err);
      })
  };

  return (
    <div>
      <p>Login</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
