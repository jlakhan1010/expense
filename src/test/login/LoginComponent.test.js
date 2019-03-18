import React from 'react';
import { shallow } from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../../login/LoginComponent';

(enzyme).configure({ adapter: new Adapter() })
const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};

export default shallowWithStore;

describe("Login component", () => {
    it("Should match snapshot", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });
});

