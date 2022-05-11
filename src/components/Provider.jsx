import App from "./App";
import Header from "./Header";
import Tours from './Tours';
import ToursDetail from './ToursDetail';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from '../mock/tours.js'

const Provider = () => {
    const [tours, setTours] = useState([]);

    useEffect(() =>{
        setTours(data)
    }, []);

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route index path="/tours" element={
                    <div>
                        <Header/>
                        <Tours tours={tours}/>
                    </div>} 
                />
                <Route index path="/tours-id" element={
                    <div>
                        <Header/>
                        <ToursDetail tours={tours}/>
                    </div>}
                />
                <Route index path="/home" element={<Header/>} />
                <Route index path="/about" element={<Header/>} />
                <Route index path="/contact" element={<Header/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Provider;