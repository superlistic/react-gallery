import React from 'react';
import Pagination from './Pagination';
import renderer from 'react-test-renderer';

test('renders elements', () => {
  const tree = renderer.create(<Pagination />).toJSON();
  expect(tree).toMatchSnapshot();
});
