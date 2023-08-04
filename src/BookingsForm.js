import { useState } from 'react';
import './BookingsForm.css';

function BookingsForm(props) {

    const [date, setDate] = useState(0);
    const [time, setTime] = useState("17:00");
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    function handleSubmit(event) {
        event.preventDefault();
        props.updateTimes({type: "delete", date: date, time: time});
    }

    function onDateChange(e) {
        setDate(e.target.value);
        props.setCurrentDate(e.target.value);
        props.updateTimes({type: "add", date: e.target.value, times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]})
    }

    return (
    <>
        <form id="reservationForm" onSubmit={handleSubmit}  aria-label="Reserve a table">
            <h1>Reserve a table</h1>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={onDateChange}></input>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time "  value={time} onChange={(e) => setTime(e.target.value)}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)}></input>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input id="submitButton" type="submit" value="Make Your Reservation"></input>
        </form>
    </>)
}

export default BookingsForm;