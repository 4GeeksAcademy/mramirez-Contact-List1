import React from "react";
import "../../styles/addContact.css";
import { useState } from "react"

export const AddContact = () => {
    const [contactInfo, setContactInfo] = useState([]);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
  

    //FUNCIN GET
    const getAllContacts = () => {
      fetch('https://assets.breatheco.de/apis/fake/contact/agenda/mramirez-agenda')
        .then((response) => response.json())
        .then((data) => {
          setContactInfo(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    };
  

    //FUNCION POST
    const handleAddContacts = () => {
      const data = {
        "full_name": fullName,
        "email": email,
        "agenda_slug": "mramirez-agenda",
        "address": address,
        "phone": phone
    };
      fetch('https://assets.breatheco.de/apis/fake/contact/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          getAllContacts();
        });
    };
  
  return (
    <div className="container-fluid p-5">
      <div className="input-group mb-3">
      <label className="form-label">
          Full Name
        </label>
        <div className="input-group">
        <input 
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Full Name"
          aria-label="Name"
          aria-describedby="basic-addon1"
        />
        </div>
      </div>

      <div className="input-group mb-3">
      <label className="form-label">
          E-mail
        </label>
        <div className="input-group">
        <input
         onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="form-control"
          placeholder="E-mail"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          @example.com
        </span>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Phone
        </label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            #
          </span>
          <input
           onChange={(e) => setPhone(e.target.value)}
            type="number"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4"
          />
        </div>
      </div>

      <div className="input-group mb-3">
      <label className="form-label">
          Address
        </label>
        <div className="input-group">
        <input
         onChange={(e) => setAddress(e.target.value)}
          type="text"
          className="form-control"
          aria-label="Address"
          placeholder="Enter Address"
        />
        </div>
      </div>

      <div className="input-group-button">  
        <button type="submit" class="button" onClick={handleAddContacts}>
          <span class="button__text">Add Item</span>
          <span class="button__icon">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            viewBox="0 0 24 24" 
            stroke-width="2" 
            stroke-linejoin="round" 
            stroke-linecap="round" 
            stroke="currentColor" 
            height="24" 
            fill="none" 
            class="svg">
            <line 
              y2="19" 
              y1="5" 
              x2="12" 
              x1="12">
                </line>
            <line 
              y2="12" 
              y1="12" 
              x2="19" 
              x1="5">
                </line>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

