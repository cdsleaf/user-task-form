import {
  getInitialData,
} from './../util/api';

import {
  receiveUsers
} from './users';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tasks }) => {
      dispatch(receiveUsers(users));
    });
  }
}