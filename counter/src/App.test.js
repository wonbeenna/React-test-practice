import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('Counter starts at 0', () => {
  render(<App />);
  // screen object로 원하는 엘리멘트에 접근(ID)
  const counterElement = screen.getByTestId('counter');
  // id가 counter인 엘리멘트의 텍스트가 0인가?
  expect(counterElement).toHaveTextContent(0);
});

test('Minus Button', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('minus-button');
  expect(buttonElement).toHaveTextContent('-');
});

test('Plus Button', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  expect(buttonElement).toHaveTextContent('+');
});

test('When the + button is pressed, the counter change to 1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  // 버튼 클릭
  fireEvent.click(buttonElement);
  // plus 버튼 클릭시 counter 엘리먼트는 1
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(1);
});

test('When the - button is pressed, the counter change to -1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('minus-button');
  // 버튼 클릭
  fireEvent.click(buttonElement);
  // minus 버튼 클릭시 counter 엘리먼트는 -1
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(-1);
});

test('on/off button has blue color', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('on/off-button');
  expect(buttonElement).toHaveStyle({backgroundColor: 'blue'});
});

test('Prevent -,+ button from being pressed when the on/off button is clicked', () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId('on/off-button');
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId('plus-button');
  const minusButtonElement = screen.getByTestId('minus-button');
  expect(plusButtonElement).toBeDisabled();
  expect(minusButtonElement).toBeDisabled();
});
