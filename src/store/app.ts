import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface AppState {
    isEco: boolean;
    collections: string[];
}

const initialState: AppState = {
    isEco: false,
    collections: [],
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setEco: (state, action: PayloadAction<boolean>) => {
            state.isEco = action.payload;
            return state;
        },
        setCollections: (state, action: PayloadAction<string[]>) => {
            state.collections = action.payload;
            return state;
        },
    },
});

// Action creators are generated for each case reducer function
export const {setEco, setCollections} = appSlice.actions;

export const selectEco = (state: any) => state.app.isEco;
export const selectCollections = (state: any) => state.app.collections;

export default appSlice.reducer;
