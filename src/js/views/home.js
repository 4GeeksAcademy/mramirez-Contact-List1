import React, { useState, useEffect } from "react";
import "../../styles/home.css";

import { BsPinMap } from "react-icons/bs"
import { AiOutlinePhone } from "react-icons/ai"
import { FiMail } from "react-icons/fi"

export const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/contact/agenda/mramirez-agenda")
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container-contact">
      {contacts.map(contact => (
        <div className="contact-card">
          <div className="contact-image">
            <img src={contact.image} />
          </div>
        <div className="row" key={contact.id}>
          <div className="col">
            <div className="p-3">
              <h4>{contact.full_name}</h4>
            </div>
            <div className="grid row-gap-3">
              <p className="body-address"><BsPinMap /> {contact.address}</p>
              <p className="body-phone"><AiOutlinePhone /> {contact.phone}</p>
              <p className="body-email"><FiMail /> {contact.email}</p>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
)};
        
