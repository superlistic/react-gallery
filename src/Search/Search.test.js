import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Search from './Search';
import React from 'react';
import renderer from 'react-test-renderer';

test('renders elements', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Switch>
          <Route exact path="/search">
            <Search setSearchTerm={() => {}} />{' '}
          </Route>{' '}
        </Switch>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
