import axios from 'axios'
import useAccount from 'src/hooks/useAccount';

const baseURL = process.env.BACKEND_URL;
const timeout = 10_000 // 10秒

const useHttp = () => {
  const { authToken } = useAccount();

  const http = axios.create({
    baseURL,
    headers: {
      Authorization: authToken,
    },
    timeout,
  })

  return http
}

export default useHttp;
