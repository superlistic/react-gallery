import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { Card } from './Cardholder/Card';
import { data } from './mockData';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const image = data.results[8];

const server = setupServer(
  rest.get('/search/photo', (req, res, ctx) => {
    return res(ctx.json(data));
  })
);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

afterEach(cleanup);

test('renders elements', () => {
  const { getByText } = render(<App />);
  expect(getByText(/nav/i)).toBeInTheDocument();
  expect(getByText(/Pagination/i)).toBeInTheDocument();
});

test('<Card />', () => {
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

test('<Search />', async () => {
  render(<App />);
  const textbox = screen.getByRole('combobox');
  const button = screen.getByRole('button');
  expect(textbox).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  fireEvent.change(textbox, { target: { value: 'dog' } });
  fireEvent.submit(screen.getByRole('button'));
  expect(textbox.value).toEqual('dog');
});
