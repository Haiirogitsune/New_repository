import {React} from 'react';
import '../assets/styles/App.scss';
import Banner from './Banner.jsx';
import CardsBox from './CardsBox.jsx';
import Beach from './Beach.jsx';
import Relaxing from './Relaxing';
import Airlines from './Airlines';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Banner />
      <CardsBox />
      <Beach />
      <Relaxing />
      <Airlines />
      <Footer />
    </div>
  );
}
/* 
<FacilitiesButton/>
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
*/
export default App;
