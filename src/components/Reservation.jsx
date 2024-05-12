import React, {useState} from 'react';
import './style/Reservation.css';

const Reservation = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const availableTimes = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    return (
        <section className="reservation">
            <div className="container">
                <section className="reservation-wrap">
                    <div className="form-wrap">
                        <h2>Reservations</h2>
                        <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
                            <label htmlFor="res-date">Choose date</label>
                            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
                            <label htmlFor="res-time">Choose time</label>
                            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} >
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </select>
                            <label htmlFor="guests">Number of guests</label>
                            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                            <input type="submit" value="Make Your reservation" />
                        </form>
                    </div>
                    <div className="img-wrap">

                    </div>
                </section>
            </div>
        </section>
    );
};

export default Reservation;