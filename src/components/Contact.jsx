import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import "./contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    alert("Form Submitted Successfully");

    emailjs
      .sendForm(
        "service_bidfgip",
        "template_2n4to03",
        form.current,
        "3YG2kJvh66VT-tTqA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactform">
      <h2>Contact Us</h2>
      <div className="contat-main">
         
        <div className="contact-in">
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              type="text"
              name="from_name"
              required
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              type="email"
              name="from_email"
              required
            />

            <TextField
              id="standard-multiline-flexible"
              label="Message"
              multiline
              maxRows={4}
              variant="standard"
              type="text"
              name="message"
              required
            />

            <input className="send-but" type="submit" value="Send" />
          </form>
        </div>
        <div className="cont-info">
          <p> +91 952-754-7716</p>
          <p> rupeshborkar14@gmail.com</p>

        </div>
      </div>
    </div>
  );
}
