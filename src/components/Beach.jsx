import beach1 from '../assets/images/beach1.png';
import beach2 from '../assets/images/beach2.png';
import beach3 from '../assets/images/beach3.png';
import beach4 from '../assets/images/beach4.png';
import beachPlayer from '../assets/images/beachPlayer.png';
import {React} from 'react';
import '../assets/styles/Beach.scss';

const Beach = () => {
    return(
        <div className="beach">
            <div className="beach-column">
            <h1>Resort Surprises</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul>
                <li>
                <img src={beach1} />
                <p>Infinity Pool</p>
                </li>
                <li>
                <img src={beach2} />
                <p>The Beach</p>
                </li>
                <li>
                <img src={beach3} />
                <p>Beach Surprise</p>
                </li>
                <li>
                <img src={beach4} />
                <p>Beach Activities</p>
                </li>
            </ul>
            </div>
            <div className="beach-column">
            <img src={beachPlayer} />
            </div>
        </div>
    )
}

export default Beach;