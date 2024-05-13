import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Reservation from "./components/Reservation";
import React from "react";

function undateTime(times,action) {
    return times.filter((time) => {
        return time !== action;
    });
}
function InitialTime() {

    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}
function App() {

    const [times, setTimes] = React.useReducer (undateTime,InitialTime());
    return (

        <div className='App'>


            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/reservation" element={<Reservation Times={times} despatch={setTimes} />} />

                </Routes>

            <Footer/>
            </Router>
        </div>
    );
}

export default App;