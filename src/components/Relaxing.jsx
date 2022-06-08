import relaxing1 from '../assets/images/relaxing1.png';
import relaxing2 from '../assets/images/relaxing2.png';
import relaxing3 from '../assets/images/relaxing3.png';
import heart from '../assets/images/heart.png';
import {React} from 'react';
import '../assets/styles/Relaxing.scss';

const Relaxing = () => {
    return(
        <div className="relaxing-box">
            <div className="relaxing">
                <div className="relaxing-img">
                <img src={relaxing1} />
                <img className="special" src={relaxing2} />
                <img src={relaxing3} />
                </div>
                <div className="relaxing-text">
                <p>Welcome to Sajid Studio resort</p>
                <h1>Relaxing Pleasure</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur semper vitae integer eget velit lobortis. Maecenas ultrices nunc lobortis ac vivamus neque, eget. Placerat auctor enim nisl amet, in sem at. Elementum nec consequat vulputate nibh nisl ultrices diam sapien, nibh. Odio faucibus semper nibh vulputate condimentum.</p>
                </div>
            </div>
            <div className="book-now">
                <div className="book-now-text">
                <p className="resort">Sajid Resort</p>
                <img src={heart} />
                <p className="like">4.3</p>
                </div>
                <button>Book Now</button>
            </div>
        </div>
    )
}

export default Relaxing;