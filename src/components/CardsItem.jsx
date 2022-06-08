import {React} from 'react';
import cardInfo from '../assets/images/cardInfo.png';

import '../assets/styles/App.scss';

// eslint-disable-next-line react/prop-types
export function Card({ price, id, comment, image }) {
  return (
    <div className='card'>
      <img src={image}/>
      <div className='card-info'>
        <div className='card-text'>
          <p className='card-price'>${price}</p>
          <h3 className='card-id'>Booking ID: {id}</h3>
          <p className='card-comment'>{comment}</p>
        </div>
        <img src={cardInfo}/>
      </div>
    </div>
  );
}
/**/
export default Card;
