import {useState} from "react";
import emailjs from '@emailjs/browser';





/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const env = import.meta.env
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const submit =  (data:any) => {
    setLoading(true);
    emailjs.send(env.VITE_SERVICEID , env.VITE_TEMPLATEID, data, env.VITE_PUBLICKEY)
    .then(function(response:any) {
       setResponse(response);
       setLoading(false)
    }, function(error) {
        setResponse(error);
        setLoading(false)
    });
    
  };

  return { isLoading, response, submit };
}

export default useSubmit;