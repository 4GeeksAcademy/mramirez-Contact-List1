import React, { useState, useEffect } from "react";
import "../../styles/home.css";

import { BsPinMap } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { BiPencil } from "react-icons/bi";

export const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/contact/agenda/mramirez-agenda")
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.log(error));
  }, []);

  const deleteContact = (contactId) => {
    fetch(`https://assets.breatheco.de/apis/fake/contact/${contactId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(() => {
        const updatedContacts = contacts.filter(contact => contact.id !== contactId);
        setContacts(updatedContacts);
      })
      .catch(error => console.log(error));
  };
  

  return (
    <div className="container-contact">
      {contacts.length === 0 ? (
        <h2>No hay contactos disponibles</h2>
      ) : (
        contacts.map(contact => (
          <div className="row" key={contact.id}>
            <div className="col-3">
              <img src="https://peru21.pe/resizer/yNu6EZADMOnCY-YGevBD84tCoSM=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6RDFP4F6QNCN7FYPLOTLM2IQ5M.jpg" />
            </div>
            <div className="col-9">
                <div className="p-3">
                    <h4>{contact.full_name}</h4>
                </div>
              <div className="grid row-gap-3">
                  <p className="body-address"><BsPinMap /> {contact.address}</p>
                  <p className="body-phone"><AiOutlinePhone /> {contact.phone}</p>
                  <p className="body-email"><FiMail /> {contact.email}</p>
              </div>
              <div className="grid g-col-6">
                  <button 
                      type="button" 
                      class="btn btn-secondary">
                         Edit <BiPencil />
                  </button>
                  <button 
                      onClick={() => deleteContact(contact.id)}
                      type="button" 
                      class="btn btn-danger">
                         Delete <MdDelete />
                  </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
        }