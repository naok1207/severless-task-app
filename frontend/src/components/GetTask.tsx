import React from 'react'
import axios from 'axios'
import Pool from 'src/UserPool';
import useAccount from 'src/hooks/useAccount';

const baseURL = process.env.BACKEND_URL;
const timeout = 10_000 // 10秒



const GetTask = () => {
  const { getSession } = useAccount();

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

    // @ts-ignore
    const data = await http.get('/getTask')
    console.log(data);
  }

  return (
    <button onClick={onClick}>GetTask</button>
  )
}

export default GetTask
