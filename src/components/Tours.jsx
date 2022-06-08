import React/*, { useState }*/ from 'react';
/*import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'*/
import { Link } from 'react-router-dom';
import { /*useDispatch,*/ useSelector } from 'react-redux';
//import { onAdd, sortByPrice, onDelete } from '../reducers/toursReducer';
import '../assets/styles/ToursMenu.scss';
import Search from './search/Search.tsx';
import { Loading } from './Loading.tsx';

const Tours = () => {
    //const dispatch = useDispatch();
    const tours = useSelector((state) => state.tour.tours);
    /*const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = () => {
        dispatch(onAdd({
            id,
            name,
            price,
            description: 'test description'
        }))
    };*/

    if (!tours.lenght) {
        <Loading/>
    }

    return(
        <div>
            <Search/>
            <div className="tours">
            <div className="tours-box">
                <div className="tour">
                    {tours.map((tour) => {
                        return (
                            <div key={tour.id} className="tour">
                                <div className="tour-card">
                                    {tour.discount && <div style={{position:'absolute', marginLeft: '200px', /*top: 10, right: 10,*/ color: tour.discount > 10 ? 'red' : 'yellow'}}>-{tour.discount}%</div>}
                                    <img className="tour-img" src={tour.image}/>
                                    <div className="tour-info">
                                        <p className="tour-title">{tour.name}</p>
                                        <p className="tour-price">{tour.price}$</p>
                                        <Link className="tour-details" to={`../tours/${tour.id}`}>Details</Link>
                                        {/*<Button variant="primary">Go somewhere</Button>*/}
                                        {/*<button className="tour-delete" onClick={() => {dispatch(onDelete(tour.id))}}>Delete</button>*/}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            
        </div>
        </div>
        
    )
}
export default Tours;

/*
<Card  className="tour-card">
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title className="tour-title">{tour.name}</Card.Title>
        <Card.Text className="tour-price">{tour.price}$</Card.Text>
        <Link className="tour-details" to={`../tours/${tour.id}`}>Details</Link>
        //{<Button variant="primary">Go somewhere</Button>}
        <button className="tour-delete" onClick={() => {dispatch(onDelete(tour.id))}}>Delete</button>
    </Card.Body>
</Card>
<Form.Group>
    <Form.Label>ID</Form.Label>
    <input value={id} type="text" placeholder="Enter id" onChange={(e) => setId(e.target.value)} />
</Form.Group>
<Form.Group controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <input name='name' value={name} type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
</Form.Group>
*/
