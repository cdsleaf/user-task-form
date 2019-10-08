import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import User from './User';
import { 
  handleInitialData,
  addNewUser,
} from './../actions/shared';
import NewUser from './NewUser';

const BackDrop = styled.div`
  position: fixed;
  display: ${props => props.open ? "block" : "none"};
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const AppDiv = styled.div`
  margin: 1rem;
`;

const HeadButtons = styled.div`
  border-bottom: 0.1rem solid grey;
  padding-bottom: 0.5rem;
  overflow: hidden;

  button {
    float: right;
  }
`;

const PopUp = styled.div`
  position: fixed;
  display: ${props => props.open ? "block" : "none"};
  top: 0;
  right: 0;
  z-index: 101;
  width: 30%;
  height: 100vh;
  background: white;
`;

const PopUpHeadButton = styled.div`
  margin: 0.5rem;
  overflow: hidden;

  button {
    float: right;
  }
`;

const App = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const userIds = Object.keys(users);

  useEffect(() => {
    if(userIds.length === 0){
      dispatch(handleInitialData());
    }
  });

  const handleSubmitNewUser = (newUser) => {
    dispatch(addNewUser(newUser));
  }

  const openPopUp = () => setOpen(!open); 
  
  return (
    <React.Fragment>
      <BackDrop open={open} onClick={openPopUp}/>
      <AppDiv>
        <h1>User Task Form</h1>
        <HeadButtons>
          <button onClick={openPopUp}>Add User</button>
        </HeadButtons>
        {userIds.map(id => (
          <User 
            key={id} 
            firstName={users[id].firstName}
            lastName={users[id].lastName} 
          />
        ))}
      </AppDiv>
      <PopUp open={open}>
        <PopUpHeadButton>
          <button onClick={openPopUp}>Close</button>
        </PopUpHeadButton>
        <NewUser handleSubmitNewUser={handleSubmitNewUser}/>
      </PopUp>
    </React.Fragment>
  );
}

export default App;
