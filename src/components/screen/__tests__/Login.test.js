import 'react-native';
import React from 'react';
import Login from '../Login';

import renderer from 'react-test-renderer';
import {shallow, render} from 'enzyme';

describe('rendering test', () => {
  const wrapper = shallow(<Login {...props} />);
  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
