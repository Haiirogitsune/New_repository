import banner from '../assets/images/banner.jpg';
import Swiming from '../assets/images/Swiming.png';
import Wifi from '../assets/images/WiFi.png';
import AC from '../assets/images/AC.png';
import Dinner from '../assets/images/Dinner.png';
import clock from '../assets/images/clock.png';
import bannerSearch1 from '../assets/images/bannerSearch1.png';
import bannerSearch2 from '../assets/images/bannerSearch2.png';
import bannerSearch3 from '../assets/images/bannerSearch3.png';
import Search from '../assets/images/Search.png';

import {React} from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Banner.scss';

const Banner = () => {
    return(
        <div className="banner">
            <div className="banner-img">
                <img src={banner} />
            </div>
            <div className="banner-content">
                <div className="banner-text">
                <h1>Enjoy Your</h1>
                <h1>Dream Vacation</h1>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className="banner-menu">
                    <div className="banner-Facilities">
                        <h1>Facilities</h1>
                        <Link to="/see-more">See more</Link>
                        <div className="facilities-button">
                        <img className="facilities-img" src={Swiming} />
                        <p>Swiming</p>
                        </div>
                        <div className="facilities-button">
                        <img className="facilities-img" src={Wifi} />
                        <p>Wi-Fi</p>
                        </div>
                        <div className="facilities-button">
                        <img className="facilities-img" src={AC} />
                        <p>AC</p>
                        </div>
                        <div>
                        <img className="facilities-img" src={Dinner} />
                        <p>Dinner</p>
                        </div>

                    </div>
                    <div className="banner-Hotels-for-you">
                        <h2>Hotels for you</h2>
                        <p>5 days 6 nights</p>
                        <button>
                        <img src={clock} />
                        <p>$4000</p>
                        </button>
                    </div>
                    <div className="banner-Search">
                        <form>
                        <input placeholder="Search....." />
                        <img src={Search} />
                        </form>
                        <img src={bannerSearch1} />
                        <img src={bannerSearch2} />
                        <img src={bannerSearch3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;