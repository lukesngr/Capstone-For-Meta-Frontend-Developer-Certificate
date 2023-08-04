import BookingsForm from "./BookingsForm";
import Bookings from "./Bookings"
import './Main.css';
import { useState, useReducer, useEffect } from "react";
import { Redirect } from 'react-router';

function initalizeTimes(date) { 
    return fetchAPI(date); 
}


function Main() {
    const [currentDate, setCurrentDate] = useState(false);
    const [confirmationVisible, setConfirmationVisible] = useState(false);

    function updateTimes(state, action) {
        if(action.type === "add") {
            state = initalizeTimes(action.date);
        }else if(action.type === "delete") {
            const {type, ...rest} = action;
            submitAPI(rest).then(setConfirmationVisible(true));
        }
        return state;
    }

    let initialData = "";

    useEffect(() => {initialData = initalizeTimes(new Date)}, []);
    
    const [availableTimes, dispatch] = useReducer(updateTimes, initialData);
    return (
    <main>
        <div id="imageDiv">
            <img id="tablePicture" src="table.jpg"></img>
        </div>
        {currentDate && <Bookings currentDate={currentDate} availableTimes={availableTimes}></Bookings>}
        <BookingsForm updateTimes={dispatch} setCurrentDate={setCurrentDate}></BookingsForm>
        {confirmationVisible && <Redirect to="/confirmed"></Redirect>}
    </main>)
}

export default Main;
export {initalizeTimes};