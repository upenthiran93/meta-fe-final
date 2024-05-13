import React, { useEffect, useState } from 'react';
import './style/Reservation.css';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../API/API';
import imgcover from '../assets/images/restaurant.jpg';

const Reservation = ({ Times, despatch }) => {
    useEffect(() => {
        console.log('Times:', Times);
    }, [Times]);

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const navigate = useNavigate();

    const isFormValid = date && time && guests && occasion;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) {
            // If form is not valid, set form errors
            setFormErrors({
                date: !date,
                time: !time,
                guests: !guests,
                occasion: !occasion
            });
            return;
        }
        const formData = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        };
        const success = submitAPI(formData);
        if (success) {
            despatch(time); // Dispatch the selected time to be removed
            navigate('/confirmed'); // Navigate to the booking confirmation page
        } else {
            console.error('Failed to submit reservation');
        }
    };

    return (
        <section className="reservation">
            <div className="container">
                <article className="reservation-wrap">
                    <header>
                        <h2>Reservations</h2>
                    </header>
                    <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
                        <div className={"Field"}>
                            <label htmlFor="res-date">Choose date</label>
                            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)}
                                   required/>
                            {formErrors.date && <p>Please select a date</p>}
                        </div>
                        <div className={"Field"}>
                            <label htmlFor="res-time">Choose time</label>
                            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                                <option value="">Select Time</option>
                                {Times.map((time) => {
                                    return <option key={time} value={time}>{time}</option>
                                })}
                            </select>
                            {formErrors.time && <p>Please select a time</p>}
                        </div>
                            <div className={"Field"}>
                            <label htmlFor="guests">Number of guests</label>
                            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests}
                                   onChange={(e) => setGuests(e.target.value)} required/>
                            {formErrors.guests && <p>Please enter the number of guests</p>}
                        </div>
                        <div className={"Field"}>
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}
                                    required>
                                <option value="">Select Occasion</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                            {formErrors.occasion && <p>Please select an occasion</p>}
                        </div>
                            <input type="submit" value="Make Your reservation" aria-label="On Click"/>
                    </form>
                </article>
                <article className="reservation-img">
                    <img src={imgcover} alt="Reservation"/>
                </article>
            </div>
        </section>
    );
};

export default Reservation;
