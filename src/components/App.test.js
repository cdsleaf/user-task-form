import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

describe('App ', () => {

  const mockStore = configureStore([thunk]);
  let store, wrapper;
  
  it('renders without crashing', () => {

    store = mockStore({users: {}});
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(wrapper.exists('h1')).toEqual(true);
  });

  it('when redux Store retrieved user data from the server, it should render User Component.', () => {
    
    store = mockStore({users: 
      {'testUserId': 
        {
          id: 'testUserId',
          firstName: 'first',
          lastName: 'last',
        }
      }
    });
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(wrapper.exists('User')).toEqual(true);
  });
});


