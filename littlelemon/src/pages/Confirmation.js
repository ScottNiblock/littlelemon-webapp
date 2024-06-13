import { useLocation, useNavigate } from "react-router-dom";
import '../css/Confirmation.css'
const Confirmation = () =>{
    const location = useLocation();
    const state = location.state || {};

    const { name, date, times, occasion, guests } = state;

    return (
        <div className="confirmation-details">
            {name ? (
                <>
                    <h1>You're all set, {name}!</h1>
                    <p>Your reservation details:</p>
                    <ul>
                        <li>Date: {date}</li>
                        <li>Time: {times}</li>
                        <li>Guests: {guests}</li>
                        <li>Occasion: {occasion}</li>
                    </ul>
                </>
            ) : (
                <h1>No reservation details available.</h1>
            )}
        </div>
    );
};
export default Confirmation;