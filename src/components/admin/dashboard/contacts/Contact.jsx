import React, { useState } from "react";
import Modal from "react-modal";
import { contact, Map } from "../../data/Data";
import "./Board.css";
import MessagesPage from "./MessagesPage";

// EditContactModal component for editing contact information
const EditContactModal = ({ initialValue, onSave, onCancel }) => {
  const [text, setText] = useState(initialValue.text);
  const [to, setTo] = useState(initialValue.to);

  // Handler for text input change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Handler for 'to' input change
  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  // Handler for saving changes
  const handleSave = () => {
    onSave({ text, to });
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onCancel}
      contentLabel="Edit Contact Modal"
    >
      <div className="modal">
        <input
          className="contactInfoInput"
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Text"
        />
        <br />
        <input
          className="contactInfoInput"
          type="text"
          value={to}
          onChange={handleToChange}
          placeholder="To"
        />
        <div className="modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

// Contacts component for managing contact information
const Contacts = () => {
  // State variables for contact information
  const [location, setLocation] = useState({
    text: contact[0].text,
    to: contact[0].to,
    isEditing: false,
  });
  const [phone, setPhone] = useState({
    text: contact[1].text,
    to: contact[1].to,
    isEditing: false,
  });
  const [email, setEmail] = useState({
    text: contact[2].text,
    to: contact[2].to,
    isEditing: false,
  });
  const [map, setMap] = useState({
    text: Map.src,
    isEditing: false,
  });

  // Handler for editing contact information
  const handleEdit = (field) => {
    switch (field) {
      case "location":
        setLocation((prevLocation) => ({ ...prevLocation, isEditing: true }));
        break;
      case "phone":
        setPhone((prevPhone) => ({ ...prevPhone, isEditing: true }));
        break;
      case "email":
        setEmail((prevEmail) => ({ ...prevEmail, isEditing: true }));
        break;
      case "map":
        setMap((prevMap) => ({ ...prevMap, isEditing: true }));
        break;
      default:
        break;
    }
  };

  // Handler for saving contact information
  const handleSave = (field, editedContact) => {
    switch (field) {
      case "location":
        setLocation({ ...editedContact, isEditing: false });
        break;
      case "phone":
        setPhone({ ...editedContact, isEditing: false });
        break;
      case "email":
        setEmail({ ...editedContact, isEditing: false });
        break;
      case "map":
        setMap({ ...editedContact, isEditing: false });
        break;
      default:
        break;
    }
  };

  // Handler for cancelling editing contact information
  const handleCancel = (field) => {
    switch (field) {
      case "location":
        setLocation((prevLocation) => ({ ...prevLocation, isEditing: false }));
        break;
      case "phone":
        setPhone((prevPhone) => ({ ...prevPhone, isEditing: false }));
        break;
      case "email":
        setEmail((prevEmail) => ({ ...prevEmail, isEditing: false }));
        break;
      case "map":
        setMap((prevMap) => ({ ...prevMap, isEditing: false }));
        break;
      default:
        break;
    }
  };

  // Handler for input change
  const handleInputChange = (field, e) => {
    const newValue = e.target.value;
    switch (field) {
      case "location":
        setLocation((prevLocation) => ({ ...prevLocation, text: newValue }));
        break;
      case "phone":
        setPhone((prevPhone) => ({ ...prevPhone, text: newValue }));
        break;
      case "email":
        setEmail((prevEmail) => ({ ...prevEmail, text: newValue }));
        break;
      case "map":
        setMap((prevMap) => ({ ...prevMap, src: newValue }));
        break;
      default:
        break;
    }
  };

  return (
    <div className="contact-admin" style={{ fontSize: "16px" }}>
      <h1 className="header-text">Contact Info</h1>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Contact Type</th>
            <th>Text</th>
            <th>Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Location</td>
            <td>
              {location.isEditing ? (
                <EditContactModal
                  initialValue={location}
                  onSave={(editedContact) =>
                    handleSave("location", editedContact)
                  }
                  onCancel={() => handleCancel("location")}
                />
              ) : (
                <span>{location.text}</span>
              )}
            </td>
            <td>
              {location.isEditing ? (
                <EditContactModal
                  initialValue={location}
                  onSave={(editedContact) =>
                    handleSave("location", editedContact)
                  }
                  onCancel={() => handleCancel("location")}
                />
              ) : (
                <span>{location.to}</span>
              )}
            </td>
            {!location.isEditing && (
              <td>
                <button onClick={() => handleEdit("location")}>Edit</button>
              </td>
            )}
          </tr>
          <tr>
            <td>Phone</td>
            <td>
              {phone.isEditing ? (
                <EditContactModal
                  initialValue={phone}
                  onSave={(editedContact) => handleSave("phone", editedContact)}
                  onCancel={() => handleCancel("phone")}
                />
              ) : (
                <span>{phone.text}</span>
              )}
            </td>
            <td>
              {phone.isEditing ? (
                <EditContactModal
                  initialValue={phone}
                  onSave={(editedContact) => handleSave("phone", editedContact)}
                  onCancel={() => handleCancel("phone")}
                />
              ) : (
                <span>{phone.to}</span>
              )}
            </td>
            {!phone.isEditing && (
              <td>
                <button onClick={() => handleEdit("phone")}>Edit</button>
              </td>
            )}
          </tr>
          <tr>
            <td>Email</td>
            <td>
              {email.isEditing ? (
                <EditContactModal
                  initialValue={email}
                  onSave={(editedContact) => handleSave("email", editedContact)}
                  onCancel={() => handleCancel("email")}
                />
              ) : (
                <span>{email.text}</span>
              )}
            </td>
            <td>
              {email.isEditing ? (
                <EditContactModal
                  initialValue={email}
                  onSave={(editedContact) => handleSave("email", editedContact)}
                  onCancel={() => handleCancel("email")}
                />
              ) : (
                <span>{email.to}</span>
              )}
            </td>
            {!email.isEditing && (
              <td>
                <button onClick={() => handleEdit("email")}>Edit</button>
              </td>
            )}
          </tr>
        </tbody>
      </table>
      <MessagesPage />
      <div className="map-admin">
        <h1 className="header-text">Map link</h1>
        {map.isEditing ? (
          <EditContactModal
            initialValue={map}
            onSave={(editedContact) => handleSave("map", editedContact)}
            onCancel={() => handleCancel("map")}
          />
        ) : (
          <span className="Map-span">{map.text}</span>
        )}
        {!map.isEditing && (
          <button onClick={() => handleEdit("map")}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Contacts;
