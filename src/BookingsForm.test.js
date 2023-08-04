import {render, fireEvent, screen} from "@testing-library/react"
import BookingsForm from "./BookingsForm";

test('form submission should call handleSubmit', () => {
    const mockUpdateTimes = jest.fn();
    const mockSetCurrentDate = jest.fn();
    const { getByLabelText, getByTestId } = render(
      <BookingsForm updateTimes={mockUpdateTimes} setCurrentDate={mockSetCurrentDate} />
    );
  
    const dateInput = getByLabelText('Choose date');
    const submitButton = getByTestId('submitButton');
  
    fireEvent.change(dateInput, { target: { value: '2023-08-04' } });
  
    fireEvent.submit(submitButton);
  
    expect(mockUpdateTimes).toHaveBeenCalledWith({type: 'delete', date: '2023-08-04', time: '17:00'});
  });

test('Renders the BookingsForm heading', () => {
    render(<BookingsForm />);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})