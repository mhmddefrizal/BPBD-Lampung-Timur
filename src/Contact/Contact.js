import React from "react";
import axios from "axios";
import "./Contact.css";

export const Contact = (params) => {
  return (
    <div>
      <h1 className="contact">Contact Us</h1>
      <iframe
        className="lokasi"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.357356906315!2d105.52245381412662!3d-5.045679852699176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40909870e6b2bd%3A0x7989854291c04b05!2sBPBD%20Lampung%20Timur!5e0!3m2!1sid!2sid!4v1645604083856!5m2!1sid!2sid"
        width="50%"
        height="500"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};
