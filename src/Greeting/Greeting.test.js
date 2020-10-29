import Greeting from './Greeting';
import React from 'react';
import renderer from 'react-test-renderer';

test('renders elements', () => {
  const tree = renderer.create(<Greeting />).toJSON();
  expect(tree).toMatchSnapshot();
});
