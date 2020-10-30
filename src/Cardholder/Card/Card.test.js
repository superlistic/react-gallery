import '@testing-library/jest-dom/extend-expect';
import Card from './Card';
import React from 'react';
import renderer from 'react-test-renderer';
import { data } from '../../mockData';
const image = data.results[8];

test('renders elements', () => {
  const tree = renderer.create(<Card image={image} />).toJSON();
  expect(tree).toMatchSnapshot();
});
