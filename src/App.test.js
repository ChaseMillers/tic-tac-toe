import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// UNit Testing
test('renders 9 empty buttons', () => {
  render(<App />);
  
  const buttonsArray = screen.getAllByRole('button', {name:''})
  expect(buttonsArray.length).toEqual(9);
});


test('Checks that string is cappitalised', () => {
  render(<App />);
  
  const input = screen.getByLabelText(/Enter a value/i)
  userEvent.type( input, "hello world") 

  const output = screen.getByText("HELLO WORLD")

  expect(output).toHaveTextContent("HELLO WORLD")

});
