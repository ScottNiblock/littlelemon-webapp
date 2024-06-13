import { useState } from "react";
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
    const [name, setName] = useState("")
    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("")
    const navigate = useNavigate()
 
    const handleSumbit = (e) => {
    e.preventDefault();
    const formData = {name, date, times, occasion, guests}
    navigate('/confirmation', {state : formData})
    };
 
    const handleDateChange = (e) => {
     setDate(e);
     props.dispatch(e);
    }
 
   return (
    <form onSubmit={handleSumbit} className="res-form">
        <label htmlFor="res-name">Enter your Name</label>
        <input  id='name'name="res-name" type="text" className="field" placeholder="Enter your name" required onChange={(e)=> setName(e.target.value)}></input>
        <label htmlFor="res-date">Select a Date</label>
        <input name="res-date" type="date" className="field" value={date} onChange={(e)=>handleDateChange(e.target.value)} required></input>
        <label htmlFor="res-time">Select a Time</label>
        <select name="res-time" className="field"  value={times} onChange={(e)=> setTimes(e.target.value)} required>
            <option>Select a time</option>
            {props.availableTimes.availableTimes.map(time=>{
                return(
                    <option value={time} key={time}>{time}</option>
                )
            })}
        </select>
        <label htmlFor="res-guests">Number of Guests</label>
        <input name='res-guests' type="number" className="field" min='1' max='10' placeholder="1" value={guests} onChange={(e)=> setGuests(e.target.value)} required></input>
        <label htmlFor="res-occasion">Occasion</label>
        <select name="res-occsasion" className="field" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option value=''>Select an Occasion</option>
            <option value='birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
            <option value='other'>Other</option>
        </select>
        <input type="submit" className="page-btn" value="Make your Reservation"></input>

    </form>
   );
 };
 
 export default BookingForm;