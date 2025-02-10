import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEmployerAuth: false,
    employerData: {},
};

export const employerSlice = createSlice({
    name: "employer",
    initialState,
    reducers: {
        saveEmployer: (state, action) => {
            state.isEmployerAuth = true;
            state.employerData = action.payload;
        },
        clearEmployer: (state) => {
            state.isEmployerAuth = false;
            state.employerData = {};
        },
    },
});




// Action creators are generated for each case reducer function
export const { saveEmployer, clearEmployer } = employerSlice.actions;

export default employerSlice.reducer;
