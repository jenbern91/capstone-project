import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('BookingForm can be submitted by the user', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2023-10-01' } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '18:00' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });
  fireEvent.change(screen.getByLabelText(/special requests/i), { target: { value: 'Window seat' } });

  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

  // Check if submitForm was called with the correct data
  expect(submitForm).toHaveBeenCalledWith({
    date: '2023-10-01',
    time: '18:00',
    guests: '4',
    occasion: 'Birthday',
    requests: 'Window seat'
  });
});