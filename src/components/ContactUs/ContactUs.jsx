import React, { useState } from "react";
import "./ContactUs.css";
import ContactBanner from "./Images/contact-banner.jpg";
const ContactUs = () => {
  const contacts = [
    {
      title: "India",
      desc: "C202, Sai Paradise, Pune Bangalore Highway, Pune, MH, India",
    },
    {
      title: "Philippines",
      desc: "Manila",
    },
    {
      title: "Phone No",
      desc: "Mobile: +91 8767012918",
    },
    {
      title: "Email",
      desc: <a href="mailto:abc@gmail.com">abc@gmail.com</a>,
    },
  ];

  const inputs = [
    {
      placeholder: "Full Name",
      type: "text",
      icon: <i class="fa-regular fa-user"></i>,
    },
    {
      placeholder: "Email Address",
      type: "email",
      icon: <i class="fa-regular fa-envelope"></i>,
    },
    {
      placeholder: "Telephone",
      type: "number",
      icon: <i class="fa-solid fa-mobile"></i>,
    },
  ];

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const submitHandler = () => {
    if (
      formState.name.length === 0 ||
      formState.email.length === 0 ||
      formState.mobile.length === 0 ||
      formState.message.length === 0
    ) {
      console.log("please enter all the details");
      return;
    }
    setFormState({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };
  return (
    <div className="main-contact-us-cont">
      <img className="contact-us-bg-image" src={ContactBanner} alt=""></img>

      <div className="left-contact-us">
        <h1 style={{ paddingBottom: "2rem" }}>Call Today for Advice</h1>
        {contacts.map((ele, key) => (
          <div key={key} className="contact-ele">
            <h3>{ele.title}</h3>
            <p>{ele.desc}</p>
          </div>
        ))}
      </div>
      <div className="right-contact-us">
        <h1>Get In Touch With Us</h1>
        <div className="contact-inputs">
          {inputs.map((ele, key) => (
            <div key={key}>
              <input
                type={ele.type}
                value={
                  ele.placeholder === "Full Name"
                    ? formState.name
                    : ele.placeholder === "Email Address"
                    ? formState.email
                    : formState.mobile
                }
                placeholder={ele.placeholder}
                onChange={(e) => {
                  ele.placeholder === "Full Name"
                    ? setFormState({ ...formState, name: e.target.value })
                    : ele.placeholder === "Email Address"
                    ? setFormState({ ...formState, email: e.target.value })
                    : setFormState({ ...formState, mobile: e.target.value });
                }}
              />
              {ele.icon}
            </div>
          ))}
        </div>
        <textarea
          cols="30"
          rows="10"
          placeholder="Message"
          style={{ resize: "none", fontSize: "1rem", fontWeight: 550 }}
          value={formState.message}
          onChange={(e) => {
            setFormState({ ...formState, message: e.target.value });
          }}
        />
        <button onClick={submitHandler}>Send</button>
      </div>
    </div>
  );
};

export default ContactUs;
