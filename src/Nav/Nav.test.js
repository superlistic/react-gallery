import Nav from './Nav';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

test('renders elements', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Switch>
        <Route exact path="/search">
          <Nav />
          ).toJSON();
        </Route>{' '}
      </Switch>
    </BrowserRouter>
  );

  expect(tree).toMatchSnapshot();
});
