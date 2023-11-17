// import necessary react testing library helpers here
// import the Counter component here
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter.js';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText("0");
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen.getByText("+");
  const count = screen.getByText("0");
  fireEvent.click(increment);
  expect(count).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = screen.getByText("-");
  const count = screen.getByText("0");
  fireEvent.click(decrement);
  expect(count).toHaveTextContent("-1");
});
