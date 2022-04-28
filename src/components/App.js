import logo from '../assets/images/logo.svg';
import banner from '../assets/images/banner.jpg';
import Swiming from '../assets/images/Swiming.png';
import Wifi from '../assets/images/WiFi.png';
import AC from '../assets/images/AC.png';
import Dinner from '../assets/images/Dinner.png';
import bannerSearch1 from '../assets/images/bannerSearch1.png';
import bannerSearch2 from '../assets/images/bannerSearch2.png';
import bannerSearch3 from '../assets/images/bannerSearch3.png';
import Search from '../assets/images/Search.png';
import choice1 from '../assets/images/cardCityofChoice1.png';
import choice2 from '../assets/images/cardCityofChoice2.png';
import choice3 from '../assets/images/cardCityofChoice3.png';
import cardsList from '../assets/images/cardsList.png';
import cardInfo from '../assets/images/cardInfo.png';
import beach1 from '../assets/images/beach1.png';
import beach2 from '../assets/images/beach2.png';
import beach3 from '../assets/images/beach3.png';
import beach4 from '../assets/images/beach4.png';
import beachPlayer from '../assets/images/beachPlayer.png';
import relaxing1 from '../assets/images/relaxing1.png';
import relaxing2 from '../assets/images/relaxing2.png';
import relaxing3 from '../assets/images/relaxing3.png';
import heart from '../assets/images/heart.png';
import woman from '../assets/images/woman.png';
import '../assets/styles/App.scss';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <body>
      <nav>
        <p>SajidStudio</p>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Type of house</a>
        <a href='#'>Contact</a>
        <button>Login</button>
      </nav>

      <div className='banner'>
        <div className='banner-img'>
          <img src={banner}/>
        </div>
        <div className='banner-content'>
          <div className='banner-text'>
            <h1>Enjoy Your</h1>
            <h1>Dream Vacation</h1>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>  
          <div className='banner-menu'>
            <div className='banner-Facilities'>
              <h1>Facilities</h1>
              <span>See more</span>
              <div>
                <img className='facilities-img' src={Swiming}/>
                <p>Swiming</p>
              </div>
              <div>
                <img className='facilities-img' src={Wifi}/>
                <p>Wi-Fi</p>
              </div>
              <div>
                <img className='facilities-img' src={AC}/>
                <p>AC</p>
              </div>
              <div>
                <img className='facilities-img' src={Dinner}/>
                <p>Dinner</p>
              </div>
            </div>
            <div className='banner-Hotels-for-you'>
              <h2>Hotels for you</h2>
              <p>5 days 6 nights</p>
              <button>$4000</button>
            </div>
            <div className='banner-Search'>
              <form>
                <input placeholder='Search.....'></input>
                <img src={Search}/>
              </form>
              <img src={bannerSearch1}/>
              <img src={bannerSearch2}/>
              <img src={bannerSearch3}/>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className='cards-h'>Entire city of choice</h1>
        <div className='cards'>
          <div className='card'>
            <img src={choice1}/>
            <div className='card-info'>
              <div className='card-text'>
                <p className='card-price'>$600.00</p>
                <h3 className='card-id'>Booking ID: 9837432</h3>
                <p className='card-comment'>Turky resort</p>
              </div>
              <img src={cardInfo}/>
            </div>
          </div>
          <div className='card'>
            <img src={choice2}/>
            <div className='card-info'>
              <div className='card-text'>
                <p className='card-price'>$600.00</p>
                <h3 className='card-id'>Booking ID: 9837432</h3>
                <p className='card-comment'>Turky resort</p>
              </div>
              <img src={cardInfo}/>
            </div>
          </div>
          <div className='card'>
            <img src={choice3}/>
            <div className='card-info'>
              <div className='card-text'>
                <p className='card-price'>$600.00</p>
                <h3 className='card-id'>Booking ID: 9837432</h3>
                <p className='card-comment'>Turky resort</p>
              </div>
              <img src={cardInfo}/>
            </div>
          </div>
          <br/>
        </div>
        
        <div className='cards-background'></div>
      </div>

      <div className='beach'>
        <div className='beach-column'>
          <h1>Resort Surprises</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul>
            <li><img src={beach1}/><p>Infinity Pool</p></li>
            <li><img src={beach2}/><p>The Beach</p></li>
            <li><img src={beach3}/><p>Beach Surprise</p></li>
            <li><img src={beach4}/><p>Beach Activities</p></li>
          </ul>
        </div>
        <div className='beach-column'>
          <img src={beachPlayer}/>
        </div>
      </div>

      <div className='relaxing'>
        <div className='relaxing-img'>
          <img src={relaxing1}/>
          <img className='special' src={relaxing2}/>
          <img src={relaxing3}/>
        </div>
        <div className='relaxing-text'>
          <p>Welcome to Sajid Studio resort</p>
          <h1>Relaxing Pleasure</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur semper vitae integer eget velit lobortis. Maecenas ultrices nunc lobortis ac vivamus neque, eget. Placerat auctor enim nisl amet, in sem at. Elementum nec consequat vulputate nibh nisl ultrices diam sapien, nibh. Odio faucibus semper nibh vulputate condimentum.</p>
        </div>
      </div>
      <div className='book-now'>
        <div className='book-now-text'>
          <p className='resort'>Sajid Resort</p>
          <img src={heart}/>
          <p className='like'>4.3</p>
        </div>
        <button>Book Now</button>
      </div>

      <div className='airline'>
        <div className='airline-in'>
          <div className='airline-cont'>
            <img className='woman' src={woman}/>
            <span>Search for other Top Airlines</span>
            <ul>
              <li>Biman BD Airline</li>
              <li>Badal Airline</li>
              <li>Raza Airline</li>
              <li>Hello Int. Airline</li>
              <li>Pakistan International Airline</li>
              <li>Hello International Airline</li>
            </ul>
          </div>
        </div>
      </div>
     
      <footer>
        <h1>Get better work</h1><br/>
        <p>See why million of people across 195</p>
        <p>uses Desh dot</p>
        <form>
          <input placeholder='artalisajid@gmail.com'></input>
          <button>Try Free</button>
        </form>
        <div className='footer-nav'>
          <div className='footer-nav-col1'>
            <h3>Sajid Studio</h3><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='footer-nav-col2'>
            <h3>Links</h3><br/>
            <ul>
              <li>Home</li>
              <li>Prior</li>
              <li>Download</li>
              <li>About</li>
              <li>Service</li>
            </ul>
          </div>
          <div className='footer-nav-col2'>
            <h3>Support</h3><br/>
            <ul>
              <li>FAQ</li>
              <li>How it</li>
              <li>Features</li>
              <li>Contact</li>
              <li>Reporting</li>
            </ul>
          </div>
          <div className='footer-nav-col1'>
            <h3>Contact Us</h3><br/>
            <p>+923431279488</p>
            <p>artalisajid@gmail.com</p>
          </div>
        </div>
        <div className='footer-bottom'>
          <span>Copyright & Design by Sajid</span>
          <p>Terms of use</p>
          <p>Privacy policy</p>
        </div>
      </footer>
    </body>
    
  );
}
/**/
export default App;
