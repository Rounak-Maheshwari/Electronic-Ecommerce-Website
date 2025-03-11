import { useRef, useState } from "react";

function ContactForm() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  let [status, setStatus] = useState("");
  function handleChange(event) {
    let { name, value } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setStatus("Your message has been sent! we will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setTimeout(() => {
      setStatus("");
    }, 5000);
  }
  return (
    <>
      <div className="contact-form">
        <h3 className="form-heading">contact form</h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Name"
            className="username"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Enter a valid e-mail address"
            className="usermail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            id="message"
            rows={4}
            className="message"
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {status && <p className="status">{status}</p>}
          <button className="submit-form">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
