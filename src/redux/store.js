import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import adminReducer from "./features/adminSlice";
import employerReducer from "./features/employerSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer,
        employer: employerReducer,

    },
});
