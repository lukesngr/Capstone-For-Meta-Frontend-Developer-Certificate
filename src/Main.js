import BookingsForm from "./BookingsForm";
import './Main.css';
import { useState, useReducer } from "react";

function updateTimes(state, action) {
    let copyOfState = state;
    copyOfState.push(action);
    return copyOfState;
}

function Main() { 
    const [unavailableTimes, dispatch] = useReducer(updateTimes, []);
    return (
    <main>
        <div id="imageDiv">
            <img id="tablePicture" src="table.jpg"></img>
        </div>
        <BookingsForm updateTimes={dispatch}></BookingsForm>
    </main>)
}

export default Main;