// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('renders static text in BookingForm', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);

  // Check for static text
  const headingElement = screen.getByText("Table Reservation");
  expect(headingElement).toBeInTheDocument();

  const dateLabel = screen.getByText("Choose date");
  expect(dateLabel).toBeInTheDocument();

  const timeLabel = screen.getByText("Choose time");
  expect(timeLabel).toBeInTheDocument();

  const guestsLabel = screen.getByText("Number of guests");
  expect(guestsLabel).toBeInTheDocument();

  const occasionLabel = screen.getByText("Occasion");
  expect(occasionLabel).toBeInTheDocument();

  const specialRequestsLabel = screen.getByText("Special Requests");
  expect(specialRequestsLabel).toBeInTheDocument();

  const submitButton = screen.getByText("Make your reservation");
  expect(submitButton).toBeInTheDocument();
});


