import "./form.css";
import { useState, useEffect, useRef } from "react";
import Input from "./input.jsx";
import Button from "./Button.jsx";

function Signup() {
  const formRef = useRef(null);
  let [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("values");
    if (savedData) {
      setValues(JSON.parse(savedData));
    }
  }, []);
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    // localStorage.setItem("values", JSON.stringify(values));
    console.log(values);
  }, [values]);
  ///submit function/////////////
  let arr = [];
  const submitFunc = (e) => {
    e.preventDefault();
    arr = arr.push(values);
    // localStorage.setItem("user", arr);
    localStorage.setItem("user", JSON.stringify(values));
    console.log(arr);
    // localStorage.setItem("user", JSON.stringify(values));
  };
  const resetForm = (e) => {
    formRef.current.reset();
    e.target.value = "";
  };

  return (
    <div className="form">
      <h2>Sign Up</h2>
      <p>{values.name}</p>
      <p>{values.email}</p>
      <p>{values.password}</p>
      <p>Please fill this form to create an account</p>
      <form onSubmit={submitFunc}>
        <div>
          <Input
            labelName="name"
            labelContent="Name: "
            inputType="text"
            inputName="name"
            inputPlaceholder="Enter Your Full name"
            inputValue={values.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            labelName="email"
            labelContent="Email"
            inputType="email"
            inputName="email"
            inputPlaceholder="Enter Your Email"
            inputValue={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            labelName="password"
            labelContent="Password"
            inputType="password"
            inputName="password"
            inputPlaceholder="Enter Your password"
            inputValue={values.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            labelName="passwordConfirm"
            labelContent="Confirm Password"
            inputType="password"
            inputName="passwordConfirm"
            inputPlaceholder="Confirm Password"
            inputValue={values.passwordConfirm}
            onChange={handleChange}
          />
        </div>

        <div>
          <Button
            className="btn cancel"
            buttonContent="Cancel"
            type="button"
            onClick={resetForm}
          />
          <Button className="btn submit" buttonContent="Submit" type="submit" />
        </div>
      </form>
      {/* <script src="./form.js"></script> */}
    </div>
  );
}

export default Signup;
