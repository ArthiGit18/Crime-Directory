import React, { useState } from "react";
import { Rating } from "@mui/material"; // We will still use MUI Rating for stars
import { Star } from "@mui/icons-material";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [field, setField] = useState("");
  const [description, setDescription] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label className="input-label">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-input"
          required
        />
        
        <label className="input-label">Field</label>
        <input
          type="text"
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="contact-input"
          required
        />

        <label className="input-label">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="contact-textarea"
          required
        />

        <label className="input-label">Contact Number</label>
        <input
          type="tel"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="contact-input"
          required
        />

        <label className="input-label">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-input"
          required
        />

        <div className="rating-container">
          <label>Ratings</label>
          <Rating
            name="rating"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
            max={5}
            icon={<Star fontSize="inherit" />}
            emptyIcon={<Star fontSize="inherit" sx={{color: "red"}} />}
            className="rating-stars"
          />
        </div>

        <button type="submit" className="contact-submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactSection;
