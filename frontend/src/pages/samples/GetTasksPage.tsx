import React, { useEffect, useState } from 'react'
import useAccount from 'src/hooks/useAccount';
import useApi from 'src/hooks/useApi';

const GetTasksPage = () => {
  const http = useApi();

  useEffect(() => {
    if (!http) return;
    const f = async () => {
      const data = await http.get('/getTasks')
      console.log(data)
    }
    f();
  }, [http]);

  return (
    <div>GetTasksPage</div>
  )
}

export default GetTasksPage
