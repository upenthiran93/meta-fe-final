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

function App() {
    return (

        <div className='App'>


            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>

                </Routes>

            <Footer/>
            </Router>
        </div>
    );
}

export default App;