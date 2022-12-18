import SummaryForm from '../SummaryForm';
import {fireEvent, render, screen} from '@testing-library/react';

test('initial conditions', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i
  });

  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i
  });

  expect(confirmButton).toBeDisabled();
});

test('Checkbox enables button on first click and disableds on second click', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i
  });
  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i
  });

  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
