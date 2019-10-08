import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  div {
    margin: 1rem;
  }
  label {
    display: inline-block;
    width: 5.5rem;
  }
  input[type='submit'] {
    width: 10rem;
  }
`;

export default function NewUser(props){

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const { handleSubmitNewUser } = props;

  const handleSubmit = event => {
    event.preventDefault();

    handleSubmitNewUser({
      firstName, lastName, mobile, email
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <legend>New User Information: </legend>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input 
            type="text" 
            id="firstName" 
            value={firstName} 
            onChange={({ target }) => setFirstName(target.value)} 
            required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input 
            type="text" 
            id="lastName" 
            value={lastName} 
            onChange={({ target }) => setLastName(target.value)}
            required />
        </div>
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input 
            type="tel"
            id="mobile"
            value={mobile}
            onChange={({ target }) => setMobile(target.value)} />
        </div>
        <div>
          <label htmlFor="email">e-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)} />
        </div>
        <input type="submit" value="Submit" />
      </fieldset>
    </Form>
  );
}