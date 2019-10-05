import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import User from './User';
import { handleInitialData } from './../actions/shared';

const AppDiv = styled.div`
  margin: 1rem;
`;

function App() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const userIds = Object.keys(users);

  useEffect(() => {
    if(userIds.length === 0){
      dispatch(handleInitialData());
    }
  });

  return (
    <AppDiv>
      <h1>User Task Form</h1>
      <hr />
      {userIds.map(id => (
        <User 
          key={id} 
          firstName={users[id].firstName}
          lastName={users[id].firstName} 
        />
      ))}
    </AppDiv>
  );
}

export default App;
