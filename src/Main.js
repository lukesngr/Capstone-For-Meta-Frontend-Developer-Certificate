import BookingsForm from "./BookingsForm";
import './Main.css';

function Main() {
    return (
    <main>
        <div id="imageDiv">
            <img id="tablePicture" src="table.jpg"></img>
        </div>
        <h1>Reserve a table</h1>
        <BookingsForm></BookingsForm>
    </main>)
}

export default Main;