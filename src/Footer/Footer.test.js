import Footer from './Footer';
import React from 'react';
import renderer from 'react-test-renderer';

test('renders elements', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
