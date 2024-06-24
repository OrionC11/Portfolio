import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Optionally reset field's error message upon change
    if (formErrors[name]) setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Validate Name
    if (!formData.name) errors.name = "Name is required";

    // Validate Email
    if (!formData.email) errors.email = "Email is required";
    else if (!validateEmail(formData.email))
      errors.email = "Invalid email address";

    // Validate Message
    if (!formData.message) errors.message = "Message is required";

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form data:", formData);
    }
  };
  return (
    <div className="contactSection">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contactForm">
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {formErrors.name && <p>{formErrors.name}</p>}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {formErrors.email && <p>{formErrors.email}</p>}
        </div>
        <div>
          <label>Message: </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleChange}
          ></textarea>
          {formErrors.message && <p>{formErrors.message}</p>}
        </div>
        <button type="submit">Submit{"  "}</button>
      </form>
      <p className="contactInfo">
        Email:{"  "}
        <a href="mailto:orion.m.cannon@gmail.com" target="_blank">
          orion.m.cannon@gmail.com{" "}
        </a>
        <br />
        Phone:{"  "}
        <a href="tel:4806206224" target="_blank">
          4806206224{"  "}
        </a>
        <br />
        LinkedIn:{"  "}
        <a
          href="https://www.linkedin.com/in/orion-cannon-072613160/"
          target="_blank"
        >
          Orion-Cannon{"  "}
        </a>
        <br />
        Github:{"  "}
        <a href="https://github.com/OrionC11" target="_blank">
          {" "}
          OrionC11{"  "}
        </a>
      </p>
    </div>
  );
};

export default Contact;
