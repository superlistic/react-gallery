import {
  render,
  screen,
  fireEvent,
  // waitFor,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { Card } from './Cardholder/Card';
import { data } from './mockData';
import { rest } from 'msw';
import { setupServer } from 'msw-node';

const image = data.results[8];

const api = {
  search: () => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  },
};

afterEach(cleanup);

test('renders elements', () => {
  const { getByText } = render(<App api={api} />);
  expect(getByText(/nav/i)).toBeInTheDocument();
  expect(getByText(/Pagination/i)).toBeInTheDocument();
});

test('<Card /> ', () => {
  render(<Card image={image} />);
  const img = screen.getByTestId(`image_${image.id}`);
  const card = screen.getByTestId(`card_${image.id}`);
  expect(img).not.toBeNull();
  expect(img.src).toEqual(image.urls.regular);
  fireEvent.click(card);
  expect(
    screen.getByText(/Crouching Tiger, Hidden Dragon/)
  ).toBeInTheDocument();
});

test('<Search />', () => {
  render(<App api={api} />);
  const textbox = screen.getByRole('textbox');
  const button = screen.getByRole('button');
  expect(textbox).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  fireEvent.change(textbox, { target: { value: 'dog' } });
  // waitFor(() => {
  //   fireEvent.click(button);
  // })
  //   .then(() => {
  //     console.log('then');
  //   })
  //   .catch(() => {
  //     console.log('hello?');
  //   });
});
