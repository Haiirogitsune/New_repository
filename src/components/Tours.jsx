import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Tours = ( tours ) => {
    return(
        <div className="tours">
            {tours.tours.map((tour) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{tour.name}</Card.Title>
                            <Card.Text>{tour.price}$</Card.Text>
                            <Link to={`../tours/${tour.id}`}>Details</Link>
                            {/*<Button variant="primary">Go somewhere</Button>*/}
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}
export default Tours;