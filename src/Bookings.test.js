import React from 'react';
import { render, screen } from '@testing-library/react';
import Bookings from './Bookings';

test('render bookings component', () => {
  render(<Bookings currentDate="2023-08-04" availableTimes={[{ date: "2023-08-04", times: ["17:00", "18:00"] }]} />);
  expect(screen.getByText('Available bookings for 2023-08-04')).toBeInTheDocument();
  expect(screen.getByText('17:00')).toBeInTheDocument();
  expect(screen.getByText('18:00')).toBeInTheDocument();
});