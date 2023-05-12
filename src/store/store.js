import { configureStore, createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const contactsReducer = createSlice({
    name: 'contacts',
    initialState: JSON.parse(localStorage.getItem('contacts') ?? []),
    reducer:{
        addItem:{
            reducer(state, actions){
                state.push(actions.payload);
            },
            prepare({name, number}){
                return{
                    payload:{
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
    },
});
 
const filterReducer = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(state, actions){
            return actions.payload;
        }
    }
})

export const store = configureStore({
    reducer: {
        contacts: contactsReducer.reducer,
        filter: filterReducer.reducer,
    },
})