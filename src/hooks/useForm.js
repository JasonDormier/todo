import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});


  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    callback(values);
  }
  return [values, handleChange, handleSubmit];
}

export default useForm;