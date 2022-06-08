import woman from '../assets/images/woman.png';
import airLi1 from '../assets/images/airLi1.png';
import airLi2 from '../assets/images/airLi2.png';
import airLi3 from '../assets/images/airLi3.png';
import airLi4 from '../assets/images/airLi4.png';
import airLi5 from '../assets/images/airLi5.png';
import airLi6 from '../assets/images/airLi6.png';
import {React} from 'react';
import '../assets/styles/Airline.scss';

const Airlines = () => {
    return(
        <div className="airline-box">
            <img className="woman" src={woman} />
            <div className="airline">
                <div className="airline-in">
                <div className="airline-cont">
                    <span>Search for other Top Airlines</span>
                    <ul>
                    <li>
                        <img className="air-img" src={airLi1} />
                        <p className="air-text">Biman BD Airline</p>
                    </li>
                    <li>
                        <img className="air-img" src={airLi2} />
                        <p className="air-text">Badal Airline</p>
                    </li>
                    <li>
                        <img className="air-img" src={airLi3} />
                        <p className="air-text">Raza Airline</p>
                    </li>
                    </ul>
                    <ul>
                    <li>
                        <img className="air-img" src={airLi4} />
                        <p className="air-text">Hello Int. Airline</p>
                    </li>
                    <li>
                        <img className="air-img" src={airLi5} />
                        <p className="air-text">Pakistan International Airline</p>
                    </li>
                    <li>
                        <img className="air-img" src={airLi6} />
                        <p className="air-text">Hello International Airline</p>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Airlines;