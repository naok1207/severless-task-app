import React, { useState } from 'react'
import axios from 'axios'
import useAccount from 'src/hooks/useAccount';

const baseURL = process.env.BACKEND_URL;
const timeout = 10_000 // 10秒

const CreateTaskPage = () => {
  const { getSession } = useAccount();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onClick = async () => {
    const session = await getSession()
    // @ts-ignore
    const authToken = session.idToken.jwtToken;
    const http = axios.create({
      baseURL,
      headers: {
        Authorization: authToken,
      },
      timeout,
    })

    if (!title || !description) return;
    // @ts-ignore
    const data = await http.post('/createTask', { title, description })
    setTitle("")
    setDescription("")
    console.log(data);

    const data2 = await http.get('/getTasks')
    console.log({ data2 })
  }

  return (
    <div>
      <h1>CreateTaskPage</h1>
      <input onChange={e => setTitle(e.target.value)} />
      <input onChange={e => setDescription(e.target.value)} />
      <button onClick={onClick}>AddTask</button>
    </div>
  )
}

export default CreateTaskPage
