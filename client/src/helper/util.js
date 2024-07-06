import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

export function useSendData() {
  const navigate = useNavigate();

  async function sendData(
    method,
    path,
    authBool,
    payload,
  ) {
    try {
      const token = localStorage.getItem('token');
      let headers = {
        "Content-Type": "application/json",
      }
      if (token && authBool) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      if(payload){
        console.log(payload);
      }

      const response = await fetch(`http://localhost:6001/api/${path}`, {
        method: method,
        headers: headers,
        body: payload ? JSON.stringify(payload) : undefined,
      });

      const data = await response.json();
      console.log(data);
      console.log('data received util: ', data);

      if(data.code===401){
        toast.error('Unathorised Access')
        return navigate('/login')
      }
      if (!response.ok) {
        toast.error(data.message || 'An error occurred');
        throw new Error(data.message || 'An error occurred');
      }

      if (data.status === 'ok'&& data.result.message) {
        toast.success(data.result.message || 'Operation successful');
      }

      return data.result;

    } catch (err) { 
      console.error(err); 
      throw err; 
    }
  }
  return sendData;
}
