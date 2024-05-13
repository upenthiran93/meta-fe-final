
import { useNavigate } from 'react-router-dom';

function ConfirmedBooking (props) {
    const navigate = useNavigate();

    return (
        <div className={"ConfirmedBooking"}>
            <h1>Booking Confirmed</h1>
            <p>Your booking for {props.bookingDate} has been confirmed. Thank you!</p>
            <div className={"btnGroup"}>
            <button onClick={() => navigate('/')}>Go to Home</button>
            <button onClick={() => navigate('/reservation')}>Reservation</button>
            </div>
        </div>
    )
}
export default ConfirmedBooking;