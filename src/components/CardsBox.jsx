import choice1 from '../assets/images/cardCityofChoice1.png';
import choice2 from '../assets/images/cardCityofChoice2.png';
import choice3 from '../assets/images/cardCityofChoice3.png';
//import cardsList from '../assets/images/cardsList.png';
import { Card } from './CardsItem.jsx';
import {React} from 'react';
import '../assets/styles/Cards.scss';

const CardsBox = () => {
    return(
        <div className="cards-box">
        <h1 className="cards-h">Entire city of choice</h1>
        <div className="cards">
          <Card
            id="9837432"
            price={600.00}
            comment="Turky resort"
            image={choice1}
          />
          <Card
            id="9837432"
            price={3000}
            comment="Turky resort"
            image={choice2}
          />
          <Card
            id="9837432"
            price={3000}
            comment="Turky resort"
            image={choice3}
          />
          <br />
        </div>
        <div className="cards-background" />
      </div>
    )
}

export default CardsBox;