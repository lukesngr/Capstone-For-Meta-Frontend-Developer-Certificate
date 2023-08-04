import './Bookings.css';

function Bookings(props) {
    return (
        <>
        <div id="bookingsTable">
            <h1>Available bookings for {props.currentDate} </h1>
            {props.availableTimes.find(timeSlot => timeSlot.date == props.currentDate).times.map(time => <p>{time}</p>)}
        </div>
        </>
    )
}

export default Bookings