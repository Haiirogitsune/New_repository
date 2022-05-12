import {Link} from 'react-router-dom';
import '../assets/styles/Navigation.scss';

const Header = () => {
    return(
        <nav>
            <p>SajidStudio</p>
            <Link to="/">Home</Link>
            <Link to="/tours">Tours</Link>
            <Link to="/type">Type of house</Link>
            <Link to="/contact">Contact</Link>
            <div><button>Login</button></div>
        </nav>
    );
};

export default Header;