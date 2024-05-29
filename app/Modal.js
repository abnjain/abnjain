import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close cursor-pointer" onClick={onClose}>&times;</span><br /><br />
            <p className="mb-4 text-sm font-bold text-center">Provide your details to send<br /> me a quick email</p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="mb-4 px-4 py-2 rounded-lg text-center focus:outline-none focus:border-blue-500 focus:underline"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="mb-4 px-4 py-2 rounded-lg text-center focus:outline-none focus:border-blue-500 focus:underline"
              />
              <input
              type="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Custom Message"
              className="mb-4 px-4 py-2 rounded-lg text-center focus:outline-none focus:border-blue-500 focus:underline"
            />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
