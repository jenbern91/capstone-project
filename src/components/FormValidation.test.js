import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
    test('renders BookingForm component', () => {
        render(<BookingForm />);
        expect(screen.getByText('Book Now')).toBeInTheDocument();
    });

    test('validates form inputs', () => {
        render(<BookingForm />);
        
        const nameInput = screen.getByLabelText(/name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const submitButton = screen.getByText(/submit/i);

        fireEvent.change(nameInput, { target: { value: '' } });
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        fireEvent.click(submitButton);

        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
    });

    test('submits form with valid inputs', () => {
        render(<BookingForm />);
        
        const nameInput = screen.getByLabelText(/name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const submitButton = screen.getByText(/submit/i);

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
        fireEvent.click(submitButton);

        expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/email is invalid/i)).not.toBeInTheDocument();
    });
});