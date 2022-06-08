import {React} from 'react';
import App from "./App";
import Header from "./Header";
import Tours from './Tours';
import ToursDetail from './ToursDetail.tsx';
import { /*BrowserRouter,*/ Routes, Route} from "react-router-dom";
import { useEffect } from "react";
//import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { setUseProxies } from "immer";
import { fetchtours } from "../reducers/toursReducer";

/*import { data } from '../mock/tours.js'
import { usersData } from "../mock/users";*/


const Provider = () => {
    const tours = useSelector((state) => state.tour.tours);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchtours());
        }, 5000)
        
        //dispatch(fetchUsers());
        //dispatch(setAuthUser(''));
    }, []);

    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<App />} />
                <Route index path="/tours" element={<Tours tours={tours}/>}/>
                <Route index path="/tours/:id" element={<ToursDetail tours={tours}/>}/>
                <Route index path="/admin" element={<div></div>}/>
                <Route index path="/home" element={<div></div>} />
                <Route index path="/about" element={<div></div>} />
                <Route index path="/contact" element={<div></div>} />
            </Routes>
        </div>
        
    );
}

export default Provider;