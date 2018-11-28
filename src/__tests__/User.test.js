import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { User } from '../components/User';

Enzyme.configure({ adapter: new Adapter() });

describe('<User/>', () => {
  let wrapper;

  it('when render for the first time, should be empty', () => {
    wrapper = shallow(<User/>);
    expect(wrapper.find('p').text()).toEqual('');
    
  });
});