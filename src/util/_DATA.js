let users = {
  pfueghf8kr9v245azrmuda: {
    id: 'pfueghf8kr9v245azrmuda',
    firstName: 'Sarah',
    lastName: 'Edo',
    email: 'sarah@gmail.com',
    mobile: '0221234746',
    tasks: [
      "8xf0y6ziyjabvozdd253nd",
      "6ni6ok3ym7mf1p33lnez",
      "am8ehyc8byjqgar0jgpub9",
      "loxhs1bqm25b708cmbf3g"
    ]
  },
  ueze2f2907heenrx7ygchc: {
    id: 'ueze2f2907heenrx7ygchc',
    firstName: 'Tyler',
    lastName: 'McGinnis',
    email: 'tyler@gmail.com',
    mobile: '0232347863',
    tasks: [
      "vthrdm985a262al8qx3do"
    ]
  },
  rnrbgy1p9b3975vpavuwl: {
    id: 'rnrbgy1p9b3975vpavuwl',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    mobile: '0232897343',
    tasks: [
      "xj352vofupe1dqz9emx13r"
    ]
  }
};

let tasks = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    taskName: 'Task1',
    assignee: 'pfueghf8kr9v245azrmuda',
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    taskName: 'Task2',
    assignee: 'pfueghf8kr9v245azrmuda',
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    taskName: 'Task3',
    assignee: 'pfueghf8kr9v245azrmuda',
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    taskName: 'Task4',
    assignee: 'pfueghf8kr9v245azrmuda',
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    taskName: 'Task5',
    assignee: 'ueze2f2907heenrx7ygchc',
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    taskName: 'Task6',
    assignee: 'rnrbgy1p9b3975vpavuwl',
  },
};

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000);
  });
}

export function _getTasks() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...tasks}), 1000);
  });
}

export function _addNewUser({ firstName, lastName, email, mobile }) {
  return new Promise((res, rej) => {

    const newId = generateUID();
    const newUser = {
      id: newId,
      firstName,
      lastName,
      email,
      mobile,
      tasks: []
    };

    setTimeout(() => {
      users = {
        ...users,
        [newId]: newUser
      }
      res(newUser);
    }, 1000)
  });
}

export function _addNewTask({ taskName, assignee }) {
  return new Promise((res, rej) => {

    const newId = generateUID();
    const newTask = {
      id: newId,
      taskName,
      assignee
    };

    setTimeout(() => {
      users = {
        ...users,
        [assignee]: {
          ...users[assignee],
          tasks: users[assignee].tasks.concat([newId])
        }
      }

      tasks = {
        ...tasks,
        [newId]: newTask
      }
      res(newTask);
    }, 1000)
  })
}