import React from 'react';
import { useParams } from "react-router-dom";

const ToursDetail = (tours: any) => {
    const location = useParams();
    const selectedTour: any = tours.tours.find((tour: any)=> tour.id === location.id);

    if (selectedTour) return null;

    return(
        <div className="tour-detail">
            <p>{selectedTour.name}</p>
            <p>{selectedTour.price}$</p>
            <p>{selectedTour.decription}</p>
        </div>
    );
}

export default ToursDetail;
