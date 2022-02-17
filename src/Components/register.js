import React, { useState } from "react";
import FormInputs from "./fromInputs";

const Register = () => {
  const [values, setValues] = useState({
    // useState custom hook react initial value store..

    userName: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    //input field attributes..

    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "UserName",
      errorMessages:
        "UserName Should be 3-16 charaters and shouldn't include any special chater! ",
      label: "UserName",
      required: true,
      pattern: "^[A-Za-z0-9]{3,17}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessages: "it should be a valid email address!",
      label: "email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "birthday",
      errorMessages: "",
      label: "birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessages:
        "Password Should be 8-20 character's and include at least 1 letter, 1 special character, 1 number !",
      label: "password",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirmPassword",
      errorMessages: "Passwords don't",
      label: "confirmPassword",
      required: true,
      pattern: values.password,
    },
  ];

  const handleSubmit = (e) => {
    //submit form
    e.preventDefault();
  };

  const onChange = (e) => {
    //update value target
    setValues({ ...values, [e.target.name]: e.target.value });
    
  };

  console.log(values);

  return (
    <div className="app">
    
      <form
        onSubmit={handleSubmit}
        className="bg-white py-0 px-16 rounded-xl w-sceen"
      >
        <h1 className="font-bold text-5xl flex justify-center text-purple-600 animate__animated animate__fadeInUp animate__delay-1s">
          Register
        </h1>
        {inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            values={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="w-full h-12 p-3 rounded-none bg-purple-600 text-white rounded-md font-bold text-xs cursor-pointer mt-4 mb-4 ">
          <span className="animate__animated animate__fadeInUp">submit</span>
        </button>
      </form>

    </div>
  );
};

export default Register;
