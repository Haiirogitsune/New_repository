import Swiming from '../assets/images/Swiming.png';
import Wifi from '../assets/images/WiFi.png';
import AC from '../assets/images/AC.png';
import Dinner from '../assets/images/Dinner.png';

/*const Button =[{ 
    image: Swiming, 
    label: 'Swiming',
},{ 
    image: Wifi,
    label: 'Wi-Fi',
},{ 
    image: AC,
    label: 'AC',
},{ 
    image: Dinner,
    label: 'Dinner',
}]*/
  const image = Swiming;
  const label = "Swiming";

export const FacilitiesButton = (image,label) => {
    return(
        //Button.map((image,label) =>
            <div className="facilities-button">
                <img className='facilities-img' src={image}/>
                <p>{label}</p>
            </div>
        //)
        
    );
}