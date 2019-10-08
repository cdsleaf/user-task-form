import {
  getInitialData,
  saveNewUser,
} from './../util/api';

import {
  receiveUsers,
  addUser
} from './users';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tasks }) => {
      dispatch(receiveUsers(users));
    });
  }
}

export function addNewUser(user) {
  return (dispatch) => {
    return saveNewUser(user).then(res => {
      dispatch(addUser(res));
    });
  }
}