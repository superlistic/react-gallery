import React from 'react';
import renderer from 'react-test-renderer';
import { data } from '../mockData';

import Cardholder from './Cardholder';

test('renders elements', () => {
  const tree = renderer.create(<Cardholder apiResponse={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
