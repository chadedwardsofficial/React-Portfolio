import "../../styles/contact.css";
import { useState } from "react";
import { checkPassword, validateEmail } from "../utils/helpers";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !message) {
      setErrorMessage("Please fill out the Full Name and Message fields.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }

    setErrorMessage("");

   
    console.log("Form submitted:", { fullName, email, message });

    // Clear input fields after submission
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
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Message"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
