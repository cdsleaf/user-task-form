import React from 'react';
import NewUser from './NewUser';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const component = shallow(<NewUser />);

  expect(component).toMatchSnapshot();  
});
