import { render, screen,fireEvent } from "@testing-library/react";
import { app } from '../App';
import Reservation from './Reservation';

test('Renders the Reservation heading', () => {
    render(<Reservation Times={[]} despatch={() => {}} />);
    const headingElement = screen.getByText("Reservations");
    expect(headingElement).toBeInTheDocument();
});

test('handleSubmit function removes the selected time', () => {
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const mockDispatch = jest.fn();

    render(<Reservation Times={times} despatch={mockDispatch} />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '19:00' } });

    // Simulate form submission
    fireEvent.submit(screen.getByText(/Make Your reservation/i));

    // Check if the dispatch function was called with the correct argument
    expect(mockDispatch).toHaveBeenCalledWith('19:00');
});