import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FetchButton} from '../components/FetchButton';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  isFetching: false
};

describe('<FetchButton/>', () => {
  let wrapper;
  it('should have `get user` text', () => {
    wrapper = shallow(<FetchButton isFetching={false}/>);
    expect(wrapper.text()).toEqual('Get User');
  });

  it('should change the text', () => {
    wrapper = shallow(<FetchButton isFetching={true} />);
    expect(wrapper.text()).toEqual('Fetching...');
  });
});