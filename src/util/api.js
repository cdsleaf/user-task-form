import {
  _getUsers,
  _getTasks,
  _addNewUser,
  _addNewTask,
} from './_DATA';

export function getUsers(){
  return _getUsers();
}

export function getInitialData(){
  return Promise.all([_getUsers(), _getTasks()])
  .then(([users, tasks]) => ({ users, tasks }));
}

export function saveNewUser(newUser) {
  return _addNewUser(newUser);
}

export function saveNewTask(newTask) {
  return _addNewTask(newTask);
}