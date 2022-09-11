import React, { useState } from 'react'
import axios from 'axios'
import Pool from 'src/UserPool';
import useAccount from 'src/hooks/useAccount';

const baseURL = process.env.BACKEND_URL;
const timeout = 10_000 // 10秒



const AddTask = () => {
  const { getSession } = useAccount();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onClick = async () => {
    const session = await getSession()
    // @ts-ignore
    const authToken = session.idToken.jwtToken;
    console.log({authToken})
    const http = axios.create({
      baseURL,
      headers: {
        Authorization: authToken,
      },
      timeout,
    })

    if (!title || !body) return;
    // @ts-ignore
    const data = await http.post('/addTask', { title, body })
    setTitle("")
    setBody("")
    console.log(data);
  }

  return (
    <div>
      <input onChange={e => setTitle(e.target.value)} />
      <input onChange={e => setBody(e.target.value)} />
      <button onClick={onClick}>AddTask</button>
    </div>
  )
}

export default AddTask
