import React from 'react';
import User from './User';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<User />);
});
