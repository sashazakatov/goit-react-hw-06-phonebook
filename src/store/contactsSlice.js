import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: JSON.parse(localStorage.getItem('contacts') ?? []),
    reducers:{
        addTask:{
            reducer(state, action){
                state.push(action.payload);
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

export const { addTask } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;