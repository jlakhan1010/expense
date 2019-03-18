import React from 'react';
import { shallow, mount, render } from 'enzyme';
//import renderer from 'react-test-renderer';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import Try from './try';

(enzyme).configure({ adapter: new Adapter() });

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<Try />).contains(<div className="test">Hello</div>)).toBe(true);
  });

  it('should be selectable by class "test"', function() {
    expect(shallow(<Try />).is('.test')).toBe(true);
  });


  it('should render to static HTML', function() {
    expect(render(<Try />).text()).toEqual('Hello');
  });
});
