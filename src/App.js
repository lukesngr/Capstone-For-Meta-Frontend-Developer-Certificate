import './App.css';
import ConfirmedBookings from './ConfirmedBookings';
import TableReservation from './TableReservation';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableReservation />}></Route>
        <Route path="/confirmed" element={<ConfirmedBookings></ConfirmedBookings>}></Route>
      </Routes>
    </BrowserRouter>
      <TableReservation></TableReservation>
    </>
  );
}

export default App;
