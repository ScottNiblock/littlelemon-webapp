import BookingForm from "../components/BookingForm";
import '../css/BookingPage.css'
const BookingPage = (props) =>{
    return(
        <div className="res-page">
        <h1>Reserve a Table</h1>
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} />
        </div>

    )
}
export default BookingPage;