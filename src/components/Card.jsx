import choice1 from '../assets/images/cardCityofChoice1.png';
import choice2 from '../assets/images/cardCityofChoice2.png';
import choice3 from '../assets/images/cardCityofChoice3.png';
import cardsList from '../assets/images/cardsList.png';
import cardInfo from '../assets/images/cardInfo.png';

import '../assets/styles/App.scss';

const image = choice1;
const price = "$600.00";
const id = 9837432;
const comment = "Turky resort";

export function Card() {
  return (
    <div className='card'>
      <img src={image}/>
      <div className='card-info'>
        <div className='card-text'>
          <p className='card-price'>{price}</p>
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
