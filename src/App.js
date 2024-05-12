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

            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<Main/>}/>

                </Routes>
            </Router>
            <Footer/>

        </div>
    );
}

export default App;