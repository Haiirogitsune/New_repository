/*import React, { useState } from 'react';
/*import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'*/
/*import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAdd, sortByPrice, onDelete } from '../reducers/toursReducer';
import '../assets/styles/ToursMenu.scss';
import Search from './search/Search.tsx';
import { Loading } from './Loading.tsx';

const Admin = () => {
    const dispatch = useDispatch();
    const tours = useSelector((state) => state.tour.tours);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = () => {
        dispatch(onAdd({
            id,
            name,
            price,
            description: 'test description'
        }))
    };

    if (!tours.lenght) {
        <Loading/>
    }

    return(
        <div>
            <Search/>
            <div className="tours">
            <article>
                <form>
                    <label>ID</label>
                    <input className="add" value={id} type="text" placeholder="Enter id" onChange={(e) => setId(e.target.value)} />
                    <label>Name</label>
                    <input className="add" name='name' value={name} type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <label>Price</label>
                    <input className="add" name='price' value={price} type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                </form>
                <button onClick={handleSubmit}>Add tour</button>
                <button onClick={() => dispatch(sortByPrice())}>Sort by price</button>
            </article>
            <div className="tours-box">
                <div className="tour">
                    {tours.map((tour) => {
                        return (
                            <div key={tour.id} className="tour">
                                <div className="tour-card">
                                    {tour.discount && <div style={{position:'absolute', marginLeft: '200px', /*top: 10, right: 10,*/ /*color: tour.discount > 10 ? 'red' : 'yellow'}}>-{tour.discount}%</div>}
                                    /*<img className="tour-img" src={tour.image}/>
                                    <div className="tour-info">
                                        <p className="tour-title">{tour.name}</p>
                                        <p className="tour-price">{tour.price}$</p>
                                        <Link className="tour-details" to={`../tours/${tour.id}`}>Details</Link>
                                        {/*<Button variant="primary">Go somewhere</Button>*//*}
                                        /*<button className="tour-delete" onClick={() => {dispatch(onDelete(tour.id))}}>Delete</button>
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
export default Admin;*/