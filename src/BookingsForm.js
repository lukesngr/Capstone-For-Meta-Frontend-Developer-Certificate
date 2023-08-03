import { useState } from 'react';
import './BookingsForm.css';

function BookingsForm() {

    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [numberOfGuests, setNumberOfGuests] = useState(null);
    const [occasion, setOccasion] = useState(null);
    return (
    <>
        <form id="reservationForm">
            <h1>Reserve a table</h1>
            <label for="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)}></input>
            <label for="res-time">Choose time</label>
            <select id="res-time "  value={time} onChange={(e) => setTime(e.target.value)}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)}></input>
            <label for="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input id="submitButton" type="submit" value="Make Your Reservation"></input>
        </form>
    </>)
}

export default BookingsForm;