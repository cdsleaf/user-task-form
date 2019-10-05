import React from 'react';
import styled from 'styled-components';

const UserDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  border: 0.1rem solid black;
  border-radius: 1rem;
  padding: 1rem;
  background: lightskyblue;
  font-weight: bold;
  font-size: 1rem;

  button {
    font-size: inherit;
    border-radius: 0.1rem;
  }
`;

export default function User (props) {
  const { firstName, lastName } = props;
  return (
    <UserDiv>
      <span>{`${firstName} ${lastName}`}</span>
      <button>Task</button>
    </UserDiv>
  )
} 