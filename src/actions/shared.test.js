import {
  handleInitialData
} from './shared';

import {
  RECEIVE_USERS
} from './users'

it('Should create an action to set the initial Data (user List)', () => {
  let returnObject = {};
  const mockDispatch = jest.fn( v => returnObject = { ...returnObject, [v.type]: v});
  return handleInitialData()(mockDispatch)
    .then(() => {
      expect(returnObject).toHaveProperty(RECEIVE_USERS);
    })
});