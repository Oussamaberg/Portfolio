import {useState} from "react";
import emailjs from '@emailjs/browser';




/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const serviceId = 'service_hbujuun';
  const  templateId = 'template_iw1esyh';
  const publicKey = 'LQMTHuEiIxNhAPsAV';

  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const submit =  (data:any) => {
    setLoading(true);
    emailjs.send(serviceId, templateId, data, publicKey)
    .then(function(response) {
       setResponse("success");
       setLoading(false)
    }, function(error) {
        setResponse("error");
        setLoading(false)
    });
    
  };

  return { isLoading, response, submit };
}

export default useSubmit;