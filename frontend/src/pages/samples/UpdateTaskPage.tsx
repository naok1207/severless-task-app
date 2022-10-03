import React, { useState } from 'react'
import useHttp from 'src/hooks/useHttp';

const UpdateTaskPage = () => {
  const http = useHttp();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onClick = async () => {
    if (!title || !description) return;
    const pk = '1ff960d6-eef7-47f2-bc5c-5f5d47a709bc';
    const data = await http.post('/updateTask', { pk, title, description })
    setTitle("")
    setDescription("")
    console.log(data)
  }

  return (
    <div>
      <h1>UpdateTaskPage</h1>
      <input onChange={e => setTitle(e.target.value)} />
      <input onChange={e => setDescription(e.target.value)} />
      <button onClick={onClick}>UpdateTask</button>
    </div>
  )
}

export default UpdateTaskPage
