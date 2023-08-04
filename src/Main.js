import BookingsForm from "./BookingsForm";
import Bookings from "./Bookings"
import './Main.css';
import { useState, useReducer } from "react";

function updateTimes(state, action) {
    if(action.type === "add") {
        if(state.findIndex(dateTimeSlot => dateTimeSlot.date === action.date) == -1) {
            state.push({date: action.date, times: action.times})
        }
    }else if(action.type === "delete") {
        let bookingTimeSlotIndex = state.findIndex(dateTimeSlot => dateTimeSlot.date === action.date);
        let indexOfTimeToBeDeleted = state[bookingTimeSlotIndex].times.indexOf(action.time);
        state[bookingTimeSlotIndex].times.splice(indexOfTimeToBeDeleted, 1);
    }
    return state;
}

function Main() {
    const [currentDate, setCurrentDate] = useState(false);
    const [availableTimes, dispatch] = useReducer(updateTimes, []);
    return (
    <main>
        <div id="imageDiv">
            <img id="tablePicture" src="table.jpg"></img>
        </div>
        {currentDate && <Bookings currentDate={currentDate} availableTimes={availableTimes}></Bookings>}
        <BookingsForm updateTimes={dispatch} setCurrentDate={setCurrentDate}></BookingsForm>
    </main>)
}

export default Main;