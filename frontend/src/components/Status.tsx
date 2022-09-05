import React, { useEffect, useState } from 'react'
import useAccount from 'src/hooks/useAccount';

const Status = () => {
  const [status, setStatus] = useState<boolean>(false);

  const { getSession, logout } = useAccount();

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setStatus(true);
    }).catch((err) => console.error(err));
  }, []);

  return <div>{status ? <button onClick={logout}>Logout</button> : "Please Login"}</div>;
}

export default Status
