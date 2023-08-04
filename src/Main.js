import BookingsForm from "./BookingsForm";
import Bookings from "./Bookings"
import './Main.css';
import { useState, useReducer } from "react";

function initalizeTimes(date) { 
    return fetchAPI(date); 
}

function updateTimes(state, action) {
    if(action.type === "add") {
        state = initalizeTimes(action.date);
    }else if(action.type === "delete") {
        const {type, ...rest} = action;
        submitAPI(rest);
    }
    return state;
}

function Main() {
    const [currentDate, setCurrentDate] = useState(false);
    const [availableTimes, dispatch] = useReducer(updateTimes, initalizeTimes(new Date()));
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
export {initalizeTimes, updateTimes};