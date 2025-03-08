import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../../firebase"; 
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "leads"), formData);
      setNotification("Submitted successfully! We will get in touch with you soon.");
      setFormData({ fname: "", lname: "", email: "", phone: "", message: "" }); // Clear form after submit
    } catch (error) {
      console.error("Error adding lead:", error);
    }
  };

  const dismissNotification = () => {
    setNotification("");
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 flex gap-8 rounded relative shadow-lg w-[90%] sm:w-[50%] lg:w-[40%]" role="alert">
          <span className="block sm:inline">{notification}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={dismissNotification}>
            <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 5.652a.5.5 0 00-.707 0L10 9.293 6.36 5.652a.5.5 0 10-.707.707L9.293 10l-3.64 3.64a.5.5 0 00.707.707L10 10.707l3.64 3.64a.5.5 0 00.707-.707L10.707 10l3.64-3.64a.5.5 0 000-.707z"/>
            </svg>
          </span>
        </div>
      )}
      <div className="form-part border-4 border-orange-500 border-b-blue-500 p-6 my-2 rounded-lg shadow-lg bg-white w-[90%] sm:w-[50%] lg:w-[40%]">
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="form-details text-center">
              <h1 className="text-2xl font-bold mb-4">Let's Connect with Us</h1>
              <div className="name mb-4">
                <div className="input flex gap-4">
                  <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    value={formData.fname}
                    onChange={handleChange}
                    className="w-1/2 p-2 border rounded"
                    required
                  />
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    value={formData.lname}
                    onChange={handleChange}
                    className="w-1/2 p-2 border rounded"
                    required
                  />
                </div>
              </div>
              <div className="name mb-4">
                <div className="input flex gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-1/2 p-2 border rounded"
                    required
                  />
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-1/2 p-2 border rounded"
                    required
                  />
                </div>
              </div>
              <div className="name mb-4">
                <div className="input">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="name">
                <div className="input text-center">
                  <input
                    type="submit"
                    value="Submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="map mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7340.129136832227!2d77.50634463731967!3d23.09473208553464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c47b6d656d071%3A0xa4ae9a9957a321eb!2sShiv%20vatika%20Patel%20Nagar%20Mandideep!5e0!3m2!1sen!2sin!4v1741354674279!5m2!1sen!2sin"
          width="800"
          height="600"
          className="w-[85vw] h-[70vh] border-2 border-orange-500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default Contact;
