import { render, screen } from '@testing-library/react';
import App from './App.js';
//import Register from '../src/common/Register';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('Renders Sign-up page', () => {
//   render(<Register />);
//   const linkElement = screen.getByText(/Register/i);
//   expect(linkElement).toBeInTheDocument();
// });
