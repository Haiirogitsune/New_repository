import { createSlice } from '@reduxjs/toolkit'
import { data } from '../mock/tours';

const initialState: any = {
    tours: [],
    searchValues:{
        priceFrom: 12345
    }
};

export const tourSlice = createSlice({
    name: 'tour',
    initialState,
    reducers:{
        onAdd:(state, action) =>{
           state.tours = [... state.tours, action.payload];
        },
        fetchtours:(state) =>{
            state.tours = data
        },
        sortByPrice:(state) =>{
            state.tours = state.tours.sort((a: any, b: any) => a.price - b.price)
        },
        onDelete:(state, action) =>{
           state.tours = state.tours.filter((tour: any) => tour.id !== action.payload);
        },
        onChangeValues: (state, action) => {
            state.searchValues[action.payload.name] = action.payload.value;
        },
        filterTours: (state) => {
            let temp = [...data];

            if (state.searchValues.name){
                temp = temp.filter((tour: any) => tour.name.toLowerCase().includes(state.searchValues.name.toLowerCase()))
            }

            if (state.searchValues.priceFrom && state.searchValues.priceTo){
                temp = temp.filter((tour: any) => tour.price >= state.searchValues.priceFrom && tour.price <= state.searchValues.priceTo)
            }

            if (state.searchValues.countryFrom){
                temp = temp.filter((tour: any) => tour.from === state.searchValues.countryFrom)
            }

            temp = temp.filter((tour: any) => tour.breakfast === state.searchValues.breakfast)
            
            state.tour = temp;
        }
    }
})

 export const { onAdd, fetchtours, sortByPrice, onDelete, onChangeValues, filterTours } = tourSlice.actions;
 export default tourSlice.reducer;
