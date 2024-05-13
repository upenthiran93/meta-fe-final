import { useNavigate } from 'react-router-dom';
import img from '../assets/images/restaurant.jpg';
function NotDesigned() {
    const navigate = useNavigate();
    return (
        <div className={"NotDesigned"}>
            <h1>Not Designed Yet</h1>
            <img src={img} alt="Not Designed" /> {/* Replace "path_to_your_image" with the actual path to your image */}
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    );
}

export default NotDesigned;