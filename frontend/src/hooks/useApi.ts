import { useEffect } from 'react';
import axios from 'axios'
import useAccount from './useAccount';

const baseURL = process.env.BACKEND_URL;
const timeout = 10_000 // 10秒

const useApi = (requireAuthToken = true) => {
  const { authToken } = useAccount();

  const http = () => {
    if (requireAuthToken && !authToken) return;
    return axios.create({
      baseURL,
      headers: {
        Authorization: authToken,
      },
      timeout,
    })
  }

  return http();
};

export default useApi;
