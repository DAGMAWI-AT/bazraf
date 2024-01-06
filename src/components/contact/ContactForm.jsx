import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
    color: var(--primaryColor);
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--primaryBackground);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea:focus {
    cursor: text;
    border-color: blue;
    color: #000;
    background-color: rgba(241, 241, 241, 0.7);
    border-color: #333333;
    box-shadow: inset  5px 5px   5px rgba(0, 0, 0, 0.8);
  }
  input:focus {
    cursor: text;
    border-color: blue;
    color: #000;
    background-color: rgba(241, 241, 241, 0.7);
    border-color: #333333;
    box-shadow: inset  5px 5px   5px rgba(0, 0, 0, 0.8);
  }
  textarea {
    min-height: 280px;
    resize: vertical;
  }
  button[type='submit'] {
    
    color: var(--primaryColor);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: var(--primaryColor);
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    background-color: var(--deep-dark);
    box-shadow: -5px -5px 5px rgba(104, 103, 103, 0.479);
   
  }
  button[type='submit']:hover{
    border: #000;
    background-color: var(--secondayBackground);
  outline: none;
   box-shadow:inset 0 0   5px 5px rgba(255, 251, 1, 0.31); 
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
             Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
             Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
             message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </FormStyle>
    </>
  );
}