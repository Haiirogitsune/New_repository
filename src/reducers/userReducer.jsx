import { createSlice } from '@reduxjs/toolkit'
import { usersData } from '../mock/users';

const initialState ={
    users: usersData,
    activeUser: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        onRegister:(state, action) =>{
           state.users = [... state.users, action.payload];
        },
        onLogin: (state, action) => {
            const userFound = state.users.find((user) => user.name === action.payload.name);

            state.activeUser = userFound;
        }
    }
})

 export const { onRegister, onLogin } = userSlice.actions;
 export default userSlice.reducer;
