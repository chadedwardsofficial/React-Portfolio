import "../../styles/contact.css";
import { useState } from "react";
import { validateEmail } from "../utils/helpers";
import kittylay from "./altIcons/kittylay.gif"

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const inputType = e.target.getAttribute("name");
    const inputValue = e.target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "fullName") {
      setFullName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };


  const checkEmail = (e) => {
    
    const { target } = e;
    const email = target.value;

    if (!validateEmail(email)) {
      setEmailError('Email is invalid');
    } else  {
      setEmailError('');
      
    }
  };



  const handleBlur = (e) => {
    const inputType = e.target.getAttribute("name");
    const inputValue = e.target.value;

    switch (inputType) {
      case "fullName":
        setFullNameError(inputValue ? "" : "Full Name is required");
        break;
      case "email":
        setEmailError(inputValue ? "" : "Email is required");
        break;
      case "message":
        setMessageError(inputValue ? "" : "Message is required");
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setFullNameError(fullName ? "" : "Full Name is required");
    setEmailError(email ? "" : "Email is required");
    setMessageError(message ? "" : "Message is required");

    if (!fullName || !email || !message) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }

    setErrorMessage("");

    console.log("Form submitted:", { fullName, email, message });

    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="formContainer">
      <div className="headerMessage">
        <p> Let's Collaborate!</p>
      </div>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={fullName}
          name="fullName"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Full Name"
        />
        {fullNameError && <p className="error-text">{fullNameError}</p>}
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={checkEmail}
          type="email"
          placeholder="Email"
        />
        {emailError && <p className="error-text">{emailError}</p>}
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Message"
        ></textarea>
        {messageError && <p className="error-text">{messageError}</p>}
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}


      <img src={kittylay}></img>
    </div>
  );
}
